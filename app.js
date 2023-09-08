const date = new Date();

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let day = daysOfWeek[date.getDay()];

const div = document.getElementById('day');
const p = document.createElement('h3');

p.textContent = "Today's date is " + day + '';

div.appendChild(p);

// Create a new Date object
const currentDate = new Date();

// Get UTC components (hours, minutes, seconds)
const ms = currentDate.getUTCMilliseconds();

// Format the time as a string
// const currentTimeUTC = `The UTC Time is ${hours}:${minutes}:${seconds}`;

// Display the UTC time
const para = document.getElementById('utcTime');
const span = document.createElement('h3');

span.textContent = `The UTC Time in milliseconds: ${ms}`;

div.appendChild(span);
