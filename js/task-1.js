const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

const titleEl = document.querySelectorAll('.item > h2');
titleEl.forEach(title => {
  const titleName = title.textContent;
  console.log(`Category: ${titleName}`);
  const subItemEl = title.parentElement.querySelectorAll('ul > li');
  console.log(`Elements: ${subItemEl.length}`);
});
