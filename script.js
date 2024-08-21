const goalPercentage = 40; 
const gauge = document.querySelector('.gauge');
const percentageDisplay = document.querySelector('.percentage-display');

gauge.style.background = `conic-gradient(#ffcc00 0% ${goalPercentage}%, #ddd ${goalPercentage}% 100%)`;
percentageDisplay.textContent = `${goalPercentage}%`;


