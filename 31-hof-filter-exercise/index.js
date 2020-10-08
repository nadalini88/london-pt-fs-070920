/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */

// Use filter
const noStrings = array => {
  const result = array.filter(arr => typeof arr !== "string");
  return result;
};

/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */
const justStrings = array => {
  const strings = array.filter(arr => typeof arr == "string");
  return strings;
};

/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */
const justStringsLongerThan5 = array => {
  const arrayOfStrings = array.filter(
    arr => typeof arr == "string" && arr.length > 5
  );
  return arrayOfStrings;
};

/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */
const numbersMoreThan13 = array => {
  const arrayOfNumbers = array.filter(
    arr => typeof arr == "number" && arr > 13
  );
  return arrayOfNumbers;
};

/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */
const objectsOnly = array => {
  const arrayOfObjects = array.filter(
    arr => Array.isArray(arr) && typeof arr[0] == "object"
  );
  return arrayOfObjects;
};

/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */
const truthyOnly = array => {
  const arrayOfTruthy = array.filter(arr => arr === true);
  return arrayOfTruthy;
};
