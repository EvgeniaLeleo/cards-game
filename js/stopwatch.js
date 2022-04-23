/**
 * Секундомер
 */

function increaseTime(app) {
  app.time[0]++;

  const countSek = document.querySelector('.timer__count_sek');
  const countMin = document.querySelector('.timer__count_min');

  countSek.textContent = '0' + app.time[0];

  if (10 <= app.time[0] && app.time[0] <= 59) {
    countSek.textContent = app.time[0];
  }

  if (app.time[0] === 60) {
    countSek.textContent = '00';
    app.time[0] = 0;

    app.time[1]++;
    countMin.textContent = '0' + app.time[1];

    if (10 <= app.time[1] && app.time[1] <= 59) {
      countMin.textContent = app.time[1];
    }

    if (app.time[1] === 60) {
      countSek.textContent = '00';
      countMin.textContent = '00';
      app.time[0] = 0;
      app.time[1] = 0;
    }
  }
}
