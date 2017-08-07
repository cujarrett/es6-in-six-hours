const http = require("http")
const tape = require("tape")

const makeStarWarsApiCall = () => {
  return new Promise((resolve, reject) => {
    http.get("http://swapi.co/api/films/")
      .on("response", (response) => {
        let body = ""
        response
          .on("data", (chunk) => {
            body += chunk
          })
          .on("end", () => {
            const data = JSON.parse(body)
            resolve(data.results[0].title)
          })
      })
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
