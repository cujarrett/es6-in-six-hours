const fetch = require("node-fetch")

// ES6 Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// More reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Example 1 - Shows why Promises are needed
const printColor = (color) => {
  console.log(color)
}

const slowFunction = () => {
  setTimeout(() => {
    return "Blue"
  }, 3000)
}

const color = slowFunction()
printColor(color) // undefined

// Example 2 - Shows simple Promise
const printAColor = (color) => {
  console.log(color)
}

const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!")
  }, 3000)
})

myFirstPromise
  .then((successMessage) => {
    console.log(`Yay! ${successMessage}`)
    return "Purple"
  })
  .then(printAColor)
// Yay! Success!
// Purple

// Example 3 - Shows Promise branching
const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!")
  }, 3000)
})

mySecondPromise
  .then((successMessage) => {
    console.log(`Yay! ${successMessage}`)
  })

mySecondPromise
  .then((successMessage) => console.log(successMessage.toUpperCase()))
// Yay! Success!
// SUCCESS

// Example 4 - Web service real example
const makeStarWarsApiCall = () => {
  return new Promise((resolve, reject) => {
    const url = "http://swapi.co/api/films/"
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const firstFilmTitle = json.results[0].title
        resolve(firstFilmTitle)
      })
      .catch((error) => reject(error))
  })
}

const printInAllCaps = (whatToPrint) => {
  console.log(whatToPrint.toUpperCase())
}

const apiPromise = makeStarWarsApiCall()

apiPromise
  .then((resolutionMessage) => {
    console.log(resolutionMessage)
    return "I can continue to pass things to the next .then()"
  })
  .then((lastReturnedThing) => printInAllCaps(lastReturnedThing))
  .catch((rejectMessage) => console.log(rejectMessage))
// A New Hope
// I CAN CONTINUE TO PASS THINGS TO THE NEXT .THEN()
