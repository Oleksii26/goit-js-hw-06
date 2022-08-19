const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsElement = ingredients.map(ingredient => {
  const ingridientsItem = document.createElement('li');
  ingridientsItem.classList.add('.item');
  ingridientsItem.textContent = `${ingredient}`;

  return ingridientsItem;
});
ingredientsList.append(...ingredientsElement);







