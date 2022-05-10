/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/card-template.js":
/*!*********************************!*\
  !*** ./src/js/card-template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardTemplate": () => (/* binding */ cardTemplate)
/* harmony export */ });
function cardTemplate(data) {
  return `<div class="card__content">
  <div class="card__info card__info_top">
    <div class="card__text">${data.text}</div>
    <img
      class="card__suit"
      src="${data.suit}"
      alt="${data.name}"
    />
  </div>
  <div class="card__center">
    <img src="${data.suit}"
    alt="${data.name}" />
  </div>
  <div class="card__info card__info_bottom">
    <div class="card__text">${data.text}</div>
    <img
      class="card__suit"
      src="${data.suit}"
      alt="${data.name} "
    />
  </div>
  </div>
  </div>`;
}


/***/ }),

/***/ "./src/js/generate-game-screen-baby.js":
/*!*********************************************!*\
  !*** ./src/js/generate-game-screen-baby.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateGameScreenBaby": () => (/* binding */ generateGameScreenBaby)
/* harmony export */ });
/* harmony import */ var _show_data_baby_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-data-baby.js */ "./src/js/show-data-baby.js");
/* harmony import */ var _generate_start_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-start-screen.js */ "./src/js/generate-start-screen.js");



/**
 * Генерация экрана игры для малышей
 */

function generateGameScreenBaby(container) {
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
  cardsContainer.classList.add('cards-container-baby');

  container.appendChild(header);
  header.appendChild(timer);
  timer.appendChild(minText);
  timer.appendChild(sekText);
  timer.appendChild(min);
  timer.appendChild(dot);
  timer.appendChild(sek);

  header.appendChild(buttonRepeat);
  container.appendChild(cardsContainer);

  generateCardsBaby(cardsContainer); // Вывод картинок на экран

  (0,_show_data_baby_js__WEBPACK_IMPORTED_MODULE_0__.showDataBaby)();

  buttonRepeat.addEventListener('click', () => {
    container.innerHTML = '';
    (0,_generate_start_screen_js__WEBPACK_IMPORTED_MODULE_1__.generateStartScreen)(container);
  });
}

/**
 * Генерация и вывод картинок на экран
 */

function generateCardsBaby(container) {
  const cardsContainer = document.querySelector('.cards-container-baby');
  cardsContainer.classList.add(`cards-container-baby_${window.app.level}`);

  const numberOfCardsInRow = Number(window.app.level) + 1;
  const numberOfCardsInColumn = 2;
  const numberOfCards = numberOfCardsInRow * numberOfCardsInColumn;

  const cardWidth = 150;
  const gap = 15;

  if (window.app.level === '1') {
    const timer = document.querySelector('.timer');
    timer.style.marginRight = '70px';
  }

  for (let i = 0; i < numberOfCards; i++) {
    const card = document.createElement('div');
    card.classList.add('card', 'card_baby');
    card.style.background = '#dddddd';
    container.appendChild(card);
  }

  container.style.width =
    numberOfCardsInRow * cardWidth + (numberOfCardsInRow - 1) * gap + 'px';
  container.style.height =
    numberOfCardsInColumn * cardWidth +
    (numberOfCardsInColumn - 1) * gap +
    'px';
}


/***/ }),

/***/ "./src/js/generate-game-screen-child.js":
/*!**********************************************!*\
  !*** ./src/js/generate-game-screen-child.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateGameScreenChild": () => (/* binding */ generateGameScreenChild)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request.js */ "./src/js/request.js");
/* harmony import */ var _generate_start_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-start-screen.js */ "./src/js/generate-start-screen.js");

// import { showDataChild } from './show-data-child.js';
// import cardsDataChild from './../data/cards-child.json';



/**
 * Генерация экрана детской игры
 */

function generateGameScreenChild(container) {
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
  (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.requestFunctionChild)();
  // showDataChild(cardsDataChild);

  buttonRepeat.addEventListener('click', () => {
    container.innerHTML = '';
    (0,_generate_start_screen_js__WEBPACK_IMPORTED_MODULE_1__.generateStartScreen)(container);
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


/***/ }),

/***/ "./src/js/generate-game-screen.js":
/*!****************************************!*\
  !*** ./src/js/generate-game-screen.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateGameScreen": () => (/* binding */ generateGameScreen)
/* harmony export */ });
/* harmony import */ var _show_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-data.js */ "./src/js/show-data.js");
/* harmony import */ var _data_cards_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data/cards.json */ "./src/data/cards.json");
/* harmony import */ var _generate_start_screen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-start-screen.js */ "./src/js/generate-start-screen.js");
// import { requestFunction } from './request.js';





