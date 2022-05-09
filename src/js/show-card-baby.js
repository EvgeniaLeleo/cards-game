import { hideCardsBaby } from './hide-card.js';
import { generateWinScreen } from './generate-win-screen.js';

/**
 * Открываем карту по клику
 */

export function showCardBaby() {
  const imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', () => {
      imgs[i].style.transform = 'rotateY(180deg) scale(-1, 1)';
      imgs[i].style.background = `${window.app.cardsForCurrentGame[i]}`;
      imgs[i].style.border = '10px solid #ffffff';

      // добавляем пару выбранных карт в window.app.userCards
      if (!window.app.userCards[0] && !window.app.userTargets.includes(i)) {
        window.app.userCards[0] = window.app.cardsForCurrentGame[i];
        window.app.userTargets.push(i);
      }

      if (window.app.userCards[0] && !window.app.userTargets.includes(i)) {
        window.app.userCards[1] = window.app.cardsForCurrentGame[i];
        window.app.userTargets.push(i);

        //если карты не совпадают, обнуляем все результаты
        if (window.app.userCards[0] !== window.app.userCards[1]) {
          window.app.userCards = [];
          window.app.userTargets = [];
          window.app.guessedPairs = [];

          setTimeout(hideCardsBaby, window.app.commonDelay);
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

          if (window.app.guessedPairs.length === Number(window.app.level) + 1) {
            clearInterval(window.app.stopwatch);

            setTimeout(generateWinScreen, window.app.commonDelay);
          }
        }
      }
    });
  }
}
