/**
 * Exercise 1
 *
 * Create an object {user} and add properties "firstName" and "lastName".
 */
let user = {
  firstName: "Julio",
  lastName: "Nadalini"
};

/**
 * Exercise 2
 *
 * Create an object {userRead} and add properties "books" and "newspapers".
 * Both should be arrays with strings.
 */
let userRead = {
  books: ["", ""],
  newspapers: ["", ""]
};

/**
 * Exercise 3
 *
 * extend {user} object with all properties from {userRead} object
 *
 * Note: if I modify {userRead} it shouldn't change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: []
 * }
 */
user = {
  ...user,
  ...userRead
};

/**
 * Exercise 4
 *
 * Create an object {userWatch} and add properties "tvShows" and "movies".
 * Both should be arrays with strings.
 */

let userWatch = {
  tvShows: [""],
  movies: [""]
};

/**
 * Exercise 5
 *
 * extend {user} object with new property "userWatch" and assign {userWatch} object
 * as a value.
 *
 * Note: if I modify {userWatch} it should change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: [],
 *   userWatch: {
 *     tvShows: [],
 *     movies: []
 *   }
 * }
 */
user = {
  ...user,
  ...userRead,
  userWatch: {
    ...userWatch
  }
};

user = {
  ...user,
  ...userRead,
  userWatch
};
