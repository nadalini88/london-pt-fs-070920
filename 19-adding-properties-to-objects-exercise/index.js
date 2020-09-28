// **** DO NOT TOUCH THIS CODE ****
// ============================
const user = {};
// ============================

/**
 * Exercise 1
 *
 * add property "firstName" to "user" and assign any name
 */
user.firstName = "Alex";

/**
 * Exercise 2
 *
 * add property "lastName" to "user" and assign any last name
 */
user.lastName = "Smith";

/**
 * Exercise 3
 * create a function "addANewProperty" which takes
 * 2 params, first - property name and second - property value
 * and set a new property for 'user' object
 */

const addANewProperty = function addANewProperty(key, value) {
  user[key] = value;
};
addANewProperty("age", 16);
