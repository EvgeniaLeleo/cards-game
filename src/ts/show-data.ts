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
  img: boolean;
  suit: string;
};

export function showData(data: cardObj[]) {
  const dataClone = data.slice();
  const shuffledData = shuffle(dataClone);
  const randomCards = shuffledData.splice(0, window.app.level * 3);

  window.app.cardsForCurrentGame = shuffle(doubleArr(randomCards));

  generateCardsContent(window.app.cardsForCurrentGame);

  window.app.stopwatch = setInterval(increaseTime, 1000); // запуск секундомера

  window.app.delay = setTimeout(
    hideCards,
    window.app.cardDisplayTime +
      window.app.cardDisplayTimeDelay * (window.app.level - 1)
  ); // время показа карт 5s, 6s, 7s

  showCard();
}

/**
 * Заполнение n карт данными из массива data = shuffle(doubleCards)
 */

function generateCardsContent(data: cardObj[]) {
  let imgs = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].innerHTML = cardTemplate(data[i]);
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
  }
}