/**
 * Генерация экрана игры
 */

function generateGameScreen(container) {
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
  (0,_show_data_js__WEBPACK_IMPORTED_MODULE_0__.showData)(_data_cards_json__WEBPACK_IMPORTED_MODULE_1__);

  buttonRepeat.addEventListener('click', () => {
    container.innerHTML = '';
    (0,_generate_start_screen_js__WEBPACK_IMPORTED_MODULE_2__.generateStartScreen)(container);
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


/***/ }),

/***/ "./src/js/generate-hello-screen.js":
/*!*****************************************!*\
  !*** ./src/js/generate-hello-screen.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateHelloScreen": () => (/* binding */ generateHelloScreen)
/* harmony export */ });
/* harmony import */ var _generate_start_screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-start-screen.js */ "./src/js/generate-start-screen.js");


/**
 * Генерация приветственного экрана
 */

function generateHelloScreen(container) {
  window.app.userTimeSekMin = [0, 0];
  window.app.guessedPairs = [];
  window.app.userCards = [];
  window.app.userTargets = [];
  window.app.attempts = 0;

  clearTimeout(window.app.delay);
  clearInterval(window.app.stopwatch);

  container.innerHTML = '';

  const formHello = document.createElement('form');
  formHello.classList.add('form', 'form__hello');

  const h2Title = document.createElement('h2');
  h2Title.classList.add('h2-title');
  h2Title.textContent = 'Ваш возраст?';

  const age = document.createElement('div');
  age.classList.add('age');

  container.appendChild(formHello);
  formHello.appendChild(h2Title);
  formHello.appendChild(age);

  for (let i = 0; i < 3; i++) {
    const userAge = document.createElement('input');
    userAge.classList.add('user__age', 'radio');
    userAge.type = 'radio';
    userAge.id = `userAge${i}`;
    userAge.name = 'userAge';
    userAge.value = `${i}`;

    const label = document.createElement('label');
    label.classList.add('user__age_label', 'label');
    label.setAttribute('for', `userAge${i}`);

    age.appendChild(userAge);
    age.appendChild(label);
  }

  const labels = document.querySelectorAll('.user__age_label');
  labels[0].innerHTML = '0+';
  labels[1].textContent = '3+';
  labels[2].textContent = '7+';

  const buttonStart = document.createElement('button');
  buttonStart.classList.add('age__button', 'button');
  buttonStart.textContent = 'Играть';

  formHello.appendChild(buttonStart);

  const userAges = document.querySelectorAll('.user__age');
  const difficultyLevelLabels = document.querySelectorAll('.user__age_label');

  /**
   * Смена цвета выбранного уровня сложности
   */

  userAges.forEach((userAge) => {
    userAge.addEventListener('click', () => {
      buttonStart.textContent = 'Играть';
      buttonStart.style.background = '#7ac100';

      difficultyLevelLabels.forEach((label) => {
        label.style.background = '#ffffff';
        label.style.color = '#0080c1';
      });

      difficultyLevelLabels[Number(userAge.value)].style.background = '#0080c1';
      difficultyLevelLabels[Number(userAge.value)].style.color = '#ffffff';
    });
  });

  formHello.addEventListener('submit', (event) => {
    event.preventDefault();

    for (let i = 0; i < userAges.length; i++) {
      if (userAges[i].checked) {
        window.app.age = userAges[i].value;

        (0,_generate_start_screen_js__WEBPACK_IMPORTED_MODULE_0__.generateStartScreen)(container);

        break;
      } else {
        buttonStart.textContent = 'Вы не выбрали возраст!';
        buttonStart.style.background = '#c14a00';
      }
    }
  });
}


/***/ }),

/***/ "./src/js/generate-lose-screen.js":
/*!****************************************!*\
  !*** ./src/js/generate-lose-screen.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateLoseScreen": () => (/* binding */ generateLoseScreen)
/* harmony export */ });
/* harmony import */ var _generate_start_screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-start-screen.js */ "./src/js/generate-start-screen.js");


