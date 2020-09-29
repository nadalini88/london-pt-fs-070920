/**
 * create an array {animals} with "cat"
 */
const animals = ["cat"];

/**
 * Exercise 1
 *
 * add a "dog" to the end of your {animals}
 *
 * NOTE: console.log() the result to see the difference
 */
animals.push("dog");

/**
 * Exercise 2
 *
 * add a "rabbit" to the very beginning of your {animals}
 *
 * PS: console.log() the result to see the difference
 */

animals.unshift("rabbit");
/**
 * Exercise 3
 *
 * add a "puma" to position 2 in {animals}
 *
 * PS: console.log() the result to see the difference
 */

animals.splice(1, 1, "puma");

/**
 * create an array {wildAnimals} with "lion"
 */
const wildAnimals = ["lion"];
/**
 * create an array {moreWildAnimals} with "giraffe" and "elephant"
 */
const moreWildAnimals = ["giraffe", "elephant"];

/**
 * Exercise 4
 *
 * combine {wildAnimals} and {moreWildAnimals} into one array
 * and assign it to variable {combinedWildAnimals}
 *
 * PS: console.log() the result to see the difference
 */

combinedWildAnimals = wildAnimals.concat(moreWildAnimals);

console.log(combinedWildAnimals);