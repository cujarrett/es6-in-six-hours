# Template Literals

### Background
Template Literals are a cleaner way to inject variables or other awesomeness in Strings. More
reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

[![example-link](../media/youtube-example-image.png)](https://youtu.be/sz-BcKGCYxQ)

```js
// Example 1 - Simple
const favoriteLanguage = "JavaScript"

const phrase = `I love ${favoriteLanguage}`
console.log(phrase) // I love JavaScript

// Example 2 - Using expressions
console.log(`I can do expressions inside too: ${14 + 2}`) // I can do expressions inside too: 16

// Example 3 - Calling functions
const halfANumber = (numberToHalf) => numberToHalf / 2

const printNumberFacts = (number) => {
  console.log(`Half of ${number} is ${halfANumber(number)}`)
}

printNumberFacts(10) // Half of 10 is 5

// Example 4 - Multiline use
const multiLineExample = `I can do multiline Strings if needed
without slash n headaches`
console.log(multiLineExample)
// I can do multiline Strings if needed
// without slash n headaches
```