function generateLoseScreen() {
  const shadow = document.createElement('div');
  shadow.classList.add('shadow');

  const formLose = document.createElement('form');
  formLose.classList.add('form', 'form__lose');

  const imgLose = document.createElement('img');
  imgLose.classList.add('img-lose');
  imgLose.src = 'img/lose.png';

  const h2Title = document.createElement('h2');
  h2Title.classList.add('h2-title');
  h2Title.textContent = 'Вы проиграли!';

  const text = document.createElement('p');
  text.classList.add('final-text');
  text.textContent = 'Затраченное время:';

  const min = document.querySelector('.timer__count_min');
  const sek = document.querySelector('.timer__count_sek');

  const time = document.createElement('p');
  time.classList.add('final-time');
  time.textContent = min.textContent + '.' + sek.textContent;

  const buttonRepeat = document.createElement('button');
  buttonRepeat.classList.add('button');
  buttonRepeat.textContent = 'Играть снова';

  const screenContainer = document.querySelector('.screen-container');
  screenContainer.appendChild(shadow);
  screenContainer.appendChild(formLose);
  formLose.appendChild(imgLose);
  formLose.appendChild(h2Title);
  formLose.appendChild(text);
  formLose.appendChild(time);
  formLose.appendChild(buttonRepeat);

  formLose.addEventListener('submit', (event) => {
    event.preventDefault();

    screenContainer.innerHTML = '';
    (0,_generate_start_screen_js__WEBPACK_IMPORTED_MODULE_0__.generateStartScreen)(screenContainer);
  });
}


/***/ }),

/***/ "./src/js/generate-start-screen.js":
/*!*****************************************!*\
  !*** ./src/js/generate-start-screen.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateStartScreen": () => (/* binding */ generateStartScreen)
/* harmony export */ });
/* harmony import */ var _generate_game_screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-game-screen.js */ "./src/js/generate-game-screen.js");
/* harmony import */ var _generate_game_screen_child_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-game-screen-child.js */ "./src/js/generate-game-screen-child.js");
/* harmony import */ var _generate_game_screen_baby_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-game-screen-baby.js */ "./src/js/generate-game-screen-baby.js");
/* harmony import */ var _generate_hello_screen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-hello-screen.js */ "./src/js/generate-hello-screen.js");





/**
 * Генерация начального экрана
 */

function generateStartScreen(container) {
  window.app.userTimeSekMin = [0, 0];
  window.app.guessedPairs = [];
  window.app.userCards = [];
  window.app.userTargets = [];
  window.app.attempts = 0;

  clearTimeout(window.app.delay);
  clearInterval(window.app.stopwatch);

  container.innerHTML = '';

  const formStart = document.createElement('form');
  formStart.classList.add('form', 'form__start');

  const h2Title = document.createElement('h2');
  h2Title.classList.add('h2-title');
  h2Title.textContent = 'Выберите сложность';

  const difficulty = document.createElement('div');
  difficulty.classList.add('difficulty');

  container.appendChild(formStart);
  formStart.appendChild(h2Title);
  formStart.appendChild(difficulty);

  for (let i = 0; i < 3; i++) {
    const difficultyLevel = document.createElement('input');
    difficultyLevel.classList.add('difficulty__level', 'radio');
    difficultyLevel.type = 'radio';
    difficultyLevel.id = `level${i + 1}`;
    difficultyLevel.name = 'difficulty';
    difficultyLevel.value = `${i + 1}`;

    const label = document.createElement('label');
    label.classList.add('difficulty__level_label', 'label');
    label.setAttribute('for', `level${i + 1}`);
    label.textContent = `${i + 1}`;

    difficulty.appendChild(difficultyLevel);
    difficulty.appendChild(label);
  }

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');
  formStart.appendChild(buttonsContainer);

  const buttonStart = document.createElement('button');
  buttonStart.classList.add('difficulty__button', 'button');
  buttonStart.type = 'submit';
  buttonStart.textContent = 'Старт';

  buttonsContainer.appendChild(buttonStart);

  const buttonChangeAge = document.createElement('button');
  buttonChangeAge.classList.add(
    'difficulty__button',
    'difficulty__button_change-age',
    'button'
  );
  buttonChangeAge.type = 'button';
  buttonChangeAge.textContent = 'На главную';

  buttonsContainer.appendChild(buttonChangeAge);

  const difficultyLevels = document.querySelectorAll('.difficulty__level');
  const difficultyLevelLabels = document.querySelectorAll(
    '.difficulty__level_label'
  );

  /**
   * Смена цвета выбранного уровня сложности
   */

  difficultyLevels.forEach((difficultyLevel) => {
    difficultyLevel.addEventListener('click', () => {
      buttonStart.textContent = 'Старт';
      buttonStart.style.background = '#7ac100';

      difficultyLevelLabels.forEach((label) => {
        label.style.background = '#ffffff';
        label.style.color = '#0080c1';
      });

      difficultyLevelLabels[
        Number(difficultyLevel.value) - 1
      ].style.background = '#0080c1';
      difficultyLevelLabels[Number(difficultyLevel.value) - 1].style.color =
        '#ffffff';
    });
  });

  formStart.addEventListener('submit', (event) => {
    event.preventDefault();

    for (let i = 0; i < difficultyLevels.length; i++) {
      if (difficultyLevels[i].checked) {
        window.app.level = difficultyLevels[i].value;

        if (Number(window.app.age) === 0) {
          (0,_generate_game_screen_baby_js__WEBPACK_IMPORTED_MODULE_2__.generateGameScreenBaby)(container);
        }

        if (Number(window.app.age) === 1) {
          (0,_generate_game_screen_child_js__WEBPACK_IMPORTED_MODULE_1__.generateGameScreenChild)(container);
        }

        if (Number(window.app.age) === 2) {
          (0,_generate_game_screen_js__WEBPACK_IMPORTED_MODULE_0__.generateGameScreen)(container);
        }

        break;
      } else {
        buttonStart.textContent = 'Выберите уровень!';
        buttonStart.style.background = '#c14a00';
      }
    }
  });

  buttonChangeAge.addEventListener('click', () => {
    (0,_generate_hello_screen_js__WEBPACK_IMPORTED_MODULE_3__.generateHelloScreen)(container);
  });
}


