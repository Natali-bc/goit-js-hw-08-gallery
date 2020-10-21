import gallery from './js/gallery.js';

const preview = document.querySelector('.gallery');
const modal = document.querySelector('.lightbox');
const modalImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('.lightbox__button');

gallery.forEach(el => {
  preview.innerHTML += `<li class="gallery__item">
  <a class="gallery__link" href=${el.original}>
  <img class="gallery__image" src=${el.preview} data-source=${el.original} alt=${el.description}><a/></li>`;
});

const clickPreview = function (event) {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    modal.classList.add('is-open');
    modalImage.src = event.target.dataset.source;
  }
};
closeButton.addEventListener('click', () => {
  modalImage.src = '';
  modal.classList.remove('is-open');
});

preview.addEventListener('click', clickPreview);
