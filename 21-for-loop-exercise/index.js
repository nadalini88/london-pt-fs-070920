const myName = "John"; // SET YOUR NAME

const visitors = [
  "Alex",
  "Mike",
  "Sam",
  "Grace",
  "Adam",
  "Julio",
  "George",
  "Tim"
]; // Add at least 5 names

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */

function greetVisitors() {
  for (let i = 0; i < visitors.length; i++) {
    const visitorsCount = visitors[i];
    console.log("Hi " + visitorsCount + ", my name is " + myName + "!");
  }
}
greetVisitors(visitors);

// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */

function getElementIndex(item) {
  for (let i = 0; i < numbers.length; i++) {
    if (item === numbers[i]) {
      return i;
    }
  }
  return "Item not found";
}
getElementIndex();

// ========================

/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */

// ========================
function total() {
  let totalAmount = 0;
  for (i = 0; i < numbers.length; i++) {
    totalAmount += numbers[i];
  }
  return totalAmount;
}
total(numbers);

const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */
function addIndex() {
  let arr = [];
  for (i = 0; i < numbersForIndexes.length; i++) {
    let numberAndIndex = numbersForIndexes[i] + i;
    arr.push(numberAndIndex);
  }
  return arr;
}
addIndex(numbersForIndexes);

const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */

function lowestNumber() {
  let number = 8;
  for (i = 0; i < forLowestNumber.length; i++) {
    if (number > forLowestNumber[i]) {
      number = forLowestNumber[i];
    }
  }
  return number;
}