/***/ }),

/***/ "./src/js/generate-win-screen.js":
/*!***************************************!*\
  !*** ./src/js/generate-win-screen.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateWinScreen": () => (/* binding */ generateWinScreen)
/* harmony export */ });
/* harmony import */ var _generate_start_screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-start-screen.js */ "./src/js/generate-start-screen.js");


function generateWinScreen() {
  const shadow = document.createElement('div');
  shadow.classList.add('shadow');

  const formWin = document.createElement('form');
  formWin.classList.add('form', 'form__win');

  const imgWin = document.createElement('img');
  imgWin.classList.add('img-win');
  imgWin.src = 'img/win.png';

  const h2Title = document.createElement('h2');
  h2Title.classList.add('h2-title');
  h2Title.textContent = 'Вы выиграли!';

  const text = document.createElement('p');
  text.classList.add('final-text');
  text.textContent = 'Затраченное время:';

  const min = document.querySelector('.timer__count_min');
  const sek = document.querySelector('.timer__count_sek');

  const time = document.createElement('p');
  time.classList.add('final-time');
  time.textContent = min.textContent + '.' + sek.textContent;

  const buttonRepeat = document.createElement('button');
  buttonRepeat.classList.add('button');
  buttonRepeat.textContent = 'Играть снова';

  const screenContainer = document.querySelector('.screen-container');
  screenContainer.appendChild(shadow);
  screenContainer.appendChild(formWin);
  formWin.appendChild(imgWin);
  formWin.appendChild(h2Title);
  formWin.appendChild(text);
  formWin.appendChild(time);
  formWin.appendChild(buttonRepeat);

  formWin.addEventListener('submit', (event) => {
    event.preventDefault();

    screenContainer.innerHTML = '';
    (0,_generate_start_screen_js__WEBPACK_IMPORTED_MODULE_0__.generateStartScreen)(screenContainer);
  });
}


/***/ }),

/***/ "./src/js/hide-card.js":
/*!*****************************!*\
  !*** ./src/js/hide-card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideCards": () => (/* binding */ hideCards),
/* harmony export */   "hideCardsBaby": () => (/* binding */ hideCardsBaby),
/* harmony export */   "hideCardsChild": () => (/* binding */ hideCardsChild)
/* harmony export */ });
/**
 * Переворачиваем карты рубашкой вверх
 */

function hideCards() {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].innerHTML = '<img src="img/back.png" alt="Card back" />';
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
    imgs[i].setAttribute('style', 'pointer-events: auto;');
    imgs[i].style.cursor = 'pointer';
  }
}

function hideCardsChild() {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].innerHTML =
      '<img class="img-child" src="img/back.png" alt="Card back" />';
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
    imgs[i].setAttribute('style', 'pointer-events: auto;');
    imgs[i].style.cursor = 'pointer';
  }
}

function hideCardsBaby() {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
    imgs[i].setAttribute('style', 'pointer-events: auto;');
    imgs[i].style.cursor = 'pointer';
    imgs[i].style.background = '#c8e7ff';
  }
}


/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestFunction": () => (/* binding */ requestFunction),
/* harmony export */   "requestFunctionChild": () => (/* binding */ requestFunctionChild)
/* harmony export */ });
/* harmony import */ var _show_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-data.js */ "./src/js/show-data.js");
/* harmony import */ var _show_data_child_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-data-child.js */ "./src/js/show-data-child.js");


// import cardsData from './../data/cards.json';
// import cardsDataChild from './../data/cards-child.json';

