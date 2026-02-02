# #1: What is node.js
**Node.js** is a JavaScript runtime built on Chrome’s 
V8 engine that allows us to run JavaScript outside the browser.

Node ≠ framework, library or language  
Node = **runtime environment**

# #2: Node Installation

Check if already exist
```bash
node -v
```

For Windows Users: https://nodejs.org/en/download

# #3: Node-REPL

1. `Read` → reads your input  
2. `Evaluate` → executes the JavaScript  
3. `Print` → shows the result  
4. `Loop` → waits for the next input` 

## Important REPL Commands

REPL commands always start with a dot (`.`).

`node`  
Starts the Node REPL

`.exit`  
Exits the REPL

`Ctrl + C (twice)`  
Force exit from REPL

`.clear ` 
Clears the REPL screen

`.help ` 
Shows all available REPL commands

`.load index.js`  
Loads a file into REPL  
(Runs the file line by line inside the REPL)

`.save repl.js`  
Saves the current REPL session  
(Saves everything you typed)

# #4: How to run node files

Example: file `app.js`

Run it using:
```bash
node app.js
```

# #5: Process in Node.js
`process` is a **global object** in Node.js that provides information about, and control over, the currently running Node.js process.

## Why Do We Need `process`?

We use `process` to:

- Get system information
- Read environment variables
- Handle command-line arguments
- Exit the program safely
- Know where our application is running

## 1. process.argv

`process.argv` returns an **array** containing the command-line arguments passed when the Node.js process was launched.

### Basic Example

If you run this in your file:
```js
console.log(process.argv)
```
And execute:
```bash
node app.js
```
Output will be:
```bash
[
  "D:\\NodeJs\\Main Nodejs File (don't touch)\\node.exe",
  "G:\\SIGMA PRIME\\03-MERN-stack-learning\\Backend\\01_Backend_1_(Node.js)\\05_Process_in_Node\\app.js"
]
```

Explanation:
- Index 0 → Path of Node executable
- Index 1 → Path of the running JavaScript file


## 2. Important Properties of process

### 1. ` process.pid`
Returns the **Process ID** of the Node app  
Used by the OS to track the process

### 2. `process.cwd()`
Returns the **current working directory**  
Depends on where the Node command is executed

### 3 `process.argv`
Returns command-line arguments as an array  
Commonly used in CLI applications

### 4. `process.env`
Stores environment variables  
Used for secrets and configuration  
Example: process.env.NODE_ENV

### 5. `process.platform`
Returns the OS platform  
Examples: win32, linux, darwin


## 3. Important Methods of process

### 1. process.exit()
Terminates the Node.js process

Examples:

1. `process.exit(0)`  
Indicates successful execution

2. `process.exit(1) ` 
Indicates an error occurred


# #6: Export in Files

## WAY 1: Node.js export system (CommonJS)

Node.js mainly uses CommonJS, not ES export by default.

module.exports – main export object
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

# #7: Export in Directories

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

# #8: What is npm

NPM **(Node Package Manager)**
- npm is the standard package manager for Node.js

npm (Node Package Manager) is a tool used to install, manage, and share packages (libraries) for Node.js projects.


# #9: What is package.json

# package.json (Node.js)

## What is `package.json`?

The `package.json` file contains **descriptive and functional metadata** about a Node.js project, such as:

- Project name
- Version
- Description
- Entry file
- Author
- License
- Dependencies

It helps npm understand **how your project works and what it needs**.

---

## Creating `package.json`

### Method 1: Interactive Way

Run this command in your project folder:

> npm init

npm will ask you questions like:

- Project name
- Version
- Description
- Entry file
- Author
- License

After answering all questions, `package.json` is created ✅

---

### Method 2: Quick Method (Recommended)

Run:
> npm init -y

What this does:

- Instantly creates `package.json`
- Uses default values
- Best for learning and practice

---

## Installing `node_modules` Using `package.json`

### Requirements

- Node.js installed
- `package.json` present in the project folder


### Steps

1️⃣ Open terminal in the project folder  
2️⃣ Run:
> npm install


### What `npm install` Does

- Reads `package.json`
- Reads `package-lock.json` (if available)
- Downloads all required dependencies
- Creates the `node_modules` folder


## Summary

- `package.json` is the heart of a Node.js project
- It stores project info and dependencies
- `npm init` creates it interactively
- `npm init -y` creates it instantly
- `npm install` installs all required packages

# #10: import modules

### 1. Use Only ONE Module System Per File

You should use **only one module system** in a single file:

- ES Modules → import / export (recommended)
- CommonJS → require() / module.exports

❌ Never mix both in the same file.

---

### 2. Prefer ES Modules

- ES Modules (`import` / `export`) are the **modern standard**

### 3. Using `import` in Node.js

To use ES Modules in Node.js, you must:

1️⃣ Create a `package.json` file  
(using `npm init -y` or manually)

2️⃣ Add this line inside `package.json`:
```json
{
"type": "module"
}
```
This tells Node.js to treat `.js` files as ES Modules.

---

### 4. Using `import` in the Browser

In HTML, enable modules like this:

Use `<script type="module">`

Without this, `import` will not work in the browser.

---

### 5. Always Use File Extensions

When importing local files, **always include the file extension**:

Correct example:
```js
import { sum } from "./math.js"
```
❌ Incorrect:
```js
import { sum } from "./math"
```
---

### 6. Do NOT Mix import and require()

- `import` → ES Modules
- `require()` → CommonJS

Using both together in one file will cause errors.

---

## Example

Importing from a local file:
```js
import { sum, PI } from "./math.js";

console.log(sum(1, 2));
```
---

## Summary

- Use one module system per file
- Prefer ES Modules for modern projects
- Add `"type": "module"` in package.json for Node.js
- Use `<script type="module">` in browser
- Always include file extensions
- Never mix import and require

