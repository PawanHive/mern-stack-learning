# Export in Directories (Node.js)

## What is Export in Directories?

Export in directories means **exporting modules from a folder instead of a single file**.

👉 When you `require()` a directory, Node.js automatically looks for a **special file named `index.js`** inside that directory.

---

## Main Rule (MOST IMPORTANT)

When you write:

`require('./Fruits')`

Node.js looks for files in this order:

`./Fruits/index.js`

So, Node does **NOT** require the folder directly —  
it actually requires the `index.js` file inside that folder.

---

## Default File: `index.js`

- `index.js` is the **ENTRY FILE** of a directory
- Every directory you want to export **must have an `index.js`**
- Inside `index.js`, you should:
  - Import all other files of the directory using `require()`
  - Export them together

This makes your folder behave like a single module.

Exmaple: ` index.js`

```js
const apple = require("./apple")
const banana = require("./banana")
const mango = require("./mango")

let fruits = [apple, banana, mango]

module.exports = fruits;
```
---

## Example Usage: `script.js`

Code:
```js
const info = require("./Fruits");

console.log(info);
```
Output:
```bash
[
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "mango", color: "green" }
]
```
info extracted form files (/apple, /banana, /mango) which is in folder (/Fruits)
---

## Summary

- Node automatically looks for `index.js` inside a folder
- `index.js` acts as the main export file
- Exporting directories improves code organization
- Very important concept for scalable applications

