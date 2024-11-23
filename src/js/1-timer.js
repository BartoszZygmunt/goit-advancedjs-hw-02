import flatpickr from 'flatpickr';
// Optional import of styles
import 'flatpickr/dist/flatpickr.min.css';
// Described in the documentation
import iziToast from 'izitoast';
// Optional import of styles
import 'izitoast/dist/css/iziToast.min.css';
let userSelectedDate = null;
const dateTimeNow = new Date();
const button = document.getElementById('myButton');

let timerId = 0;

function startTimer() {
  timerId = setInterval(showTimeLeft, 1000);
  console.log('Timer started, ID: ', timerId);
  callendar[1].disabled = true;
  console.log(callendar);
  button.disabled = true;
  console.log('Callendar and button disabled');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const now = new Date();
    if (selectedDates[0] < now) {
      iziToast.warning({
        title: 'Oh no!',
        message: 'Please choose a date in the future',
        position: 'topRight',
        timeout: 5000,
      });
      button.disabled = true; // Ustawienie przycisku na disabled
      console.log('Callendar disabled');
      clearInterval(timerId);
      console.log('Timer stopped, ID: ', timerId);
    } else {
      userSelectedDate = selectedDates[0];
      const timeLeft = userSelectedDate - now;
      const { days, hours, minutes, seconds } = convertMs(timeLeft);
      iziToast.success({
        title: 'Great!',
        message: `Time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`,
        position: 'topRight',
        timeout: 5000,
      });
      button.disabled = false; // Ustawienie przycisku na aktywny
    }
  },
};

function showTimeLeft() {
  const timeLeft = userSelectedDate - new Date();
  if (timeLeft <= 0) {
    clearInterval(timerId);
    console.log('Timer stopped, ID: ', timerId);
    iziToast.success({
      title: 'OK!',
      message: 'Time is up!',
      position: 'topRight',
      timeout: 5000,
    });
    callendar[1].disabled = false;
    button.disabled = false;
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(timeLeft);
  const daysHtml = document.getElementById('days');
  daysHtml.textContent = days;
  const hoursHtml = document.getElementById('hours');
  hoursHtml.textContent = hours;
  const minutesHtml = document.getElementById('minutes');
  minutesHtml.textContent = minutes;
  const secondsHtml = document.getElementById('seconds');
  secondsHtml.textContent = seconds;

  //   console.log(daysHtml);
}

function addLeadingZero(value, length = 2) {
  // Konwertuje wartość na ciąg znaków i dodaje wiodące zera
  return String(value).padStart(length, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//nowa instancja flatpickr
flatpickr('#datetime-picker', options);
const callendar = document.querySelectorAll('.flatpickr-input');
if (callendar) {
  console.log('callendar found');
} else {
  console.log('Callendar not found');
}

button.addEventListener('click', () => {
  console.log('Button clicked');
  startTimer(); // Wywołanie funkcji
});
