/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */

function logProperties(object) {
  for (key in object) {
    console.log("Property name: " + key);
  }
}

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

function getAllValues(obj) {
  let arr = [];
  for (key in obj) {
    const value = obj[key];
    arr.push(value);
  }
  return arr;
}

// 1. create a variable - empty array;
// 2. use loop to get each value and push to your array
// 3. return your array

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */

function getAllValuesAsString(object) {
  let values = [];

  for (key in object) {
    const value = object[key];
    values.push(value);
  }

  // ["Alex", "Smith"]

  return values.join(" "); // "Alex Smith"
}

/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * "{key}: {value}"
 */

function propertyValueString(object) {
  for (const key in object) {
    console.log(`${key}: ${object[key]}`);
  }
}
