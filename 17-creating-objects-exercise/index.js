/**
 * Exercise 1
 *
 * create an object {user}, which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
const user = {
  firstName: "Julio",
  lastName: "Nadalini",
  age: 32
};

/**
 * Exercise 2
 *
 * create an object {allTypes} with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */

const allTypes = {
  string: "name",
  number: 32,
  array: [0, 5, 10, 15, 20, 25],
  object: {
    ...user
  },
  function: function multipelsOfFive(multipes) {
    return allTypes.array[5];
  },
  boolean: true
};

/**
 * Exercise 3
 *
 * create a function {createMovieObject} which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */

function createMovieObject(name, rating, ticketPrice) {
  const object = {
    name: "Home Alone",
    ticketPrice: 20,
    rating: 8.5
  };
  return object;
}
createMovieObject();
console.log(createMovieObject());
