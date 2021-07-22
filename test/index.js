const fetch = require("node-fetch")
const test = require("ava")

test ("Integration - https://resume.mattjarrett.dev", async (assert) => {
  const response = await fetch("https://resume.mattjarrett.dev")
  const data = await response.json()
  assert.is(data.basics.name, "Matt Jarrett")
})