/***
 * Запрос данных из файла *.json и вывод их на текущую страницу в карты
 */

// export function requestFunction() {
//   showData(cardsData);
// }

// export function requestFunctionChild() {
//   showDataChild(cardsDataChild);
// }

function requestFunction() {
  const request = new XMLHttpRequest();

  request.open('GET', 'data/cards.json');

  request.send();

  request.onload = function () {
    if (request.status !== 200) {
      console.error('Не удалось получить данные!');
    } else {
      const data = JSON.parse(request.response);

      (0,_show_data_js__WEBPACK_IMPORTED_MODULE_0__.showData)(data);
    }
  };
}

function requestFunctionChild() {
  const request = new XMLHttpRequest();

  request.open('GET', 'data/cards-child.json');

  request.send();

  request.onload = function () {
    if (request.status !== 200) {
      console.error('Не удалось получить данные!');
    } else {
      const data = JSON.parse(request.response);

      (0,_show_data_child_js__WEBPACK_IMPORTED_MODULE_1__.showDataChild)(data);
    }
  };
}


/***/ }),

/***/ "./src/js/show-card-baby.js":
/*!**********************************!*\
  !*** ./src/js/show-card-baby.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showCardBaby": () => (/* binding */ showCardBaby)
/* harmony export */ });
/* harmony import */ var _hide_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hide-card.js */ "./src/js/hide-card.js");
/* harmony import */ var _generate_win_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-win-screen.js */ "./src/js/generate-win-screen.js");



/**
 * Открываем карту по клику
 */

function showCardBaby() {
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

          setTimeout(_hide_card_js__WEBPACK_IMPORTED_MODULE_0__.hideCardsBaby, window.app.commonDelay);
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

            setTimeout(_generate_win_screen_js__WEBPACK_IMPORTED_MODULE_1__.generateWinScreen, window.app.commonDelay);
          }
        }
      }
    });
  }
}


/***/ }),

/***/ "./src/js/show-card-child.js":
/*!***********************************!*\
  !*** ./src/js/show-card-child.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showCardChild": () => (/* binding */ showCardChild)
/* harmony export */ });
/* harmony import */ var _hide_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hide-card.js */ "./src/js/hide-card.js");
/* harmony import */ var _generate_win_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-win-screen.js */ "./src/js/generate-win-screen.js");



/**
 * Открываем карту по клику
 */

function showCardChild() {
  const imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', () => {
      imgs[
        i
      ].innerHTML = `<img class="img-child" src="${window.app.cardsForCurrentGame[i].img}" alt="${window.app.cardsForCurrentGame[i].name}" />`;
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

          setTimeout(_hide_card_js__WEBPACK_IMPORTED_MODULE_0__.hideCardsChild, window.app.commonDelay);
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

          if (window.app.guessedPairs.length === window.app.level * 3) {
            clearInterval(window.app.stopwatch);

            setTimeout(_generate_win_screen_js__WEBPACK_IMPORTED_MODULE_1__.generateWinScreen, window.app.commonDelay);
          }
        }
      }
    });
  }
}


/***/ }),

/***/ "./src/js/show-card.js":
/*!*****************************!*\
  !*** ./src/js/show-card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showCard": () => (/* binding */ showCard)
/* harmony export */ });
/* harmony import */ var _card_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-template.js */ "./src/js/card-template.js");
/* harmony import */ var _hide_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hide-card.js */ "./src/js/hide-card.js");
/* harmony import */ var _generate_win_screen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-win-screen.js */ "./src/js/generate-win-screen.js");
/* harmony import */ var _generate_lose_screen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-lose-screen.js */ "./src/js/generate-lose-screen.js");





/**
 * Открываем карту по клику
 */

function showCard() {
  const imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', () => {
      imgs[i].innerHTML = (0,_card_template_js__WEBPACK_IMPORTED_MODULE_0__.cardTemplate)(window.app.cardsForCurrentGame[i]);
      imgs[i].style.transform = 'rotateY(180deg) scale(-1, 1)';

      // добавляем пару выбранных карт в window.app.userCards
      if (!window.app.userCards[0] && !window.app.userTargets.includes(i)) {
        window.app.userCards[0] = window.app.cardsForCurrentGame[i].name;
        window.app.userTargets.push(i);
      }

      if (window.app.userCards[0] && !window.app.userTargets.includes(i)) {
        window.app.userCards[1] = window.app.cardsForCurrentGame[i].name;
        window.app.userTargets.push(i);

        resetResults(); //если карты не совпадают, обнуляем все результаты
        addGuessedPairs(); //если карты совпадают, добавляем в список угаданных пар
      }
    });
  }
}

