import { doubleArr, shuffle } from './utils/arr-utils.js';
import { increaseTime } from './stopwatch.js';
import { hideCardsBaby } from './hide-card.js';
import { showCardBaby } from './show-card-baby.js';

/***
 *
 */

export function showDataBaby() {
  const data = ['#d92519', '#fff500', '#194888', '#02913f'];
  const shuffledData = shuffle(data);
  const randomCards = shuffledData.splice(0, Number(window.app.level) + 1);

  window.app.cardsForCurrentGame = shuffle(doubleArr(randomCards));

  generateCardsContentBaby();

  window.app.stopwatch = setInterval(increaseTime, 1000, window.app); // запуск секундомера

  window.app.delay = setTimeout(hideCardsBaby, window.app.cardDisplayTime); // время показа карт 5s

  showCardBaby();
}

/**
 * Заполнение n карт данными из массива data = shuffle(doubleCards)
 */

function generateCardsContentBaby() {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.background = `${window.app.cardsForCurrentGame[i]}`;
    imgs[i].style.border = '10px solid #ffffff';
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
  }
}
