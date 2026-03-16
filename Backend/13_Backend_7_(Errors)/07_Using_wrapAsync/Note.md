# wrapAsync in Express

## What is wrapAsync?

`wrapAsync` is a **helper function used to automatically catch errors in async routes**.

It removes the need to write **try...catch in every route**.

---

# Problem Without wrapAsync

Example:

```js
app.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    next(err);
  }
});
```

Problem:

- Too many `try...catch`
- Repetitive code

---

# wrapAsync Solution

Create a wrapper function.

```js
function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
}
```

Explanation:

```
fn() returns Promise
 ↓
.catch(next)
 ↓
Error passed to middleware
```

---

# Using wrapAsync

Example:

```js
app.get(
  "/users",
  wrapAsync(async (req, res) => {
    const users = await User.find();
    res.send(users);
  })
);
```

Now no need for:

```
try...catch
```

---

# Example with Error

```js
app.get(
  "/data",
  wrapAsync(async (req, res) => {
    throw new Error("Database Failed");
  })
);
```

Flow:

```
Error
 ↓
wrapAsync
 ↓
.catch(next)
 ↓
Error middleware
 ↓
Response
```

---

# Error Middleware

```js
app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).send(message);
});
```

---

# Where to Store wrapAsync

Best practice:

```
utils/
   wrapAsync.js
```

wrapAsync.js

```js
module.exports = function (fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
};
```

Usage:

```js
const wrapAsync = require("./utils/wrapAsync");
```

---

# Full Flow

```
Request
 ↓
Async Route
 ↓
wrapAsync
 ↓
Promise error caught
 ↓
next(error)
 ↓
Error Middleware
 ↓
Response
```

---

# Important Rules

✔ Used only for **async functions**  
✔ Eliminates repeated try-catch  
✔ Passes errors to `next()` automatically  
✔ Makes routes cleaner  

---

# Quick Summary

`wrapAsync`:

- wrapper for async routes
- catches promise errors
- sends them to error middleware
- reduces repetitive try-catch