function resetResults() {
  if (window.app.userCards[0] !== window.app.userCards[1]) {
    window.app.userCards = [];
    window.app.userTargets = [];
    window.app.guessedPairs = [];

    const attempts = document.querySelectorAll('.attempt');
    attempts[window.app.attempts].style.background = '#c14a00';

    window.app.attempts++;

    if (window.app.attempts === 3) {
      setTimeout(_generate_lose_screen_js__WEBPACK_IMPORTED_MODULE_3__.generateLoseScreen, window.app.commonDelay);
    }

    setTimeout(_hide_card_js__WEBPACK_IMPORTED_MODULE_1__.hideCards, window.app.commonDelay);
  }
}

function addGuessedPairs() {
  if (
    window.app.userCards.length > 0 &&
    window.app.userCards[0] === window.app.userCards[1]
  ) {
    if (!window.app.guessedPairs.includes(window.app.userCards[0])) {
      window.app.guessedPairs.push(window.app.userCards[0]);
    }

    window.app.userCards = [];

    if (window.app.guessedPairs.length === window.app.level * 3) {
      clearInterval(window.app.stopwatch);

      setTimeout(_generate_win_screen_js__WEBPACK_IMPORTED_MODULE_2__.generateWinScreen, window.app.commonDelay);
    }
  }
}


/***/ }),

/***/ "./src/js/show-data-baby.js":
/*!**********************************!*\
  !*** ./src/js/show-data-baby.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showDataBaby": () => (/* binding */ showDataBaby)
/* harmony export */ });
/* harmony import */ var _utils_arr_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/arr-utils.js */ "./src/js/utils/arr-utils.js");
/* harmony import */ var _stopwatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stopwatch.js */ "./src/js/stopwatch.js");
/* harmony import */ var _hide_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide-card.js */ "./src/js/hide-card.js");
/* harmony import */ var _show_card_baby_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-card-baby.js */ "./src/js/show-card-baby.js");





/***
 *
 */

function showDataBaby() {
  const data = ['#d92519', '#fff500', '#194888', '#02913f'];
  const shuffledData = (0,_utils_arr_utils_js__WEBPACK_IMPORTED_MODULE_0__.shuffle)(data);
  const randomCards = shuffledData.splice(0, Number(window.app.level) + 1);

  window.app.cardsForCurrentGame = (0,_utils_arr_utils_js__WEBPACK_IMPORTED_MODULE_0__.shuffle)((0,_utils_arr_utils_js__WEBPACK_IMPORTED_MODULE_0__.doubleArr)(randomCards));

  generateCardsContentBaby();

  window.app.stopwatch = setInterval(_stopwatch_js__WEBPACK_IMPORTED_MODULE_1__.increaseTime, 1000, window.app); // запуск секундомера

  window.app.delay = setTimeout(_hide_card_js__WEBPACK_IMPORTED_MODULE_2__.hideCardsBaby, window.app.cardDisplayTime); // время показа карт 5s

  (0,_show_card_baby_js__WEBPACK_IMPORTED_MODULE_3__.showCardBaby)();
}

/**
 * Заполнение n карт данными из массива data = shuffle(doubleCards)
 */

function generateCardsContentBaby() {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.background = `${window.app.cardsForCurrentGame[i]}`;
    imgs[i].style.border = '10px solid #ffffff';
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
  }
}


/***/ }),

/***/ "./src/js/show-data-child.js":
/*!***********************************!*\
  !*** ./src/js/show-data-child.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showDataChild": () => (/* binding */ showDataChild)
/* harmony export */ });
/* harmony import */ var _utils_arr_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/arr-utils.js */ "./src/js/utils/arr-utils.js");
/* harmony import */ var _stopwatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stopwatch.js */ "./src/js/stopwatch.js");
/* harmony import */ var _hide_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide-card.js */ "./src/js/hide-card.js");
/* harmony import */ var _show_card_child_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-card-child.js */ "./src/js/show-card-child.js");





/***
 * Вывод данных data из файла *.json в карточки
 */

function showDataChild(data) {
  const shuffledData = (0,_utils_arr_utils_js__WEBPACK_IMPORTED_MODULE_0__.shuffle)(data);
  const randomCards = shuffledData.splice(0, window.app.level * 3);

  window.app.cardsForCurrentGame = (0,_utils_arr_utils_js__WEBPACK_IMPORTED_MODULE_0__.shuffle)((0,_utils_arr_utils_js__WEBPACK_IMPORTED_MODULE_0__.doubleArr)(randomCards));

  generateCardsContentChild(window.app.cardsForCurrentGame);

  window.app.stopwatch = setInterval(_stopwatch_js__WEBPACK_IMPORTED_MODULE_1__.increaseTime, 1000, window.app); // запуск секундомера

  window.app.delay = setTimeout(
    _hide_card_js__WEBPACK_IMPORTED_MODULE_2__.hideCardsChild,
    window.app.cardDisplayTime +
      2 * window.app.cardDisplayTimeDelay * (window.app.level - 1)
  ); // время показа карт 5s, 7s, 9s

  (0,_show_card_child_js__WEBPACK_IMPORTED_MODULE_3__.showCardChild)();
}

