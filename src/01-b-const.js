// const is another way to declare variables.
// const is block scoped and a constant.

// More reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

if (true) {
  const color = "blue"
  console.log("color: " + color) // bar
  color = "red" // TypeError - Can't reasign const
}

console.log("color: " + color) // undefined
