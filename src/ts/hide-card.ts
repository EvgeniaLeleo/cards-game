/**
 * Переворот карты рубашкой вверх
 */

export function hideCards(): void {
  let imgs = document.querySelectorAll<HTMLDivElement>('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].innerHTML = '<img src="./static/img/back.png" alt="Card back" />';
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
    imgs[i].setAttribute('style', 'pointer-events: auto;');
    imgs[i].style.cursor = 'pointer';
  }
}

export function hideCardsChild(): void {
  let imgs = document.querySelectorAll<HTMLDivElement>('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].innerHTML =
      '<img class="img-child" src="./static/img/back.png" alt="Card back" />';
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
    imgs[i].setAttribute('style', 'pointer-events: auto;');
    imgs[i].style.cursor = 'pointer';
  }
}

export function hideCardsBaby(): void {
  let imgs = document.querySelectorAll<HTMLDivElement>('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
    imgs[i].setAttribute('style', 'pointer-events: auto;');
    imgs[i].style.cursor = 'pointer';
    imgs[i].style.background = '#c8e7ff';
  }
}
