import { doubleArr, shuffle } from './utils/arr-utils';
import { increaseTime } from './stopwatch';
import { hideCards } from './hide-card';
import { showCard } from './show-card';
import { cardTemplate } from './card-template';

/***
 * Вывод данных data из файла *.json в карточки
 */

type cardObj = {
  name: string;
  text: string;
  img: string;
  suit: string;
};

function isObjArray(arg: (cardObj | string)[]): arg is cardObj[] {
  return typeof arg === 'object';
}

export function showData(data: cardObj[]): void {
  const dataClone = data.slice();
  const shuffledData = shuffle(dataClone);
  const randomCards = shuffledData.splice(0, Number(window.app.level) * 3);

  window.app.cardsForCurrentGame = shuffle(doubleArr(randomCards));

  if (isObjArray(window.app.cardsForCurrentGame)) {
    generateCardsContent(window.app.cardsForCurrentGame);
  }

  window.app.stopwatch = window.setInterval(increaseTime, 1000); // запуск секундомера

  window.app.delay = window.setTimeout(
    hideCards,
    window.app.cardDisplayTime +
      window.app.cardDisplayTimeDelay * (Number(window.app.level) - 1)
  ); // время показа карт 5s, 6s, 7s

  showCard();
}

/**
 * Заполнение n карт данными из массива data = shuffle(doubleCards)
 */

function generateCardsContent(data: cardObj[]): void {
  let imgs = document.querySelectorAll<HTMLDivElement>('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].innerHTML = cardTemplate(data[i]);
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
  }
}
