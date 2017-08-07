// ES6 Iterators know how to access items from a collection one at a time, while keeping track of its current position within that sequence. In JavaScript an iterator is an object that provides a next() method which returns the next item in the sequence. This method returns an object with two properties: done and value.

// More reading: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

function makeIterator(array) {
  let index = 0

  return {
    next: () => {
      if (index < array.length) {
        return {
          value: array[index++],
          done: false
        }
      } else {
        return { done: true }
      }
    }
  }
}

const myArray = ["yo", "ya"]
const iterator = makeIterator(myArray)
console.log(iterator.next().value) // yo
console.log(iterator.next().value) // ya
console.log(iterator.next().done) // true
