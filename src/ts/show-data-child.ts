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
  img: boolean;
  suit: string;
};

export function showDataChild(data: cardObj[]) {
  const dataClone = data.slice();
  const shuffledData = shuffle(dataClone);

  const randomCards = shuffledData.splice(0, window.app.level * 3);

  window.app.cardsForCurrentGame = shuffle(doubleArr(randomCards));

  generateCardsContentChild(window.app.cardsForCurrentGame);

  window.app.stopwatch = setInterval(increaseTime, 1000); // запуск секундомера

  window.app.delay = setTimeout(
    hideCardsChild,
    window.app.cardDisplayTime +
      2 * window.app.cardDisplayTimeDelay * (window.app.level - 1)
  ); // время показа карт 5s, 7s, 9s

  showCardChild();
}

/**
 * Заполнение n карт данными из массива data = shuffle(doubleCards)
 */

function generateCardsContentChild(data: cardObj[]) {
  let imgs = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;

  for (let i = 0; i < imgs.length; i++) {
    imgs[
      i
    ].innerHTML = `<img class="img-child" src="${data[i].img}" alt="${data[i].name}" />`;
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
  }
}
