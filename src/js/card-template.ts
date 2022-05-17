export function cardTemplate(data) {
  return `<div class="card__content">
  <div class="card__info card__info_top">
    <div class="card__text">${data.text}</div>
    <img
      class="card__suit"
      src="${data.suit}"
      alt="${data.name}"
    />
  </div>
  <div class="card__center">
    <img src="${data.suit}"
    alt="${data.name}" />
  </div>
  <div class="card__info card__info_bottom">
    <div class="card__text">${data.text}</div>
    <img
      class="card__suit"
      src="${data.suit}"
      alt="${data.name} "
    />
  </div>
  </div>
  </div>`;
}
