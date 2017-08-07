// ES6 For of loops over an iterable object.

// More reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// Example 1
const numbers = [1, 2, 3]

for (const number of numbers) {
  console.log(number)
}
// 1
// 2
// 3

// Example 2
const word = "Smile"

for (const letter of word) {
  console.log(letter)
}
// S
// m
// i
// l
// e
