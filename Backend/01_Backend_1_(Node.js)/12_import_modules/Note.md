# JavaScript Modules – Import

## Important Notes

### 1. Use Only ONE Module System Per File

You should use **only one module system** in a single file:

- ES Modules → import / export (recommended)
- CommonJS → require() / module.exports

❌ Never mix both in the same file.

---

### 2. Prefer ES Modules

- ES Modules (`import` / `export`) are the **modern standard**
- Recommended for:
  - Modern JavaScript
  - MERN stack projects
  - Frontend + backend consistency

---

### 3. Using `import` in Node.js

To use ES Modules in Node.js, you must:

1️⃣ Create a `package.json` file  
(using `npm init -y` or manually)

2️⃣ Add this line inside `package.json`:

`"type": "module"`

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

