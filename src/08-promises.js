const http = require("http")

// ES6 Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// More reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Example 1
let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!")
  }, 3000)
})

myFirstPromise.then((successMessage) => {
  console.log(`Yay! ${successMessage}`)
})
// Yay! Success!

// Example 2
const makeStarWarsApiCall = (resolve, reject) => {
  return new Promise((resolve, reject) => {
    http.get("http://swapi.co/api/films/")
      .on("response", (response) => {
        var body = ""
        response
          .on("data", (chunk) => {
            body += chunk
          })
          .on("end", () => {
            var data = JSON.parse(body)
            resolve(data.results[0].title)
          })
      })
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
// I CAN CONTINUE TO PASS THINGS TO THE NEXT .THEN()
