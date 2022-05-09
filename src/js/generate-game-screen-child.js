import { requestFunctionChild } from './request.js';
import { generateStartScreen } from './generate-start-screen.js';

/**
 * Генерация экрана детской игры
 */

export function generateGameScreenChild(container) {
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
  cardsContainer.classList.add('cards-container-child');

  container.appendChild(header);
  header.appendChild(timer);
  timer.appendChild(minText);
  timer.appendChild(sekText);
  timer.appendChild(min);
  timer.appendChild(dot);
  timer.appendChild(sek);

  header.appendChild(buttonRepeat);
  container.appendChild(cardsContainer);

  generateCardsChild(cardsContainer); // Вывод картинок на экран
  requestFunctionChild();

  buttonRepeat.addEventListener('click', () => {
    container.innerHTML = '';
    generateStartScreen(container);
  });
}

/**
 * Генерация и вывод картинок на экран
 */

function generateCardsChild(container) {
  const cardsContainer = document.querySelector('.cards-container-child');
  cardsContainer.classList.add(`cards-container-child_${window.app.level}`);

  for (let i = 0; i < 6 * window.app.level; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.background = '#c2f5ff';
    container.appendChild(card);
  }

  let cardWidth = 120;
  let numberOfCardsInRow;
  let numberOfCardsInColumn;
  const gap = 15;

  if (window.app.level === '1') {
    cardWidth = 150;
    numberOfCardsInRow = 3;
    numberOfCardsInColumn = 2;
  }

  if (window.app.level === '2') {
    numberOfCardsInRow = 4;
    numberOfCardsInColumn = 3;
  }

  if (window.app.level === '3') {
    numberOfCardsInRow = 6;
    numberOfCardsInColumn = 3;
  }

  container.style.width =
    numberOfCardsInRow * cardWidth + (numberOfCardsInRow - 1) * gap + 'px';
  container.style.height =
    numberOfCardsInColumn * cardWidth +
    (numberOfCardsInColumn - 1) * gap +
    'px';
}
