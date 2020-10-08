// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */
let convertToPositive = () => {
  let arrayNumbers = [1, 2, -5, 8, -4];
  let newNumber = arrayNumbers.map(value => {
    if (value < 0) {
      return value * -1;
    }
    return value;
  });
  return newNumber;
};

/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */

const getAllNames = arrayObject => {
  return arrayObject.map(item => {
    return item.name;
  });
};

/**
 * Exercise 3
 *
 *
 *
 *
 * Create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */
const greetAll = names => {
  return names.map(name => {
    return `Hi, ${name}!`;
  });
};

/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */

let multiplyAllNumbers = array => {
  return array.map(value => {
    if (typeof value == "number") {
      return value * 5;
    } else {
      return value;
    }
  });
};
