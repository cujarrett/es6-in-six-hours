const fetch = require("node-fetch")
const tape = require("tape")

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

const runTest = (actual) => {
  tape("Test Star Wars API", (assert) => {
    assert.plan(1)
    const expected = "A New Hope"

    assert.equal(actual, expected, "Expect the Star Wars API to be working")
    assert.end()
  })
}

makeStarWarsApiCall()
  .then((apiResult) => runTest(apiResult))
