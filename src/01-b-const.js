// const is another way to declare variables.
// const is block scoped and a constant.

// More reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

const color = "yellow"

if (true) {
  const color = "blue"
  console.log("color: " + color) // blue
}

console.log("color: " + color) // yellow

color = "red" // throws TypeError - Can't reasign a const
