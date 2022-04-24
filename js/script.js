document.addEventListener('DOMContentLoaded', () => {
  window.app = {
    time: [0, 0], // Проведенное игроком время в игре [сек, мин]
    cards: [], // Карты для игрового поля
    userCards: [], // Выбранные пользователем карты
    userTargets: [], // Номера выбранных карт
    pairs: [], // Угаданные пары
    attempts: 0, // Попытки

    // age, // Возраст игрока
    // level,  Выбранный уровень сложности
    // stopwatch, Секундомер
  };

  const screenContainer = document.querySelector('.screen-container');

  generateHelloScreen(screenContainer);
});
