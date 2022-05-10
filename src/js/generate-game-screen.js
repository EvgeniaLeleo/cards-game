// import { requestFunction } from './request.js';
import { showData } from './show-data.js';
import cardsData from './../data/cards.json';

import { generateStartScreen } from './generate-start-screen.js';

/**
 * Генерация экрана игры
 */

export function generateGameScreen(container) {
  window.app.userTimeSekMin = [0, 0];
  window.app.guessedPairs = [];
  window.app.userCards = [];
  window.app.userTargets = [];
  window.app.attempts = 0;

  clearTimeout(window.app.delay);
  clearInterval(window.app.stopwatch);

  container.innerHTML = '';
  const header = document.createElement('div');
  header.classList.add('header');

  const timer = document.createElement('div');
  timer.classList.add('timer');

  const minText = document.createElement('p');
  minText.classList.add('timer__text');
  minText.textContent = 'min';

  const sekText = document.createElement('p');
  sekText.classList.add('timer__text', 'timer__text_sek');
  sekText.textContent = 'sek';

  const min = document.createElement('p');
  min.classList.add('timer__count', 'timer__count_min');
  min.textContent = '00';

  const dot = document.createElement('p');
  dot.classList.add('timer__count');
  dot.textContent = '.';

  const sek = document.createElement('p');
  sek.classList.add('timer__count', 'timer__count_sek');
  sek.textContent = '00';

  const attempts = document.createElement('div');
  attempts.classList.add('attempts');

  const attempt1 = document.createElement('div');
  attempt1.classList.add('attempt');
  const attempt2 = document.createElement('div');
  attempt2.classList.add('attempt');
  const attempt3 = document.createElement('div');
  attempt3.classList.add('attempt');

  const buttonRepeat = document.createElement('button');
  buttonRepeat.classList.add('button');
  buttonRepeat.textContent = 'Начать заново';

  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container');

  container.appendChild(header);
  header.appendChild(timer);
  timer.appendChild(minText);
  timer.appendChild(sekText);
  timer.appendChild(min);
  timer.appendChild(dot);
  timer.appendChild(sek);

  header.appendChild(attempts);
  attempts.appendChild(attempt1);
  attempts.appendChild(attempt2);
  attempts.appendChild(attempt3);

  header.appendChild(buttonRepeat);
  container.appendChild(cardsContainer);

  generateCards(cardsContainer); // Вывод карт на экран
  // requestFunction();
  showData(cardsData);

  buttonRepeat.addEventListener('click', () => {
    container.innerHTML = '';
    generateStartScreen(container);
  });
}

/**
 * Генерация и вывод карт на экран
 */

function generateCards(container) {
  const cardWidth = 95;
  const cardHeight = 133;
  const gap = 15;
  const numberOfCardsInRow = 6;

  container.style.width =
    numberOfCardsInRow * cardWidth + (numberOfCardsInRow - 1) * gap + 'px';
  container.style.height =
    window.app.level * cardHeight + (window.app.level - 1) * gap + 'px';

  for (let i = 0; i < numberOfCardsInRow * window.app.level; i++) {
    const card = document.createElement('div');

    card.classList.add('card');
    card.style.background = '#c2f5ff';
    container.appendChild(card);
  }
}
