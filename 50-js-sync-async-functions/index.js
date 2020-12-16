const ingredients = [
  { name: "carrot", time: 500 },
  { name: "potato", time: 1000 },
  { name: "onion", time: 250 },
  { name: "celery", time: 150 },
  { name: "tomato", time: 100 },
];

const syncCookIngredient = ({ name, time }) => {
  const start = Date.now();
  console.log(`Start cooking ${name}`);
  while (start + time > Date.now()) { }

  console.log(`${name} cooked!`);
};

// const syncCookIngredient = (ingredient) => {
//   const start = Date.now();
//   console.log(`Start cooking ${ingredient.name}`);
//   while (start + ingredient.time > Date.now()) { }
//   console.log(`${ingredient.name} cooked!`);
// };

/**
 * Exercise 1
 *
 * create a function {syncCookMeal} which will recieve an
 * array of {ingredientsToCook}, (similar to the array
 * defined on line 1) and call {syncCookIngredient}
 * for each ingredient in the array
 *
 * After all the ingredients are cooked,
 * log the message "Soup is ready to serve"
 */

<<<<<<< HEAD

const syncCookMeal = (array) => {
  array.forEach(element => {
    syncCookIngredient(element)
  });
  console.log("Soup is ready to serve")
}

=======
>>>>>>> 33b2dfbe225e14e41855361dddee3ccd1015f59a
/**
 * Exercise 2
 *
 * create a function {asyncCookIngredient} which takes 1 argument:
 *
 * an {ingredient} object (like the objects in the array on line 1)
 * with 2 keys: name and time.
 *
 * Log out the message "Start cooking INGREDIENT_NAME"
 * then after the cooking time has elapsed,
 * log out "INGREDIENT_NAME cooked!". Both times displaying
 * the name of the ingredient.
 *
 */
const asyncCookIngredient = (ingredient) => {
  console.log (`Start cooking ${ingredient.name}`);
  setTimeout(() => {
    console.log(`${ingredient.name} cooked!`);
  }, ingredient.time);
}

/**
 * Exercise 3
 *
 * create a function {asyncCookMeal} which will which will recieve an
 * array of {ingredientsToCook} and call {asyncCookIngredient} for
 * eahc ingredient
 *
 * After all the ingredients are cooked,
 * log the message "Soup is ready to serve"
 */
<<<<<<< HEAD



const asyncCookMeal = async (ingredients) => {
  ingredients.forEach((el) => {
    asyncCookIngredient(el);
  });
  const max_time = Math.max(ingredients.time);
  setTimeout(() => console.log("Soup is ready to serve"), max_time + 5);
};
=======
>>>>>>> 33b2dfbe225e14e41855361dddee3ccd1015f59a