/**
 * Заполнение n карт данными из массива data = shuffle(doubleCards)
 */

function generateCardsContentChild(data) {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[
      i
    ].innerHTML = `<img class="img-child" src="./../${data[i].img}" alt="${data[i].name}" />`;
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
  }
}


/***/ }),

/***/ "./src/js/show-data.js":
/*!*****************************!*\
  !*** ./src/js/show-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showData": () => (/* binding */ showData)
/* harmony export */ });
/* harmony import */ var _utils_arr_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/arr-utils.js */ "./src/js/utils/arr-utils.js");
/* harmony import */ var _stopwatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stopwatch.js */ "./src/js/stopwatch.js");
/* harmony import */ var _hide_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide-card.js */ "./src/js/hide-card.js");
/* harmony import */ var _show_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-card.js */ "./src/js/show-card.js");
/* harmony import */ var _card_template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-template.js */ "./src/js/card-template.js");






/***
 * Вывод данных data из файла *.json в карточки
 */

function showData(data) {
  const shuffledData = (0,_utils_arr_utils_js__WEBPACK_IMPORTED_MODULE_0__.shuffle)(data);
  const randomCards = shuffledData.splice(0, window.app.level * 3);

  window.app.cardsForCurrentGame = (0,_utils_arr_utils_js__WEBPACK_IMPORTED_MODULE_0__.shuffle)((0,_utils_arr_utils_js__WEBPACK_IMPORTED_MODULE_0__.doubleArr)(randomCards));

  generateCardsContent(window.app.cardsForCurrentGame);

  window.app.stopwatch = setInterval(_stopwatch_js__WEBPACK_IMPORTED_MODULE_1__.increaseTime, 1000, window.app); // запуск секундомера

  window.app.delay = setTimeout(
    _hide_card_js__WEBPACK_IMPORTED_MODULE_2__.hideCards,
    window.app.cardDisplayTime +
      window.app.cardDisplayTimeDelay * (window.app.level - 1)
  ); // время показа карт 5s, 6s, 7s

  (0,_show_card_js__WEBPACK_IMPORTED_MODULE_3__.showCard)();
}

/**
 * Заполнение n карт данными из массива data = shuffle(doubleCards)
 */

function generateCardsContent(data) {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].innerHTML = (0,_card_template_js__WEBPACK_IMPORTED_MODULE_4__.cardTemplate)(data[i]);
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
  }
}


/***/ }),

/***/ "./src/js/stopwatch.js":
/*!*****************************!*\
  !*** ./src/js/stopwatch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increaseTime": () => (/* binding */ increaseTime)
/* harmony export */ });
/**
 * Секундомер
 */

function increaseTime(app) {
  app.userTimeSekMin[0]++;

  const countSek = document.querySelector('.timer__count_sek');
  const countMin = document.querySelector('.timer__count_min');

  countSek.textContent = '0' + app.userTimeSekMin[0];

  if (10 <= app.userTimeSekMin[0] && app.userTimeSekMin[0] <= 59) {
    countSek.textContent = app.userTimeSekMin[0];
  }

  if (app.userTimeSekMin[0] === 60) {
    countSek.textContent = '00';
    app.userTimeSekMin[0] = 0;

    app.userTimeSekMin[1]++;
    countMin.textContent = '0' + app.userTimeSekMin[1];

    if (10 <= app.userTimeSekMin[1] && app.userTimeSekMin[1] <= 59) {
      countMin.textContent = app.userTimeSekMin[1];
    }

    if (app.userTimeSekMin[1] === 60) {
      countSek.textContent = '00';
      countMin.textContent = '00';
      app.userTimeSekMin[0] = 0;
      app.userTimeSekMin[1] = 0;
    }
  }
}


/***/ }),

/***/ "./src/js/utils/arr-utils.js":
/*!***********************************!*\
  !*** ./src/js/utils/arr-utils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doubleArr": () => (/* binding */ doubleArr),
/* harmony export */   "shuffle": () => (/* binding */ shuffle)
/* harmony export */ });
/**
 *Дублирование элементов массива
 */

