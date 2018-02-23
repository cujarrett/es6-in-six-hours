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

// Example 4 - quotes inside of a string
// First, let's look at some of the old methods to handle this.
const backslashExcapes = "Sally yelled, \"it's a beautiful day, isn't it!\" to her neighbor."
console.log(backslashExcapes)

const alternatingQuotes = "Joe replied, 'It certainly is!' to Sally."
console.log(alternatingQuotes)

// try stringing together multiple variables into separate lines
const professor = "Professor Smith"
const student = "Sammy"
const multipleLineStrings = "Dear " + student + ", " + "\n" + "Great job on your exam." + "\n" + professor
console.log(multipleLineStrings)

// now lets use template Literals
const tempLitNoEscapes = `Sally yelled, "it's a beautiful day, isnt it?" to her neighbor`
console.log(tempLitNoEscapes)

const tempLitNoAlternating = `Joe replied, 'it certainly is!' to Sally.`
console.log(tempLitNoAlternating)

const tempLitMultiLines = `Dear ${student},
Great job on your exam.
${professor}`
console.log(tempLitMultiLines)

// template literals are awesome!
