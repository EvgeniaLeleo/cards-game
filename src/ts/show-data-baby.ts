import { doubleArr, shuffle } from './utils/arr-utils';
import { increaseTime } from './stopwatch';
import { hideCardsBaby } from './hide-card';
import { showCardBaby } from './show-card-baby';

/***
 *
 */

export function showDataBaby(): void {
  const data = ['#d92519', '#fff500', '#194888', '#02913f'];
  const shuffledData = shuffle(data);
  const randomCards = shuffledData.splice(0, Number(window.app.level) + 1);

  window.app.cardsForCurrentGame = shuffle(doubleArr(randomCards));

  generateCardsContentBaby();

  window.app.stopwatch = window.setInterval(increaseTime, 1000); // запуск секундомера

  window.app.delay = window.setTimeout(
    hideCardsBaby,
    window.app.cardDisplayTime
  ); // время показа карт 5s

  showCardBaby();
}

/**
 * Заполнение n карт данными из массива data = shuffle(doubleCards)
 */

function generateCardsContentBaby(): void {
  let imgs = document.querySelectorAll<HTMLDivElement>('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.background = `${window.app.cardsForCurrentGame[i]}`;
    imgs[i].style.border = '10px solid #ffffff';
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
  }
}
