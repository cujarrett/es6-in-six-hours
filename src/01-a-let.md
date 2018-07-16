# let

### Background
`let` is another way to declare variables. `let` is block scoped. More reading:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

[![example-link](../media/youtube-example-image.png)](https://youtu.be/zl8ZZZ0z1Ho)

```js
function varTest() {
  var x = 1
  if (true) {
    var x = 2 // same variable!
    console.log("varTest: x = " + x) // 2
  }
  console.log("varTest: x = " + x) // 2
}

function letTest() {
  let x = 1
  if (true) {
    let x = 2 // different variable
    console.log("letTest: x = " + x) // 2
  }
  console.log("letTest: x = " + x) // 1
}

varTest()
letTest()
```
