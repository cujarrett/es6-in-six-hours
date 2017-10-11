// ES6 Template Literals are a cleaner way to inject variables or other
// awesomeness in Strings.

// More reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// Example 1
const favoriteLanguage = "JavaScript"

const phrase = `I love ${favoriteLanguage}`
console.log(phrase) // I love JavaScript

// Example 2
console.log(`I can do expressions inside too: ${14 + 2}`) // I can do expressions inside too: 16

// Example 3
const halfANumber = (numberToHalf) => numberToHalf / 2

const printNumberFacts = (number) => {
  console.log(`Half of ${number} is ${halfANumber(number)}`)
}

printNumberFacts(10) // Half of 10 is 5
