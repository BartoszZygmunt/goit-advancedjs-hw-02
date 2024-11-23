import iziToast from 'izitoast';
// Optional import of styles
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  // Pobieranie wartości z formularza
  const delay = form.elements['delay'].value;
  const state = form.elements['state'].value;

  // Wyświetlanie danych w konsoli
  console.log(`Delay: ${delay} ms`);
  console.log(`State: ${state}`);

  // Przykładowe wykonanie akcji (np. wyświetlenie alertu)
  if (state === 'fulfilled') {
    setTimeout(() => {
      iziToast.success({
        title: 'Success',
        message: `Fulfilled promise in ${delay} ms`,
        timeout: 2000,
        position: 'topCenter',
      });
    }, delay);
  } else if (state === 'rejected') {
    setTimeout(() => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in  ${delay} ms`,
        timeout: 2000,
        position: 'topCenter',
      });
    }, delay);
  }
});
