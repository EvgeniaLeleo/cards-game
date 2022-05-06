/**
 * Переворачиваем карты рубашкой вверх
 */

export function hideCards() {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].innerHTML = '<img src="img/back.png" alt="Card back" />';
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
    imgs[i].setAttribute('style', 'pointer-events: auto;');
    imgs[i].style.cursor = 'pointer';
  }
}

export function hideCardsChild() {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].innerHTML =
      '<img class="img-child" src="img/back.png" alt="Card back" />';
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
    imgs[i].setAttribute('style', 'pointer-events: auto;');
    imgs[i].style.cursor = 'pointer';
  }
}

export function hideCardsBaby() {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
    imgs[i].setAttribute('style', 'pointer-events: auto;');
    imgs[i].style.cursor = 'pointer';
    imgs[i].style.background = '#c8e7ff';
  }
}
