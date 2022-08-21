const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

const makeItemGallery = ({ url, alt }) => {
  return `
  <li class="gallery__item">
    <img class="gallery__img" src='${url}' alt='${alt}'  height='150'>
    </img>
  </li>
  `;
};

const makeListGallery = images.map(makeItemGallery).join('');

galleryEl.insertAdjacentHTML('afterbegin', makeListGallery);

galleryEl.style.cssText = `
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  `;