/**
 * Секундомер
 */

export function increaseTime() {
  window.app.userTimeSekMin[0]++;

  const countSek = document.querySelector(
    '.timer__count_sek'
  ) as HTMLDivElement;
  const countMin = document.querySelector(
    '.timer__count_min'
  ) as HTMLDivElement;

  countSek.textContent = '0' + window.app.userTimeSekMin[0];

  if (
    10 <= window.app.userTimeSekMin[0] &&
    window.app.userTimeSekMin[0] <= 59
  ) {
    countSek.textContent = window.app.userTimeSekMin[0];
  }

  if (window.app.userTimeSekMin[0] === 60) {
    countSek.textContent = '00';
    window.app.userTimeSekMin[0] = 0;

    window.app.userTimeSekMin[1]++;
    countMin.textContent = '0' + window.app.userTimeSekMin[1];

    if (
      10 <= window.app.userTimeSekMin[1] &&
      window.app.userTimeSekMin[1] <= 59
    ) {
      countMin.textContent = window.app.userTimeSekMin[1];
    }

    if (window.app.userTimeSekMin[1] === 60) {
      countSek.textContent = '00';
      countMin.textContent = '00';
      window.app.userTimeSekMin[0] = 0;
      window.app.userTimeSekMin[1] = 0;
    }
  }
}
