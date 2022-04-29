/**
 * Переворачиваем карты рубашкой вверх
 */

function hideCards() {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].innerHTML = '<img src="img/back.png" alt="Card back" />';
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
    imgs[i].setAttribute('style', 'pointer-events: auto;');
    imgs[i].style.cursor = 'pointer';
  }
}

function hideCardsChild() {
  let imgs = document.querySelectorAll('.card');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].innerHTML =
      '<img class="img-child" src="img/back.png" alt="Card back" />';
    imgs[i].style.transform = 'rotateY(-180deg) scale(-1, 1)';
    imgs[i].setAttribute('style', 'pointer-events: auto;');
    imgs[i].style.cursor = 'pointer';
  }
}
