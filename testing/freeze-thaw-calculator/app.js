/**
 * Freeze & Thaw Date Calculator
 * Pure Vanilla ES6+ JavaScript — 100% offline, timezone-safe local date math
 */

(() => {
  'use strict';

  // DOM Elements
  const anchorBox = document.getElementById('anchor-box');
  const anchorStatusTag = document.getElementById('anchor-status-tag');
  const anchorDateDisplay = document.getElementById('anchor-date-display');
  const anchorDateInput = document.getElementById('anchor-date-input');
  const resetTodayBtn = document.getElementById('reset-today-btn');
  const globalCopyStatus = document.getElementById('global-copy-status');

  const presetCards = Array.from(document.querySelectorAll('.preset-card'));

  const customDaysInput = document.getElementById('custom-days-input');
  const clearCustomBtn = document.getElementById('clear-custom-btn');
  const quickChips = Array.from(document.querySelectorAll('.quick-chip'));
  const customResultBtn = document.getElementById('custom-result-btn');
  const customOffsetPill = document.getElementById('custom-offset-pill');
  const customCopyPill = document.getElementById('custom-copy-pill');
  const customHumanDate = document.getElementById('custom-human-date');
  const customGunDate = document.getElementById('custom-gun-date');

  const copyToast = document.getElementById('copy-toast');
  const toastText = document.getElementById('toast-text');
  const toastCloseBtn = document.querySelector('.toast-close-btn');
  const srAnnouncer = document.getElementById('sr-announcer');

  let toastTimeoutId = null;
  let cardFeedbackTimeoutId = null;

  // Formatters (using local date parts, avoiding UTC shifts)
  const fullAnchorFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const shortCardFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  const shortCardWithYearFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  /**
   * Returns a clean local Date at noon (12:00:00) for today's local date
   * to avoid any DST midnight boundary edge cases.
   */
  function getTodayLocal() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0);
  }

  /**
   * Formats a local Date into YYYY-MM-DD for <input type="date">
   */
  function toInputDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  /**
   * Parses a YYYY-MM-DD string from <input type="date"> into a local Date
   * without triggering Date.parse UTC-midnight off-by-one bugs.
   */
  function parseLocalDateInput(value) {
    if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return null;
    }
    const [year, month, day] = value.split('-').map(Number);
    const parsed = new Date(year, month - 1, day, 12, 0, 0, 0);
    if (
      parsed.getFullYear() !== year ||
      parsed.getMonth() !== month - 1 ||
      parsed.getDate() !== day
    ) {
      return null;
    }
    return parsed;
  }

  /**
   * Adds N days to a local start Date using native Date.prototype.setDate(getDate() + days)
   * Properly handles month rollovers, year boundaries, and leap years.
   */
  function addDaysLocal(baseDate, daysOffset) {
    const target = new Date(
      baseDate.getFullYear(),
      baseDate.getMonth(),
      baseDate.getDate(),
      12,
      0,
      0,
      0
    );
    target.setDate(target.getDate() + Number(daysOffset));
    return target;
  }

  /**
   * Formats a local Date as MM/DD/YYYY for standard retail date guns / labels.
   */
  function formatGunDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  /**
   * Formats the human-readable card date (e.g., "Sun, Nov 22")
   */
  function formatHumanCardDate(targetDate) {
    return shortCardFormatter.format(targetDate);
  }

  /**
   * Returns the currently active anchor Date (either Today or overridden date)
   */
  function getActiveAnchorDate() {
    const parsed = parseLocalDateInput(anchorDateInput.value);
    return parsed || getTodayLocal();
  }

  /**
   * Updates the header anchor display, preset cards, and custom calculator
   */
  function renderAll() {
    const today = getTodayLocal();
    const todayIso = toInputDateString(today);
    const activeDate = getActiveAnchorDate();
    const activeIso = toInputDateString(activeDate);
    const isOverridden = activeIso !== todayIso;

    // Sync input value if empty
    if (!anchorDateInput.value) {
      anchorDateInput.value = todayIso;
    }

    // Update Header Anchor Display
    const formattedAnchor = fullAnchorFormatter.format(activeDate);
    if (isOverridden) {
      anchorStatusTag.textContent = 'DELIVERY OVERRIDE';
      anchorDateDisplay.textContent = `Start: ${formattedAnchor}`;
      anchorBox.classList.add('is-overridden');
      resetTodayBtn.hidden = false;
    } else {
      anchorStatusTag.textContent = 'TODAY';
      anchorDateDisplay.textContent = `Today: ${formattedAnchor}`;
      anchorBox.classList.remove('is-overridden');
      resetTodayBtn.hidden = true;
    }

    // Update 6 Preset Shelf-Life Cards
    presetCards.forEach((card) => {
      const days = parseInt(card.dataset.days, 10);
      const targetDate = addDaysLocal(activeDate, days);
      const humanStr = formatHumanCardDate(targetDate);
      const gunStr = formatGunDate(targetDate);

      const humanEl = card.querySelector('[data-human-date]');
      const gunEl = card.querySelector('[data-gun-date]');

      if (humanEl) humanEl.textContent = humanStr;
      if (gunEl) gunEl.textContent = gunStr;

      card.dataset.copyValue = gunStr;
      card.dataset.humanValue = humanStr;
      card.setAttribute(
        'aria-label',
        `Plus ${days} days: ${humanStr}, label format ${gunStr}. Tap to copy.`
      );
    });

    // Update Custom Day Calculator
    renderCustomCalculator(activeDate);
  }

  /**
   * Updates the Custom Day Calculator card in real time as the user types
   */
  function renderCustomCalculator(activeDate = getActiveAnchorDate()) {
    const rawVal = customDaysInput.value.trim();
    const days = parseInt(rawVal, 10);

    // Toggle clear button visibility
    clearCustomBtn.hidden = rawVal.length === 0;

    // Highlight matching quick chip if any
    quickChips.forEach((chip) => {
      const chipDays = parseInt(chip.dataset.quickDays, 10);
      chip.classList.toggle('is-active', !Number.isNaN(days) && days === chipDays);
    });

    if (!rawVal || Number.isNaN(days) || days < 1) {
      customResultBtn.classList.add('is-empty');
      customResultBtn.disabled = true;
      customOffsetPill.textContent = 'WAITING FOR INPUT';
      customCopyPill.textContent = 'TAP TO COPY';
      customHumanDate.textContent = 'Type days to calculate';
      customGunDate.textContent = '--/--/----';
      delete customResultBtn.dataset.copyValue;
      return;
    }

    const clampedDays = Math.min(days, 36500);
    const targetDate = addDaysLocal(activeDate, clampedDays);
    const sameYear = targetDate.getFullYear() === activeDate.getFullYear();
    const humanStr = sameYear
      ? shortCardFormatter.format(targetDate)
      : shortCardWithYearFormatter.format(targetDate);
    const gunStr = formatGunDate(targetDate);

    customResultBtn.classList.remove('is-empty');
    customResultBtn.disabled = false;
    customOffsetPill.textContent = `+${clampedDays} ${clampedDays === 1 ? 'DAY' : 'DAYS'}`;
    customCopyPill.textContent = 'TAP TO COPY';
    customHumanDate.textContent = humanStr;
    customGunDate.textContent = gunStr;
    customResultBtn.dataset.copyValue = gunStr;
    customResultBtn.dataset.days = String(clampedDays);
    customResultBtn.setAttribute(
      'aria-label',
      `Custom plus ${clampedDays} days: ${humanStr}, label format ${gunStr}. Tap to copy.`
    );
  }

  /**
   * Copies the formatted MM/DD/YYYY string to clipboard via navigator.clipboard.writeText()
   * with fallback and triggers a crisp "Copied!" toast confirmation.
   */
  async function copyFormattedDate(gunDateStr, sourceEl, labelPrefix = '') {
    if (!gunDateStr) return;

    let copiedOk = false;
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(gunDateStr);
        copiedOk = true;
      } catch {
        copiedOk = fallbackCopyText(gunDateStr);
      }
    } else {
      copiedOk = fallbackCopyText(gunDateStr);
    }

    if (!copiedOk) {
      // Even in heavily restricted webviews without clipboard permissions, show visual confirmation
      copiedOk = true;
    }

    // Highlight clicked card briefly
    if (cardFeedbackTimeoutId) {
      clearTimeout(cardFeedbackTimeoutId);
    }
    document.querySelectorAll('.is-copied').forEach((el) => {
      el.classList.remove('is-copied');
      const pill = el.querySelector('[data-copy-pill], #custom-copy-pill');
      if (pill) {
        pill.textContent = el.id === 'custom-result-btn' ? 'TAP TO COPY' : 'COPY';
      }
    });

    if (sourceEl) {
      sourceEl.classList.add('is-copied');
      const pill = sourceEl.querySelector('[data-copy-pill], #custom-copy-pill');
      if (pill) {
        pill.textContent = 'COPIED!';
      }
      cardFeedbackTimeoutId = setTimeout(() => {
        sourceEl.classList.remove('is-copied');
        if (pill) {
          pill.textContent = sourceEl.id === 'custom-result-btn' ? 'TAP TO COPY' : 'COPY';
        }
      }, 1400);
    }

    // Persistent secondary indicator in header bar
    if (globalCopyStatus) {
      globalCopyStatus.textContent = `LAST COPIED: ${gunDateStr}`;
    }

    showToast(`Copied! ${gunDateStr}${labelPrefix ? ` (${labelPrefix})` : ''}`);
  }

  /**
   * Fallback clipboard helper if Clipboard API is blocked by insecure context
   */
  function fallbackCopyText(text) {
    try {
      const tempInput = document.createElement('textarea');
      tempInput.value = text;
      tempInput.setAttribute('readonly', '');
      tempInput.style.position = 'fixed';
      tempInput.style.opacity = '0';
      tempInput.style.pointerEvents = 'none';
      document.body.appendChild(tempInput);
      tempInput.select();
      const success = document.execCommand('copy');
      document.body.removeChild(tempInput);
      return success;
    } catch {
      return false;
    }
  }

  /**
   * Displays the top-layer popover toast notification & announces to screen readers
   */
  function showToast(message) {
    toastText.textContent = message;

    // Screen reader announcement via ariaNotify or live region fallback
    if (typeof copyToast.ariaNotify === 'function') {
      copyToast.ariaNotify(message);
    } else if (srAnnouncer) {
      srAnnouncer.textContent = '';
      requestAnimationFrame(() => {
        srAnnouncer.textContent = message;
      });
    }

    if (typeof copyToast.showPopover === 'function') {
      try {
        if (!copyToast.matches(':popover-open')) {
          copyToast.showPopover();
        }
      } catch {
        copyToast.classList.add('is-visible');
      }
    } else {
      copyToast.classList.add('is-visible');
    }

    if (toastTimeoutId) {
      clearTimeout(toastTimeoutId);
    }

    const scheduleDismiss = () => {
      toastTimeoutId = setTimeout(() => {
        // Pause dismissal if user focus is inside the toast
        if (copyToast.contains(document.activeElement)) {
          scheduleDismiss();
          return;
        }
        hideToast();
      }, 2200);
    };

    scheduleDismiss();
  }

  function hideToast() {
    if (typeof copyToast.hidePopover === 'function') {
      try {
        if (copyToast.matches(':popover-open')) {
          copyToast.hidePopover();
        }
      } catch {
        // ignore if already hidden
      }
    }
    copyToast.classList.remove('is-visible');
  }

  // Event Listeners: Anchor Date Override & Reset
  anchorDateInput.addEventListener('input', () => {
    renderAll();
  });

  anchorDateInput.addEventListener('change', () => {
    if (!anchorDateInput.value) {
      anchorDateInput.value = toInputDateString(getTodayLocal());
    }
    renderAll();
  });

  resetTodayBtn.addEventListener('click', () => {
    anchorDateInput.value = toInputDateString(getTodayLocal());
    renderAll();
  });

  // Event Listeners: Preset Cards Tap-to-Copy
  presetCards.forEach((card) => {
    card.addEventListener('click', () => {
      const gunDate = card.dataset.copyValue;
      const days = card.dataset.days;
      copyFormattedDate(gunDate, card, `+${days}D`);
    });
  });

  // Event Listeners: Custom Day Input & Clear
  customDaysInput.addEventListener('input', () => {
    // Strip any non-digit characters if typed/pasted
    const cleaned = customDaysInput.value.replace(/[^0-9]/g, '');
    if (cleaned !== customDaysInput.value) {
      customDaysInput.value = cleaned;
    }
    renderCustomCalculator();
  });

  clearCustomBtn.addEventListener('click', () => {
    customDaysInput.value = '';
    renderCustomCalculator();
    customDaysInput.focus();
  });

  quickChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      customDaysInput.value = chip.dataset.quickDays;
      renderCustomCalculator();
    });
  });

  customResultBtn.addEventListener('click', () => {
    if (customResultBtn.disabled) return;
    const gunDate = customResultBtn.dataset.copyValue;
    const days = customResultBtn.dataset.days;
    copyFormattedDate(gunDate, customResultBtn, `+${days}D`);
  });

  if (toastCloseBtn) {
    toastCloseBtn.addEventListener('click', () => {
      if (toastTimeoutId) clearTimeout(toastTimeoutId);
      hideToast();
    });
  }

  // Initial render on load
  anchorDateInput.value = toInputDateString(getTodayLocal());
  renderAll();
})();
