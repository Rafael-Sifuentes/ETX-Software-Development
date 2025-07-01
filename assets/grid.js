




class InteractiveGrid {
    constructor(containerId = 'gridContainer') {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Container with id "${containerId}" not found`);
            return;
        }
        
        this.canvas = null;
        this.gl = null;
        this.program = null;
        this.dots = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.containerWidth = 0;
        this.containerHeight = 0;
        this.spacing = 25;
        this.maxDistance = 150;
        this.dotCount = 0;
        this.animationId = null;
        this.falloffStrength = 1.0; // 1.0 = normal fade, <1.0 = more spread, >1.0 = tighter center
        
        // GPU buffers
        this.positionBuffer = null;
        this.baseDataBuffer = null;
        this.currentDataBuffer = null;
        
        this.init();
    }

    init() {
        this.setupCanvas();
        this.setupWebGL();
        this.updateDimensions();
        this.createGrid();
        this.bindEvents(); // Changed this to call the modified bindEvents
        this.animate();
    }

    setupCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.container.appendChild(this.canvas);
    }

    setupWebGL() {
        this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
        if (!this.gl) {
            console.error('WebGL not supported, falling back to Canvas 2D');
            this.setupCanvas2D();
            return;
        }

        // Vertex shader - runs for each dot
        const vertexShaderSource = `
            attribute vec2 a_position;
            attribute vec3 a_baseData;
            
            uniform vec2 u_resolution;
            uniform vec2 u_mouse;
            uniform float u_maxDistance;
            uniform float u_time;
            
            varying float v_opacity;
            varying float v_glowIntensity;
            
            void main() {
                vec2 position = a_position;
                
                // Calculate distance to mouse
                float dist = distance(position, u_mouse);
                float influence = 1.0 - clamp(dist / u_maxDistance, 0.0, 1.0);
                
                // Apply magnetic attraction
                if (dist < u_maxDistance) {
                    vec2 direction = normalize(u_mouse - position);
                    position += direction * influence * 5.0;
                }
                
                // Calculate scale with interaction
                float interactionScale = pow(influence, 2.0) * 2.0;
                float finalScale = a_baseData.y + interactionScale;
                
                // Calculate opacity with interaction
                float interactionOpacity = pow(influence, 2.0) * 0.8;
                v_opacity = clamp(a_baseData.x + interactionOpacity, 0.1, 1.0);
                
                // Glow intensity for edge dots
                v_glowIntensity = a_baseData.z * influence;
                
                // Convert to clip space
                vec2 clipSpace = ((position / u_resolution) * 2.0 - 1.0) * vec2(1, -1);
                
                gl_Position = vec4(clipSpace, 0, 1);
                gl_PointSize = finalScale * 4.0;
            }
        `;

        // Fragment shader - determines pixel colors
        const fragmentShaderSource = `
            precision mediump float;
            
            varying float v_opacity;
            varying float v_glowIntensity;
            
            void main() {
                // Create circular dots
                vec2 center = gl_PointCoord - 0.5;
                float dist = length(center);
                
                if (dist > 0.5) {
                    discard;
                }
                
                // Soft edge with glow
                float alpha = smoothstep(0.5, 0.2, dist);
                float glow = smoothstep(0.8, 0.0, dist) * v_glowIntensity;
                
                vec3 color = vec3(0.72, 0.42, 0.83);
                color += glow * vec3(0.05, 0.02, 0.1);
                
                gl_FragColor = vec4(color, alpha * v_opacity);
            }
        `;

        // Compile and link shaders
        this.program = this.createProgram(vertexShaderSource, fragmentShaderSource);
        if (!this.program) return;

        this.gl.useProgram(this.program);

        // Get attribute and uniform locations
        this.locations = {
            position: this.gl.getAttribLocation(this.program, 'a_position'),
            baseData: this.gl.getAttribLocation(this.program, 'a_baseData'),
            resolution: this.gl.getUniformLocation(this.program, 'u_resolution'),
            mouse: this.gl.getUniformLocation(this.program, 'u_mouse'),
            maxDistance: this.gl.getUniformLocation(this.program, 'u_maxDistance'),
            time: this.gl.getUniformLocation(this.program, 'u_time')
        };

        // Enable blending for transparency
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    }

    createProgram(vertexSource, fragmentSource) {
        const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexSource);
        const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentSource);
        
        if (!vertexShader || !fragmentShader) return null;

        const program = this.gl.createProgram();
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);

        if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
            console.error('Program link error:', this.gl.getProgramInfoLog(program));
            return null;
        }

        return program;
    }

    createShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', this.gl.getShaderInfoLog(shader));
            this.gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    updateDimensions() {
        this.containerWidth = this.container.offsetWidth;
        this.containerHeight = this.container.offsetHeight;
        
        if (this.canvas) {
            this.canvas.width = this.containerWidth;
            this.canvas.height = this.containerHeight;
            
            if (this.gl) {
                this.gl.viewport(0, 0, this.containerWidth, this.containerHeight);
                this.gl.uniform2f(this.locations.resolution, this.containerWidth, this.containerHeight);
            }
        }
    }

    createGrid() {
        if (!this.gl || !this.program) return;

        const positions = [];
        const baseData = [];
        
        // Create multiple density layers
        this.createGridLayer(positions, baseData, 1.0, 'primary');
        this.createGridLayer(positions, baseData, 0.7, 'secondary');
        this.createGridLayer(positions, baseData, 0.5, 'tertiary');

        this.dotCount = positions.length / 2;

        // Create and populate buffers
        this.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);

        this.baseDataBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.baseDataBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(baseData), this.gl.STATIC_DRAW);

        // Set up uniforms
        this.gl.uniform2f(this.locations.resolution, this.containerWidth, this.containerHeight);
        this.gl.uniform1f(this.locations.maxDistance, this.maxDistance);
    }

    createGridLayer(positions, baseData, spacingMultiplier, layerType) {
        const spacing = this.spacing / spacingMultiplier;
        const cols = Math.ceil(this.containerWidth / spacing);
        const rows = Math.ceil(this.containerHeight / spacing);
        const centerX = this.containerWidth / 2;
        const centerY = this.containerHeight / 2;
        const maxDistToCenter = Math.sqrt(centerX * centerX + centerY * centerY);
    
        for (let i = 0; i <= cols; i++) {
            for (let j = 0; j <= rows; j++) {
                const x = (i / cols) * this.containerWidth;
                const y = (j / rows) * this.containerHeight;
    
                const dx = x - centerX;
                const dy = y - centerY;
                const distToCenter = Math.sqrt(dx * dx + dy * dy);
                let centerProximity = 1 - (distToCenter / maxDistToCenter);
                centerProximity = Math.pow(centerProximity, this.falloffStrength);
    
                // Probability based on layer and center proximity
                let showProbability;
                switch(layerType) {
                    case 'primary':
                        showProbability = 0.4 + (centerProximity * 0.6);
                        break;
                    case 'secondary':
                        showProbability = centerProximity * 0.7;
                        break;
                    case 'tertiary':
                        showProbability = Math.pow(centerProximity, 1.2) * 0.5;
                        break;
                }
    
                if (Math.random() > showProbability) continue;
    
                // Random offset for organic look
                const offsetX = (Math.random() - 0.5) * spacing * 0.4;
                const offsetY = (Math.random() - 0.5) * spacing * 0.4;
    
                positions.push(x + offsetX, y + offsetY);
    
                // Base properties based on proximity
                let baseOpacity, baseScale;
                switch(layerType) {
                    case 'primary':
                        baseOpacity = 0.2 + (centerProximity * 0.4);
                        baseScale = 0.8 + (centerProximity * 0.4);
                        break;
                    case 'secondary':
                        baseOpacity = 0.15 + (centerProximity * 0.3);
                        baseScale = 0.6 + (centerProximity * 0.3);
                        break;
                    case 'tertiary':
                        baseOpacity = 0.1 + (centerProximity * 0.2);
                        baseScale = 0.4 + (centerProximity * 0.25);
                        break;
                }
    
                baseData.push(baseOpacity, baseScale, centerProximity);
            }
        }
    }
    

    bindEvents() {
        // Only add mousemove for non-touch devices to optimize performance
        if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
            document.addEventListener('mousemove', (e) => {
                const rect = this.container.getBoundingClientRect();
                this.mouseX = e.clientX - rect.left;
                this.mouseY = e.clientY - rect.top;
            });
        }

        // Handle touch events without preventing default scrolling
        document.addEventListener('touchmove', (e) => {
            // Remove e.preventDefault() to allow scrolling on touch devices
            // e.preventDefault(); 
            const rect = this.container.getBoundingClientRect();
            const touch = e.touches[0];
            this.mouseX = touch.clientX - rect.left;
            this.mouseY = touch.clientY - rect.top;
        }, { passive: true }); // Changed to passive: true for better scroll performance

        window.addEventListener('resize', () => {
            this.updateDimensions();
            this.createGrid();
        });
    }

    animate() {
        if (!this.gl || !this.program) return;

        // Clear canvas
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        // Update uniforms
        this.gl.uniform2f(this.locations.mouse, this.mouseX, this.mouseY);
        this.gl.uniform1f(this.locations.time, Date.now() * 0.001);

        // Bind attributes
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.enableVertexAttribArray(this.locations.position);
        this.gl.vertexAttribPointer(this.locations.position, 2, this.gl.FLOAT, false, 0, 0);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.baseDataBuffer);
        this.gl.enableVertexAttribArray(this.locations.baseData);
        this.gl.vertexAttribPointer(this.locations.baseData, 3, this.gl.FLOAT, false, 0, 0);

        // Draw all dots in one call
        this.gl.drawArrays(this.gl.POINTS, 0, this.dotCount);

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    // Fallback Canvas 2D implementation
    setupCanvas2D() {
        this.ctx = this.canvas.getContext('2d');
        this.createGrid2D();
        this.animate2D();
    }

    createGrid2D() {
        this.dots = [];
        const spacing = this.spacing;
        
        for (let i = 0; i < this.containerWidth; i += spacing) {
            for (let j = 0; j < this.containerHeight; j += spacing) {
                const edgeDistX = Math.min(i, this.containerWidth - i);
                const edgeDistY = Math.min(j, this.containerHeight - j);
                const minEdgeDist = Math.min(edgeDistX, edgeDistY);
                const maxPossibleEdgeDist = Math.min(this.containerWidth, this.containerHeight) / 2;
                const edgeProximity = 1 - (minEdgeDist / maxPossibleEdgeDist);
                
                if (Math.random() < 0.3 + edgeProximity * 0.7) {
                    this.dots.push({
                        x: i + (Math.random() - 0.5) * spacing * 0.4,
                        y: j + (Math.random() - 0.5) * spacing * 0.4,
                        baseOpacity: 0.1 + edgeProximity * 0.4,
                        baseScale: 0.5 + edgeProximity * 0.5,
                        edgeWeight: edgeProximity
                    });
                }
            }
        }
    }

    animate2D() {
        if (!this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.containerWidth, this.containerHeight);
        
        this.dots.forEach(dot => {
            const dx = this.mouseX - dot.x;
            const dy = this.mouseY - dot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.maxDistance) {
                const influence = 1 - (distance / this.maxDistance);
                const scale = dot.baseScale + influence * 2;
                const opacity = Math.min(1, dot.baseOpacity + influence * 0.8);
                
                this.ctx.globalAlpha = opacity;
                this.ctx.fillStyle = `rgba(0, 255, 136, ${opacity})`;
                this.ctx.beginPath();
                this.ctx.arc(dot.x, dot.y, scale * 2, 0, Math.PI * 2);
                this.ctx.fill();
            } else {
                this.ctx.globalAlpha = dot.baseOpacity;
                this.ctx.fillStyle = `rgba(0, 255, 136, ${dot.baseOpacity})`;
                this.ctx.beginPath();
                this.ctx.arc(dot.x, dot.y, dot.baseScale * 2, 0, Math.PI * 2);
                this.ctx.fill();
            }
        });
        
        requestAnimationFrame(() => this.animate2D());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        if (this.gl) {
            this.gl.deleteProgram(this.program);
            this.gl.deleteBuffer(this.positionBuffer);
            this.gl.deleteBuffer(this.baseDataBuffer);
        }
        
        if (this.canvas) {
            this.canvas.remove();
        }
    }

    updateConfig(config) {
        Object.assign(this, config);
        this.createGrid();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const grid = new InteractiveGrid('gridContainer');
    
    // Optional: Store reference globally for debugging
    window.interactiveGrid = grid;
    
    // Example of updating configuration
     grid.updateConfig({
         spacing: 40,
         maxDistance: 1000,
         falloffStrength : 1,
        //  enableRipple: false
        //  rippleAmplitude: 10.0,
        //  rippleFrequency: 10,
        //  rippleSpeed: 150
     });
});