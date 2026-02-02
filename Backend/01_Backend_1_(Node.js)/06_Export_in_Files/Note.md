## WAY 1: Node.js export system (CommonJS)

Node.js mainly uses CommonJS, not ES export by default.

🔹 module.exports – main export object
File: `math.js`
```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```
File: `app.js`
```js
const add = require('./math');

console.log(add(2, 3)); // 5
```
✔ Now add() is usable in app.js.

## WAY 2: Exporting multiple things
`module.exports`
```js
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = { add, sub };
```
Import
```js
const math = require('./math');

math.add(5, 2);
math.sub(5, 2);
```

## WAY 3: `exports` shortcut (important concept)
```js
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
```

👉 `exports` is just a shortcut reference to `module.exports`.