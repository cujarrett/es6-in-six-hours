# Generators

### Background
Generators are functions which can be exited and later re-entered. Their context (variable
bindings) will be saved across re-entrances. More reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

[![example-link](../media/youtube-example-image.png)](https://youtu.be/VBxM08YnzHQ)

```js
// Example 1
const simpleGenerator = function* () {
  console.log("Generators return an iterator")
  yield "First yield"
  console.log("Executed after the first iteration")
  yield "Second yield"
}

const simpleExample = simpleGenerator()
console.log(simpleExample.next())
// Generators return an iterator
// { value: 'First yield', done: false }

// Example 2
// Note this grabs the value of the yield also.
// We could also do this above if we wanted via greeter.next().value
const greet = function* () {
  console.log("Generators are lazy")
  yield "How"
  console.log("I'm not called until the second next is invoked")
  yield "are"
  console.log("Call me before 'you?'")
  yield "you?"
  console.log("Called when done")
}

const greeter = greet()
for (const word of greeter) {
  console.log(word)
}
// Generators are lazy
// How
// I'm not called until the second next is invoked
// are
// Call me before 'you?'
// you?
// Called when done

// Example 3
const injectExample = function* () {
  let yieldVariable = yield "I"
  yieldVariable = yield yieldVariable + "love"
  yield "JavaScript"
}

const phrase = injectExample()
console.log(phrase.next().value) // I
console.log(phrase.next("really ").value) // really love
console.log(phrase.next().value) // JavaScript

// Example 4
const graph = function* () {
  let x = 0
  let y = 0
  while (true) {
    yield { x: x, y: y }
    x += 2
    y += 1
  }
}

const graphGenerator = graph()
console.log(graphGenerator.next().value) // { x: 0, y: 0 }
console.log(graphGenerator.next().value) // { x: 2, y: 1 }
console.log(graphGenerator.next().value) // { x: 4, y: 2 }
```
