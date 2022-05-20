import { hideCardsChild } from './hide-card';
import { generateWinScreen } from './generate-win-screen';

/**
 * Открываем карту по клику
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

export function showCardChild(): void {
  const imgs = document.querySelectorAll<HTMLDivElement>('.card');
  const cardsForCurrentGame = window.app.cardsForCurrentGame;

  if (isObjArray(cardsForCurrentGame)) {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('click', () => {
        imgs[
          i
        ].innerHTML = `<img class="img-child" src="${cardsForCurrentGame[i].img}" alt="${cardsForCurrentGame[i].name}" />`;
        imgs[i].style.transform = 'rotateY(180deg) scale(-1, 1)';

        // добавляем пару выбранных карт в window.app.userCards
        if (!window.app.userCards[0] && !window.app.userTargets.includes(i)) {
          window.app.userCards[0] = cardsForCurrentGame[i].name;
          window.app.userTargets.push(i);
        }

        if (window.app.userCards[0] && !window.app.userTargets.includes(i)) {
          window.app.userCards[1] = cardsForCurrentGame[i].name;
          window.app.userTargets.push(i);

          //если карты не совпадают, обнуляем все результаты
          if (window.app.userCards[0] !== window.app.userCards[1]) {
            window.app.userCards = [];
            window.app.userTargets = [];
            window.app.guessedPairs = [];

            setTimeout(hideCardsChild, window.app.commonDelay);
          }

          //если карты совпадают, добавляем в список угаданных пар
          if (
            window.app.userCards.length > 0 &&
            window.app.userCards[0] === window.app.userCards[1]
          ) {
            if (!window.app.guessedPairs.includes(window.app.userCards[0])) {
              window.app.guessedPairs.push(window.app.userCards[0]);
            }

            window.app.userCards = [];

            if (
              window.app.guessedPairs.length ===
              Number(window.app.level) * 3
            ) {
              clearInterval(window.app.stopwatch);

              setTimeout(generateWinScreen, window.app.commonDelay);
            }
          }
        }
      });
    }
  }
}
