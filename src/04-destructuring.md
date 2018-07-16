# Destructuring

### Background
Destructuring makes it possible to unpack values from arrays,or properties from objects, into
distinct variables. More reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

[![example-link](../media/youtube-example-image.png)](https://youtu.be/E-l3Rw8lr6E)

```js
// Example 1
const { color, position } = {
  color: "blue",
  name: "John",
  state: "New York",
  position: "Forward"
}

console.log(color) // blue
console.log(position) // Forward

// Example 2
const generateObject = () => {
  return {
    color: "blue",
    name: "John",
    state: "New York",
    position: "Forward"
  }
}

const { name: firstName, state } = generateObject()
console.log(firstName) // John
console.log(state) // New York

// Example 3
const [first, , third] = ["red", "yellow", "green"]
console.log(first) // red
console.log(third) // green

// Example 4
const people = [
  {
    firstName: "Sarah",
    lastName: "Blue",
    phone: "1-387-555-0887",
    email: "clinton@google.com"
  }, {
    firstName: "Frank",
    lastName: "Rivers",
    phone: "1-289-555-3303",
    email: "frank@apple.com"
  }
]

// Without destructuring
people.forEach((person) => console.log(person.firstName))
// Sarah
// Frank

// With destructuring
people.forEach(({ firstName }) => console.log(firstName))
// Sarah
// Frank

// Example 5
const [, frank] = people

const logEmail = ({ email }) => {
  console.log(email)
}

logEmail(frank) // frank@apple.com
```
