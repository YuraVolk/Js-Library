const finishDate = new Date('May 6, 2021 11:00:00').getTime();
let current = new Date().getTime();
let distance = finishDate - current;

const element = document.querySelector('.date');

let yearDesc = 'years';
let daysDesc = 'days';
let hoursDesc = 'hours';
let minutesDesc = 'minutes';
let secondsDesc = 'seconds';

function updateTime() {
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const days = Math.floor(distance / (1000 * 60 * 60 * 24) - (Math.floor((distance / (1000 * 60 * 60 * 24)) / 356) * 356));
  const years = Math.floor((distance / (1000 * 60 * 60 * 24)) / 356);

  if (years === 1) {
    yearDesc = 'year';
  }
  if (days === 1) {
    daysDesc = 'day';
  }
  if (hours === 1) {
    hoursDesc = 'hour';
  }
  if (minutes === 1) {
    minutesDesc = 'minute';
  }
  if (seconds === 1) {
    secondsDesc = 'second';
  }

  element.textContent = (years <= 0 ? '' : years + ' ' + yearDesc) + ' ' + (days <= 0 ? '' : days + ' ' + daysDesc) + ' ' + (hours <= 0 ? '' : hours + ' ' + hoursDesc) + ' ' + (minutes <= 0 ? '' : minutes + ' ' + minutesDesc) + ' ' + (seconds <= 0 ? 'END' : seconds + ' ' + secondsDesc);
}

window.setInterval(() => {
  current = new Date().getTime();
  distance = finishDate - current;

  updateTime();
}, 1000);

updateTime();
