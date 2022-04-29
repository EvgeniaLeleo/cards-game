/***
 * Запрос данных из файла *.json и вывод их на текущую страницу в карты
 */

function requestFunction() {
  const request = new XMLHttpRequest();

  request.open('GET', '../data/cards.json');

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

function requestFunctionChild() {
  const request = new XMLHttpRequest();

  request.open('GET', '../data/cards-child.json');

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
