const fetch = require("node-fetch")
const tape = require("tape")

const makeStarWarsApiCall = () => {
  return new Promise((resolve, reject) => {
    const url = "https://resume.mattjarrett.dev"
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const { name } = json.basics
        resolve(name)
      })
      .catch((error) => reject(error))
  })
}

const runTest = (actual) => {
  tape("Resume API Test", (assert) => {
    assert.plan(1)
    const expected = "Matt Jarrett"

    assert.equal(actual, expected, "Expect the resume API to be working")
    assert.end()
  })
}

makeStarWarsApiCall()
  .then((apiResult) => runTest(apiResult))
