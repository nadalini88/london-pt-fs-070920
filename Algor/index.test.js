// const greeting = require('./index');
// test('should say Hello', () => {
//   expect(greeting()).toBe('Hello')
// })

// const { TestScheduler } = require('jest');
// const factorial = require('./index');

// TestScheduler('should return the factorial value of a given number', () => {
//     expect(factorial(5)).toBe(3) //120
//     expect(factorial(0)).toBe(1) //120
//     expect(factorial(10)).toBe(3628800) //120
// })

// const {expect} = require('@jest/globals');
// const isPalindrome = require('./index');

// describe('isPalindrome - should return true if the given text is the same reversed(without punctuation or spaces, and ignoring casing)', () => {
//     test('should return true for "Race car"', () => {
//       expect(isPalindrome('Race Car')).toBe(true);
//     })
//     test('should return true for "A tin mug for a jar of gum, Nita."', () => {
//       expect(isPalindrome('A tin mug for a jar of gum, Nita.')).toBe(true);
//     })
//     test('should return true for "Barge in! Relate mere war of 1991 for a were-metal Ernie grab!"', () => {
//       expect(isPalindrome('Barge in! Relate mere war of 1991 for a were-metal Ernie grab!')).toBe(true);
//     })
//     test('should return false for "not a palindrome"', () => {
//       expect(isPalindrome('not a palindrome')).toBe(false);
//     })
//     test('should return false for "codersinhoods"', () => {
//       expect(isPalindrome('codersinhoods')).toBe(false);
//     })
//   })
