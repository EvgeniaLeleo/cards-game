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
  h2Title.textContent = 'Выбери сложность';

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

  const buttonStart = document.createElement('button');
  buttonStart.classList.add('difficulty__button', 'button');
  buttonStart.textContent = 'Старт';

  formStart.appendChild(buttonStart);

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

        if (Number(window.app.age) === 1) {
          generateGameScreenChild(container);
        }
        if (Number(window.app.age) === 2) {
          generateGameScreen(container);
        }

        break;
      } else {
        buttonStart.textContent = 'Вы не выбрали уровень!';
        buttonStart.style.background = '#c14a00';
      }
    }
  });
}
