// **** DO NOT MODIFY THIS OBJECT ****
// ============================
const user = {
  type: "admin",
  firstName: "Alex",
  lastName: "Smith",
  password: "12345",
  age: 26,
  favoriteMovies: ["Interstellar", "The Wolf of Wall Street"],
  parents: {
    mother: {
      firstName: "Julia",
      lastName: "Smith"
    },
    father: {
      firstName: "John",
      lastName: "Smith"
    }
  }
};
// ============================

/**
 * Exercise 1
 *
 * create a variable "userFirstName"
 * and assign "user" first name to it.
 *
 * PS: use console.log() to see the result
 */
let userFirstName = "";
userFirstName = user.firstName;
console.log(userFirstName);

/**
 * Exercise 2
 *
 * create a variable "favoriteMovies"
 * and assign first item from "user"
 * favoriteMovies array.
 *
 * PS: use console.log() to see the result
 */
let favoriteMovie = "";
favoriteMovie = user.favoriteMovies[0];

/**
 * Exercise 3
 * create "userFullName" that equals to
 * "user" first name concatenated with last name,
 * separated with space
 *
 * PS: use console.log() to see the result
 */

let userFullName = user.firstName.concat(" ", user.lastName);

/**
 * Exercise 4
 *
 * create a function "getFullName"
 * which return full name of our user.
 *
 * PS: use console.log() to see the result
 */

function getFullName(fullName) {
  return user.firstName.concat(" ", user.lastName);
}
getFullName();
console.log(getFullName);
/**
 * Exercise 5
 *
 * create a variable mothersFirstName and assign
 * mothers first name of our user
 *
 * PS: use console.log() to see the result
 */
let mothersFirstName = user.parents.mother.firstName;

/**
 * Exercise 6
 *
 * create a function "getParentFullName"
 * which takes parent type(mother or father) and return
 * full name of that person.
 *
 * PS: use console.log() to see the result
 */
const getParentFullName = function getParentFullName(parent) {
  if (parent == "father") {
    return user.parents.father.firstName.concat(
      " ",
      user.parents.father.lastName
    );
  } else if (parent == "mother") {
    return user.parents.mother.firstName.concat(
      " ",
      user.parents.father.lastName
    );
  }
};
getParentFullName("mother");
getParentFullName("father");
console.log(getParentFullName);

/**
 * Exercise 7
 *
 * create a function getUserData which will take
 * a property name as a parameter and return the value
 *
 * * PS: use console.log() to see the result
 */

const getUserData = function getUserData(parameter) {
  if (parameter == "firstName") {
    return userFirstName;
  } else if (parameter == "age") {
    return user.age;
  } else if (parameter == "parents") {
    return user.parents;
  } else if (parameter == "favoriteMovies") {
    return user.favoriteMovies;
  }
};

getUserData("firstName");
getUserData("age");
getUserData("parents");
getUserData("favoriteMovies");
