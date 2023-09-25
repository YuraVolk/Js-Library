//Created by Yury Volkovskiy


const finishDate = new Date('May 6, 2025 11:00:00').getTime();
let current = new Date().getTime();
let distance = finishDate - current;

const element = document.querySelector('.countdown');

/**
 * Summary. Subtract one second and display the time.
 * Description. Get the current time, subtract one
 *              second and display it in user-friendly
 *              format in HTML.
 */
function updateTime() {
  let yearDesc = 'years';
  let daysDesc = 'days';
  let hoursDesc = 'hours';
  let minutesDesc = 'minutes';
  let secondsDesc = 'seconds';

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const days = Math.floor(distance / (1000 * 60 * 60 * 24) - (Math.floor((distance / (1000 * 60 * 60 * 24)) / 356) * 356));
  const years = Math.floor((distance / (1000 * 60 * 60 * 24)) / 356);

  if (years.toString().slice(-1) === '1') {
    yearDesc = 'year';
  }
  if (days.toString().slice(-1) === '1') {
    daysDesc = 'day';
  }
  if (hours.toString().slice(-1) === '1') {
    hoursDesc = 'hour';
  }
  if (minutes.toString().slice(-1) === '1') {
    minutesDesc = 'minute';
  }

  if (seconds.toString().slice(-1) === 1) {
    secondsDesc = 'second';
  }

  element.textContent = (years <= 0 ? '' : years + ' ' + yearDesc) + ' ' + (days <= 0 ? '' : days + ' ' + daysDesc) + ' ' + (hours <= 0 ? '' : hours + ' ' + hoursDesc) + ' ' + (minutes <= 0 ? '' : minutes + ' ' + minutesDesc) + ' ' + (seconds <= 0 ? '0 seconds' : seconds + ' ' + secondsDesc);
}

window.setInterval(() => {
  current = new Date().getTime();
  distance = finishDate - current;

  updateTime();
}, 1000);

updateTime();
