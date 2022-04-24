document.addEventListener('DOMContentLoaded', () => {
  const app = {
    // level,  Выбранный уровень сложности
    // screen,  Значение хода игры (экран выбора сложности, игровой экран, финальный экран с результатами
    // time,  Проведенное игроком время в игре
    // cards,  Карты для игрового поля
    // userCards,  Выбранные пользователем карты
  };

  const form = document.querySelector('.form');
  const buttonStart = document.querySelector('.difficulty__button');
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

  /**
   * НАЧАЛО ИГРЫ
   */

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    for (let i = 0; i < difficultyLevels.length; i++) {
      if (difficultyLevels[i].checked) {
        app.level = difficultyLevels[i].value;
        generateGameScreen(app.level);

        break;
      } else {
        buttonStart.textContent = 'Вы не выбрали уровень!';
        buttonStart.style.background = '#c14a00';
      }
    }
  });

  function generateGameScreen(level) {
    form.innerHTML = '';

    const message = document.createElement('p');
    message.classList.add('message');
    message.textContent = `Вы выбрали ${level} уровень сложности`;

    form.appendChild(message);
  }
});
