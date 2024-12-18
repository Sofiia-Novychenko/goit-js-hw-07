const listEl = document.querySelector('#categories');

const listItems = listEl.querySelectorAll('.item');

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(category => {
  const categoryTitle = category.querySelector('.category-title').textContent;
  const categoryListItems = category.querySelectorAll('.category-item').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryListItems}`);
});
