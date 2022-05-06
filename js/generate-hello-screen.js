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

    // if (userAges[0].checked) {
    //   window.app.age = userAges[0].value;

    //   generateGameScreenBaby(container);
    // }

    for (let i = 0; i < userAges.length; i++) {
      if (userAges[i].checked) {
        window.app.age = userAges[i].value;

        generateStartScreen(container);

        break;
      } else {
        buttonStart.textContent = 'Вы не выбрали возраст!';
        buttonStart.style.background = '#c14a00';
      }
    }
  });
}
