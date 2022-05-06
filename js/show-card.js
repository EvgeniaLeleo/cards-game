import { cardTemplate } from './card-template.js';
import { hideCards } from './hide-card.js';
import { generateWinScreen } from './generate-win-screen.js';
import { generateLoseScreen } from './generate-lose-screen.js';

/**
 * Открываем карту по клику
 */

export function showCard() {
  const imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', () => {
      imgs[i].innerHTML = cardTemplate(window.app.cardsForCurrentGame[i]);
      imgs[i].style.transform = 'rotateY(180deg) scale(-1, 1)';

      // добавляем пару выбранных карт в window.app.userCards
      if (!window.app.userCards[0] && !window.app.userTargets.includes(i)) {
        window.app.userCards[0] = window.app.cardsForCurrentGame[i].name;
        window.app.userTargets.push(i);
      }

      if (window.app.userCards[0] && !window.app.userTargets.includes(i)) {
        window.app.userCards[1] = window.app.cardsForCurrentGame[i].name;
        window.app.userTargets.push(i);

        //если карты не совпадают, обнуляем все результаты
        if (window.app.userCards[0] !== window.app.userCards[1]) {
          window.app.userCards = [];
          window.app.userTargets = [];
          window.app.guessedPairs = [];

          const attempts = document.querySelectorAll('.attempt');
          attempts[window.app.attempts].style.background = '#c14a00';

          window.app.attempts++;

          if (window.app.attempts === 3) {
            setTimeout(generateLoseScreen, window.app.commonDelay);
          }

          setTimeout(hideCards, window.app.commonDelay);
        }

        //если карты совпадают, добавляем в список угаданных пар
        if (
          window.app.userCards.length > 0 &&
          window.app.userCards[0] === window.app.userCards[1]
        ) {
          if (!app.guessedPairs.includes(window.app.userCards[0])) {
            window.app.guessedPairs.push(window.app.userCards[0]);
          }

          window.app.userCards = [];

          if (window.app.guessedPairs.length === window.app.level * 3) {
            clearInterval(window.app.stopwatch);

            setTimeout(generateWinScreen, window.app.commonDelay);
          }
        }
      }
    });
  }
}
