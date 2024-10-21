// Function to update the clock
const updateClock = () => {
    const clockelement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    clockelement.innerText = formattedTime;
}

// Function to display and update the date
const updateDate = () => {
    const dateelement = document.getElementById('date');
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    dateelement.innerText = formattedDate;
}

// Function to display the timezone with US formatted date and 12-hour format
const displayTimezone = () => {
    const timezoneelement = document.getElementById('timezone');
    const now = new Date();
    const timezone = now.toLocaleString('en-US', { timeZoneName: 'short' });
    timezoneelement.innerText = timezone;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Update the date every second
setInterval(updateDate, 1000);

// Check for the timezone at the same interval as the clock
setInterval(displayTimezone, 1000);

// Initializing the timezone
displayTimezone();

// Initializing the date
updateDate();

// Initializing the clock
updateClock();