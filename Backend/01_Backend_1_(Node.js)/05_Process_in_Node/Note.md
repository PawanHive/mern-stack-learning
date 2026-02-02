# Process in Node.js

## What is `process` in Node.js?

`process` is a **global object** in Node.js that provides information about, and control over, the currently running Node.js process.

It allows us to:
- Interact with the operating system
- Read command-line arguments
- Access environment variables
- Control how and when the program exits

---

## process.argv

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

---

## Passing Arguments from Terminal

Run this command:

> `node app.js hello bye`  

`hello` & `bye` is additional arguments

Output of `process.argv`:
```js
[
  "D:\\NodeJs\\Main Nodejs File (don't touch)\\node.exe",
  "G:\\SIGMA PRIME\\03-MERN-stack-learning\\Backend\\01_Backend_1_(Node.js)\\05_Process_in_Node\\app.js",
  "hello",
  "bye"
]
```

Arguments passed from terminal start from **index 2**.

---

## Using process.argv in Code

Example: Say **hello** to every name passed from the terminal.

Run command:

> `node app.js mohan sohan suraj sonu monu`

Code:
```js
let args = process.argv;

for (let i = 2; i < args.length; i++) {
    console.log("hello to", args[i]);
}
```
Output:
```bash
hello to mohan  
hello to sohan  
hello to suraj  
hello to sonu  
hello to monu  
```
---

## Why Do We Need `process`?

We use `process` to:

- Get system information
- Read environment variables
- Handle command-line arguments
- Exit the program safely
- Know where our application is running

---

## Important Properties of process

###` process.pid`
Returns the **Process ID** of the Node app  
Used by the OS to track the process

### `process.cwd()`
Returns the **current working directory**  
Depends on where the Node command is executed

### `process.argv`
Returns command-line arguments as an array  
Commonly used in CLI applications

### `process.env`
Stores environment variables  
Used for secrets and configuration  
Example: process.env.NODE_ENV

### `process.platform`
Returns the OS platform  
Examples: win32, linux, darwin

---

## Important Methods of process

### process.exit()
Terminates the Node.js process

Examples:

process.exit(0)  
Indicates successful execution

process.exit(1)  
Indicates an error occurred

---

### process.on(event, callback)
Listens for process-related events

Common events:
- `exit`
- `uncaughtException`

Example:
```js
process.on('exit', () => {
    console.log('Process ended');
});
```
---

## Summary

- `process` is a powerful global object
- `process.argv` is key for CLI tools
- Useful for system info, configs, and debugging
- Essential for real-world Node.js applications

