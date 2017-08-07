// ES6 Rest parameter syntax allows us to represent an indefinite number of arguments as an array.

// More reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

// Example 1
const printNumberOfArguments = (...args) => {
  console.log(args.length)
}

printNumberOfArguments(14) // 1
printNumberOfArguments(-2, 0, 3) // 3
printNumberOfArguments("blue", "red") // 2
printNumberOfArguments(true, "Rainbows", 14) // 3
printNumberOfArguments() // 0

// Example 2
const addThingsToAnArray = (arrayToAddThingsTo, ...thingsToAdd) => {
  thingsToAdd.forEach((thingToAdd) => arrayToAddThingsTo.push(thingToAdd))
}

const colors = ["purple", "blue"]

addThingsToAnArray(colors, "teal", "brown")

console.log(colors) // [purple, blue, teal, brown]
