# ES6 in Six Hours

![logo](./media/es6-in-six-hours-logo.png)

[![Build Status](https://travis-ci.org/matt-jarrett/es6-in-six-hours.svg?branch=master)](https://travis-ci.org/matt-jarrett/es6-in-six-hours)

#### What & Why

> **If you haven’t learned ES6 yet, the time is now. - [Eric Elliott](https://twitter.com/_ericelliott)**

ES6 also know as ECMAScript 6 or ECMAScript 2015 is a fun and interesting addition to JavaScript. There's lots of ways to learn the content, here's my take on the topics. It's meant to have a low barrier of entry and to be consumed in six one hour sessions.

#### ES6 Topics Covered
- [Let](./src/01-a-let.js) and [Const](./src/01-b-const.js)
- [Arrow Functions and Lexical This](./src/02-arrow-functions-and-lexical-this.js)
- [Template Literals](./src/03-template-literals.js)
- [Destructuring](./src/04-destructuring.js)
- [Default](./src/05-a-default.js) + [Rest](./src/05-b-rest.js) + [Spread](./src/05-c-spread.js)
- [Iterators](./src/06-a-iterators.js) + [For..Of](./src/06-b-for-of.js)
- [Generators](./src/07-generators.js)
- [Promises](./src/08-promises.js)

#### Prerequisite
Knowledge of JavaScript (ES5) is recommended.

#### Setup
Setup and use requires
[Git](https://git-scm.com/),
[Node JS](https://nodejs.org/en/),
and a text editor such as
[Brackets](http://brackets.io/).

If you're on a Mac, I'd suggest using
[Homebrew](https://brew.sh/) for installing the
required software listed in Setup.
```
git clone https://github.com/matt-jarrett/es6-in-six-hours.git
cd es6-in-six-hours
npm install
```

#### Running Development Linting and Tests
**Run Linting**
```
npm run lint
```

**Run linting and fix errors**
```
npm run lint-and-fix
```

**Run Tests**
```
npm run test
```

**Run Continuous Integration**

Runs linting and tests
```
npm run ci
```

#### Continued Reading
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [Eric Elliott's How to Learn ES6](https://medium.com/javascript-scene/how-to-learn-es6-47d9a1ac2620)
