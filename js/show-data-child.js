/***
 * Вывод данных data из файла *.json в карточки
 */

function showDataChild(data) {
  const shuffledData = shuffle(data);
  const randomCards = shuffledData.splice(0, window.app.level * 3);

  window.app.cardsForCurrentGame = shuffle(doubleArr(randomCards));

  generateCardsContentChild(window.app.cardsForCurrentGame);

  window.app.stopwatch = setInterval(increaseTime, 1000, window.app); // запуск секундомера

  window.app.delay = setTimeout(
    hideCardsChild,
    5000 + 2000 * (window.app.level - 1)
  ); // время показа карт 5s, 7s, 9s

  showCardChild(); // перевернуть карту (ниже)
}

/**
 * Заполнение n карт данными из массива data = shuffle(doubleCards)
 */

function generateCardsContentChild(data) {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[
      i
    ].innerHTML = `<img class="img-child" src="${data[i].img}" alt="${data[i].name}" />`;
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
  }
}

/**
 * Переворачиваем карты рубашкой вверх
 */

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
