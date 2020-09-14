/**
 * Exercise 1
 *
 * create a variable {greeting} which should be a string
 */

 const greeting = "Hello World!";
 
/**
 * Exercise 2
 *
 * create a variable {name} which should be a string
 */
const name = "Julio";

/**
 * Exercise 3
 *
 * create a variable {phrase} which should be a
 * concatenation of {greeting} and {name}
 */

const phrase = greeting.concat(name);

/**
 * Exercise 4
 *
 * create a variable {price} which should has type number,
 * it should be a float.
 */

 const price = 1.25;

/**
 * Exercise 5
 *
 * create a variable {quantity} which should has type number.
 */

 const quantity = 25;

/**
 * Exercise 6
 *
 * create a variable {total} which should be
 * equal to price multiplied by quantity
 */
const total = price * quantity;

/**
 * Exercise 7
 *
 * create a variables {age1}, {age2}, {age3} which should be
 * integers
 */
let age1 = 20;
let age2 = 14;
let age3 = 10;

/**
 * Exercise 8
 *
 * create a variable {averageAge} which should be
 * the mean of age1, age2 and age3
 */
const averageAge = (age1 + age2 + age3)/3;

/**
 * Exercise 9
 *
 * create a variable {loggedIn} which should be
 * a boolean and equals true.
 */
let loggedIn = true;

/**
 * Exercise 10
 *
 * create a variable {adminUser} which should be
 * a boolean and equals false.
 */
let adminUser = false;

/**
 * Exercise 11
 *
 * create a variable {missingInfo} which should be
 * equal to undefined
 */
let missingInfo = undefined;

/**
 * Exercise 12
 *
 * variable {password} shouldn't be defined at all
 */


describe("strings", () => {
  test("greeting is a string", () => {
    expect(typeof greeting).toBe("string");
  });
  test("name is a string", () => {
    expect(typeof name).toBe("string");
  });
  test("phrase is a string", () => {
    expect(typeof greeting).toBe("string");
  });
  test('phrase is made up of "GREETING, NAME!" (e.g. "Hello, Mimi!")', () => {
    expect(typeof greeting).toBe("string");
  });
});

describe("numbers", () => {
  test("price is a number", () => {
    expect(typeof price).toBe("number");
  });
  test("price is a float (i.e. has a decimal place)", () => {
    expect(parseInt(price)).not.toBe(price);
  });
  test("quantity is an integer", () => {
    expect(typeof quantity).toBe("number");
    expect(parseInt(quantity)).toBe(quantity);
  });
  test("total is price multiplied by quantity", () => {
    expect(typeof total).toBe("number");
    expect(total).toBe(quantity * price);
  });
  test("age1, age2 and age3 are integers", () => {
    expect(typeof age1).toBe("number");
    expect(parseInt(age1)).toBe(age1);
    expect(typeof age2).toBe("number");
    expect(parseInt(age2)).toBe(age2);
    expect(typeof age3).toBe("number");
    expect(parseInt(age3)).toBe(age3);
  });
  test("averageAge is the mean of age1, age2 and age3", () => {
    expect(typeof averageAge).toBe("number");
    expect(averageAge).toBe((age1 + age2 + age3) / 3);
  });
});
describe("booleans", () => {
  test("loggedIn is a boolean", () => {
    expect(typeof loggedIn).toBe("boolean");
  });
  test("loggedIn is true", () => {
    expect(loggedIn).toBe(true);
  });
  test("adminUser is a boolean", () => {
    expect(typeof adminUser).toBe("boolean");
  });
  test("adminUser is false", () => {
    expect(adminUser).toBe(false);
  });
});
describe("undefined", () => {
  test("missingInfo is declared as undefined", () => {
    expect(() => missingInfo).not.toThrow();
    expect(typeof missingInfo).toBe("undefined");
  });
  test("password is completely undefined", () => {
    expect(() => password).toThrow();
  });
});
