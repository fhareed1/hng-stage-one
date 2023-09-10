const dayOfWeekElement = document.getElementById('dayOfWeek');

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const currentDate = new Date();
console.log(currentDate);

const currentDayIndex = currentDate.getDay();

dayOfWeekElement.textContent = daysOfWeek[currentDayIndex];

function updateUTCTimeShortMilliseconds() {
  const currentUTCDate = new Date();

  const currentTimeUTCInMilliseconds = currentUTCDate.getTime();

  const millisecondsRounded = Math.floor(currentTimeUTCInMilliseconds / 10);

  let utcTime = document.querySelector('#utcTimeShortMilliseconds');

  utcTime.textContent = millisecondsRounded;
}

updateUTCTimeShortMilliseconds();

setInterval(updateUTCTimeShortMilliseconds, 1000);
