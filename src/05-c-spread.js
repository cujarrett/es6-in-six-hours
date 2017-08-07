// ES6 Spread allows parts of an array literal to be initialized from an iterable expression (such as another array literal), or allows an expression to be expanded to multiple arguments (in function calls).

// More Reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator

// Example 1
const firstArray = [1, 2, 3]
const secondArray = [4, 5, 6]

firstArray.push(secondArray)
console.log(firstArray) // [ 1, 2, 3, [ 4, 5, 6 ] ]

const thirdArray = [7, 8, 9]

thirdArray.push(...secondArray)
console.log(thirdArray) // [ 7, 8, 9, 4, 5, 6 ]

// Example 2
const numbers = [9, 4, 1, 108]
const lowest = Math.min(...numbers)
console.log(lowest) // 1
