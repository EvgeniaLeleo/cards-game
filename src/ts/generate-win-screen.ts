import { generateStartScreen } from './generate-start-screen';

export function generateWinScreen(): void {
  const shadow = document.createElement('div');
  shadow.classList.add('shadow');

  const formWin = document.createElement('form');
  formWin.classList.add('form', 'form__win');

  const imgWin = document.createElement('img');
  imgWin.classList.add('img-win');
  imgWin.src = './static/img/win.png';

  const h2Title = document.createElement('h2');
  h2Title.classList.add('h2-title');
  h2Title.textContent = 'Вы выиграли!';

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
  screenContainer.appendChild(formWin);
  formWin.appendChild(imgWin);
  formWin.appendChild(h2Title);
  formWin.appendChild(text);
  formWin.appendChild(time);
  formWin.appendChild(buttonRepeat);

  formWin.addEventListener('submit', (event) => {
    event.preventDefault();

    screenContainer.innerHTML = '';
    generateStartScreen(screenContainer);
  });
}
