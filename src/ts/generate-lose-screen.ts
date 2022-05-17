import { generateStartScreen } from './generate-start-screen';

export function generateLoseScreen() {
  const shadow = document.createElement('div');
  shadow.classList.add('shadow');

  const formLose = document.createElement('form');
  formLose.classList.add('form', 'form__lose');

  const imgLose = document.createElement('img');
  imgLose.classList.add('img-lose');
  imgLose.src = './static/img/lose.png';

  const h2Title = document.createElement('h2');
  h2Title.classList.add('h2-title');
  h2Title.textContent = 'Вы проиграли!';

  const text = document.createElement('p');
  text.classList.add('final-text');
  text.textContent = 'Затраченное время:';

  const min = document.querySelector('.timer__count_min') as HTMLDivElement;
  const sek = document.querySelector('.timer__count_sek') as HTMLDivElement;

  const time = document.createElement('p');
  time.classList.add('final-time');
  time.textContent = min.textContent + '.' + sek.textContent;

  const buttonRepeat = document.createElement('button');
  buttonRepeat.classList.add('button');
  buttonRepeat.textContent = 'Играть снова';

  const screenContainer = document.querySelector(
    '.screen-container'
  ) as HTMLDivElement;
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
    generateStartScreen(screenContainer);
  });
}
