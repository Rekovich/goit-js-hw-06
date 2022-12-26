const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const arrIngredients = [];

ingredients.forEach((elem)=> {
  const item = document.createElement('li');
  item.classList.add = 'item';
  item.textContent = elem;

  arrIngredients.push(item);
});

ingredientsList.append(...arrIngredients);

// console.log([arrIngredients]);