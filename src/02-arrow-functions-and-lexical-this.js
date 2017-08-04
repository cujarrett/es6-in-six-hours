// Arrow functions are another way to write functions.
// Arrow functions are shorter to write and add non binding of `this`. Meaning, an arrow function does not create its own this, the this value of the enclosing execution context is used.

// Example 1 - Arrow Function with one parameter compared to a traditional function expression
const printSomething = function(thingToPrint) {
  console.log(thingToPrint)
}
// Now an ES6 Arrow function equivalent
const printAThing = (thingToPrint) => {
  console.log(thingToPrint)
}

// Example 2 - Arrow functions that take two parameters
const addTwoNumbers = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber
}

// Example 3 - Arrow fuctions that take no parameters
const printBlue = () => {
  console.log("Blue")
}

// Some Weird Details Next

// Example 4
// Arrow functions that have one parameter don't have to be wrapped in parentheses
const printTheThing = thingToPrint => {
  console.log(thingToPrint)
}

// Example 5
// When you are only returning a value you can skip the brackets
const add10 = (inputNumber) => inputNumber + 10

// Example 6 Lexical `this`
// Previous to ES6 Arrow Functions, you had to do something like this
function Boy() {
  var that = this
  that.age = 0

  setInterval(function growUp() {
    // The callback refers to the `that` variable of which
    // the value is the expected object.
    that.age += 1
  }, 1000)
}

const boy = new Boy()

// We can do better. We can avoid the this = that headache
function Girl() {
  this.age = 0

  setInterval(() => {
    this.age += 1 // `this` properly refers to the person object
  }, 1000)
}

const girl = new Girl()
