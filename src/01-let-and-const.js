// let is another way to declare variables.
// let is block scoped.

// More reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

function varTest() {
  var x = 1
  if (true) {
    var x = 2 // same variable!
    console.log(x) // 2
  }
  console.log(x) // 2
}

function letTest() {
  let x = 1
  if (true) {
    let x = 2 // different variable
    console.log(x) // 2
  }
  console.log(x) // 1
}

// Uncomment these one at a time to demo
//varTest()
letTest()
