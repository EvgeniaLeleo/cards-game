/***
 * Запрос данных из файла cards.json и вывод их на текущую страницу в карты
 */

function requestFunction() {
  const request = new XMLHttpRequest();

  request.open('GET', 'cards.json');

  request.send();

  request.onload = function () {
    if (request.status !== 200) {
      console.error('Не удалось получить данные!');
    } else {
      const data = JSON.parse(request.response);

      showData(data);
    }
  };
}

/***
 * Вывод данных data из файла *.json в карточки
 */

function showData(data) {
  const shuffledData = shuffle(data);
  const randomCards = shuffledData.splice(0, window.app.level * 3);

  window.app.cards = shuffle(doubleArr(randomCards));

  generateCardsContent(window.app.cards);

  window.app.stopwatch = setInterval(increaseTime, 1000, window.app); // запуск секундомера

  window.app.delay = setTimeout(hideCards, 5000); // время показа карт

  showCard(); // перевернуть карту (ниже)
}

/**
 * Заполнение n карт данными из массива data = shuffle(doubleCards)
 */

function generateCardsContent(data) {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('src', data[i].img);
    imgs[i].setAttribute('alt', `${data[i].name}`);
  }
}

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

/**
 * Переворачиваем карты рубашкой вверх
 */

function hideCards() {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('src', 'img/back.png');
    imgs[i].setAttribute('alt', 'Card back');
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
    imgs[i].setAttribute('style', 'pointer-events: auto;');
    imgs[i].style.cursor = 'pointer';
  }
}

/**
 * Открываем карту по клику
 */

function showCard() {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', () => {
      imgs[i].setAttribute('src', window.app.cards[i].img);
      imgs[i].setAttribute('alt', `${window.app.cards[i].name}`);
      imgs[i].style.transform = 'rotateY(180deg) scale(-1, 1)';

      // добавляем пару выбранных карт в window.app.userCards
      if (!window.app.userCards[0]) {
        window.app.userCards[0] = window.app.cards[i].name;
      } else {
        window.app.userCards[1] = window.app.cards[i].name;

        //если карты не совпадают, обнуляем список выбранных карт и угаданных пар
        if (window.app.userCards[0] !== window.app.userCards[1]) {
          window.app.userCards = [];
          window.app.pairs = [];

          const attempts = document.querySelectorAll('.attempt');
          attempts[window.app.attempts].style.background = '#c14a00';

          window.app.attempts++;

          if (window.app.attempts === 3) {
            generateLoseScreen();
          }

          setTimeout(hideCards, 400);
        }

        //если карты совпадают, добавляем в список угаданных пар
        if (
          window.app.userCards.length > 0 &&
          window.app.userCards[0] === window.app.userCards[1]
        ) {
          if (!app.pairs.includes(window.app.userCards[0])) {
            window.app.pairs.push(window.app.userCards[0]);
          }

          window.app.userCards = [];

          if (window.app.pairs.length === window.app.level * 3) {
            clearInterval(window.app.stopwatch);

            generateWinScreen();
          }
        }
      }
    });
  }
}