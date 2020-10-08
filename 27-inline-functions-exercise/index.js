/* ================ */
/* INLINE FUNCTIONS */
/* ================ */

/**
 * Exercise 1
 *
 * create an inline function {reverseArray} that takes array as a param
 * and return reversed array. If you don't pass any param,
 * use default value "[]", is you pass any other type than array
 * return a string "Please, pass correct type".
 */
let reverseArray = function(array = []) {
  if (Array.isArray(array)) {
    return array.reverse();
  } else {
    return "Please, pass correct type";
  }
};

// not able to return a string

/**
 * Exercise 2
 *
 * create an inline function {nextOddNum} that takes number as a param
 * and return next odd number.
 */

let nextOddNum = function(number) {
  if (number % 2 == 0) {
    return number + 1;
  } else {
    return number + 2;
  }
};

/**
 * Exercise 3
 *
 * create an inline function {isLessThan100} which should take
 * 2 numbers as a param.
 * Given two numbers, return true if the sum of both numbers is
 * less than 100. Otherwise return false.
 */

let isLessThan100 = function(num1, num2) {
  return num1 + num2 < 100;
};

/**
 * Exercise 4
 * create an inline function {incrementBy5} which takes
 * a number as a param, add 5 and return the result.
 */
let incrementBy5 = function(number) {
  number += 5;
  return number;
};

/**
 * Exercise 5
 * create a function {incrementAllBy5} which takes array
 * of numbers as a first param and a incrementor function as a second param.
 * Then apply incrementor function to each element in your array and
 * return the result
 */

function incrementAllBy5(array, incrementBy5) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(incrementBy5(array[i]));
  }
  return result;
}
