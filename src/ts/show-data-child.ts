import { doubleArr, shuffle } from './utils/arr-utils';
import { increaseTime } from './stopwatch';
import { hideCardsChild } from './hide-card';
import { showCardChild } from './show-card-child';

/***
 * Вывод данных data из файла *.json в карточки
 */

type cardObj = {
  name: string;
  text: string;
  img: string;
  suit: string;
};

export function showDataChild(data: cardObj[]): void {
  const dataClone = data.slice();
  const shuffledData = shuffle(dataClone);

  const randomCards = shuffledData.splice(0, Number(window.app.level) * 3);

  function isObjArray(arg: (cardObj | string)[]): arg is cardObj[] {
    return typeof arg === 'object';
  }

  window.app.cardsForCurrentGame = shuffle(doubleArr(randomCards));

  if (isObjArray(window.app.cardsForCurrentGame)) {
    generateCardsContentChild(window.app.cardsForCurrentGame);
  }

  window.app.stopwatch = window.setInterval(increaseTime, 1000); // запуск секундомера

  window.app.delay = window.setTimeout(
    hideCardsChild,
    window.app.cardDisplayTime +
      2 * window.app.cardDisplayTimeDelay * (Number(window.app.level) - 1)
  ); // время показа карт 5s, 7s, 9s

  showCardChild();
}

/**
 * Заполнение n карт данными из массива data = shuffle(doubleCards)
 */

function generateCardsContentChild(data: cardObj[]): void {
  let imgs = document.querySelectorAll<HTMLDivElement>('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[
      i
    ].innerHTML = `<img class="img-child" src="${data[i].img}" alt="${data[i].name}" />`;
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
  }
}
