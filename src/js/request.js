import { showData } from './show-data.js';
import { showDataChild } from './show-data-child.js';

export function requestFunction() {
  const request = new XMLHttpRequest();

  request.open('GET', 'data/cards.json');

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

export function requestFunctionChild() {
  const request = new XMLHttpRequest();

  request.open('GET', 'data/cards-child.json');

  request.send();

  request.onload = function () {
    if (request.status !== 200) {
      console.error('Не удалось получить данные!');
    } else {
      const data = JSON.parse(request.response);

      showDataChild(data);
    }
  };
}

/***
 * Запрос данных из файла *.json и вывод их на текущую страницу в карты
 */

// import cardsData from './../data/cards.json';
// import cardsDataChild from './../data/cards-child.json';

// export function requestFunction() {
//   showData(cardsData);
// }

// export function requestFunctionChild() {
//   showDataChild(cardsDataChild);
// }
