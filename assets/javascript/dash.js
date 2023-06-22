

/*=============== DATE FUNCTION ===============*/

function updateTime() {
    const date = new Date();
  
    // Get the time in HH:MM format
    // const timeElement = document.getElementById('time');
    // const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    // timeElement.textContent = time;
  
    // Get the day of the week
    const dayElement = document.getElementById('day');
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    dayElement.textContent = day;
  
    // Get the day of the month
    const numberElement = document.getElementById('date');
    const number = date.getDate();
    numberElement.textContent = number;
  
    // Get the month
    const monthElement = document.getElementById('month');
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    monthElement.textContent = month;
  }
  
  // Call the function to initially set the values
  updateTime();
  
  // Update the time every second
  setInterval(updateTime, 1000);


/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
    distance: '80px',
    duration: 2800,
    // reset: true,
  })

  sr.reveal(`.data-container`,{
    origin: 'bottom',
  })

  sr.reveal(`.data__title`,{
    origin: 'top',
  })