function doubleArr(a) {
  return a.concat(a);
}

/**
 * Перемешивание элементов массива
 */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}


/***/ }),

/***/ "./src/data/cards.json":
/*!*****************************!*\
  !*** ./src/data/cards.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"diamonds6","text":"6","img":"img/diamonds6.png","suit":"img/diamonds.png"},{"name":"diamonds7","text":"7","img":"img/diamonds7.png","suit":"img/diamonds.png"},{"name":"diamonds8","text":"8","img":"img/diamonds8.png","suit":"img/diamonds.png"},{"name":"diamonds9","text":"9","img":"img/diamonds9.png","suit":"img/diamonds.png"},{"name":"diamonds10","text":"10","img":"img/diamonds10.png","suit":"img/diamonds.png"},{"name":"diamondsJ","text":"J","img":"img/diamonds-j.png","suit":"img/diamonds.png"},{"name":"diamonds-Q","text":"Q","img":"img/diamonds-q.png","suit":"img/diamonds.png"},{"name":"diamondsK","text":"K","img":"img/diamonds-k.png","suit":"img/diamonds.png"},{"name":"diamondsA","text":"A","img":"img/diamonds-a.png","suit":"img/diamonds.png"},{"name":"spades6","text":"6","img":"img/spades6.png","suit":"img/spades.png"},{"name":"spades7","text":"7","img":"img/spades7.png","suit":"img/spades.png"},{"name":"spades8","text":"8","img":"img/spades8.png","suit":"img/spades.png"},{"name":"spades9","text":"9","img":"img/spades9.png","suit":"img/spades.png"},{"name":"spades10","text":"10","img":"img/spades10.png","suit":"img/spades.png"},{"name":"spadesJ","text":"J","img":"img/spades-j.png","suit":"img/spades.png"},{"name":"spades-Q","text":"Q","img":"img/spades-q.png","suit":"img/spades.png"},{"name":"spadesK","text":"K","img":"img/spades-k.png","suit":"img/spades.png"},{"name":"spadesA","text":"A","img":"img/spades-a.png","suit":"img/spades.png"},{"name":"hearts6","text":"6","img":"img/hearts6.png","suit":"img/hearts.png"},{"name":"hearts7","text":"7","img":"img/hearts7.png","suit":"img/hearts.png"},{"name":"hearts8","text":"8","img":"img/hearts8.png","suit":"img/hearts.png"},{"name":"hearts9","text":"9","img":"img/hearts9.png","suit":"img/hearts.png"},{"name":"hearts10","text":"10","img":"img/hearts10.png","suit":"img/hearts.png"},{"name":"heartsJ","text":"J","img":"img/hearts-j.png","suit":"img/hearts.png"},{"name":"hearts-Q","text":"Q","img":"img/hearts-q.png","suit":"img/hearts.png"},{"name":"heartsK","text":"K","img":"img/hearts-k.png","suit":"img/hearts.png"},{"name":"heartsA","text":"A","img":"img/hearts-a.png","suit":"img/hearts.png"},{"name":"clubs6","text":"6","img":"img/clubs6.png","suit":"img/clubs.png"},{"name":"clubs7","text":"7","img":"img/clubs7.png","suit":"img/clubs.png"},{"name":"clubs8","text":"8","img":"img/clubs8.png","suit":"img/clubs.png"},{"name":"clubs9","text":"9","img":"img/clubs9.png","suit":"img/clubs.png"},{"name":"clubs10","text":"10","img":"img/clubs10.png","suit":"img/clubs.png"},{"name":"clubsJ","text":"J","img":"img/clubs-j.png","suit":"img/clubs.png"},{"name":"clubs-Q","text":"Q","img":"img/clubs-q.png","suit":"img/clubs.png"},{"name":"clubsK","text":"K","img":"img/clubs-k.png","suit":"img/clubs.png"},{"name":"clubsA","text":"A","img":"img/clubs-a.png","suit":"img/clubs.png"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _generate_hello_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-hello-screen.js */ "./src/js/generate-hello-screen.js");




document.addEventListener('DOMContentLoaded', () => {
  window.app = {
    userTimeSekMin: [0, 0],
    cardsForCurrentGame: [],
    userCards: [],
    userTargets: [],
    guessedPairs: [],
    attempts: 0,
    commonDelay: 400,
    cardDisplayTime: 5000,
    cardDisplayTimeDelay: 1000,
  };

  const screenContainer = document.querySelector('.screen-container');
  (0,_generate_hello_screen_js__WEBPACK_IMPORTED_MODULE_1__.generateHelloScreen)(screenContainer);
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map