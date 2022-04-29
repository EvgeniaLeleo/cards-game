/**
 * Секундомер
 */

function increaseTime(app) {
  app.userTimeSekMin[0]++;

  const countSek = document.querySelector('.timer__count_sek');
  const countMin = document.querySelector('.timer__count_min');

  countSek.textContent = '0' + app.userTimeSekMin[0];

  if (10 <= app.userTimeSekMin[0] && app.userTimeSekMin[0] <= 59) {
    countSek.textContent = app.userTimeSekMin[0];
  }

  if (app.userTimeSekMin[0] === 60) {
    countSek.textContent = '00';
    app.userTimeSekMin[0] = 0;

    app.userTimeSekMin[1]++;
    countMin.textContent = '0' + app.userTimeSekMin[1];

    if (10 <= app.userTimeSekMin[1] && app.userTimeSekMin[1] <= 59) {
      countMin.textContent = app.userTimeSekMin[1];
    }

    if (app.userTimeSekMin[1] === 60) {
      countSek.textContent = '00';
      countMin.textContent = '00';
      app.userTimeSekMin[0] = 0;
      app.userTimeSekMin[1] = 0;
    }
  }
}
