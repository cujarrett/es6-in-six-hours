// ES6 Default allows you set default values for function parameters.

// More reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

// Example 1
const multiply = (a, b = 10) => {
  console.log(a * b)
}

multiply(5, 2) // 10
multiply(5, 1) // 5
multiply(5) // 50

// Example 2
const greet = (greeting, name = "John") => {
  console.log(`${greeting} ${name}`)
}

greet("Hello") // Hello John
greet("Hello", "Robin") // Hello Robin

// Example 3
const recieve = (passedInFunction = () => console.log("default")) => {
  passedInFunction()
}

const printRabbit = () => {
  console.log("rabbit")
}

recieve() // default
recieve(printRabbit) // rabbit
