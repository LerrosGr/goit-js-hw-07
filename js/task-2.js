const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');
const listItem = images
  .map(
    image =>
      `<li class="list-item"><img  src="${image.url} alt="${image.alt} width="300px"/></li>`
  )
  .join('');
list.insertAdjacentHTML('afterbegin', listItem);

// const listEl = document.querySelector('.gallery');
// images.forEach(image => {
//   const listItem = document.createElement('li');
//   listItem.className = 'list';
//   const imgEl = document.createElement('img');
//   imgEl.url = image.url;
//   imgEl.alt = image.alt;
//   imgEl.className = 'photo';
//   listItem.appendChild(imgEl);
//   listEl.appendChild(listItem);
// });
