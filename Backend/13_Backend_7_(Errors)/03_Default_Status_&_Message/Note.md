# Custom Error Class (Express)

## What is a Custom Error Class?

A **Custom Error Class** is a user-defined error that extends JavaScript's built-in `Error` class.

It allows you to attach **extra information** like:

- status code
- error type
- custom message

This makes **error handling cleaner and more structured**.

---

# Why Use Custom Error Class?

Benefits:

- Better error structure
- Attach status codes
- Cleaner middleware handling
- Reusable across routes

---

# 1️⃣ Creating a Custom Error Class

Example:

```js
class ExpressError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}
```

Explanation:

- `extends Error` → inherits JavaScript Error
- `status` → HTTP status code
- `message` → error message

---

# 2️⃣ Throwing Custom Error

Example in route:

```js
app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access Forbidden");
});
```

This creates an error with:

```
status = 403
message = Access Forbidden
```

---

# 3️⃣ Handling Custom Error in Middleware

```js
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;

  res.status(status).send(message);
});
```

Explanation:

- If error has status → use it
- Otherwise → default `500`

---

# 4️⃣ Full Example

```js
const express = require("express");
const app = express();

class ExpressError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access Forbidden");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).send(message);
});

app.listen(3000);
```

---

# 5️⃣ Using next() with Custom Error

Instead of `throw`, you can use `next()`.

```js
app.get("/user", (req, res, next) => {
  next(new ExpressError(404, "User Not Found"));
});
```

Flow:

```
Request
 ↓
Route
 ↓
next(custom error)
 ↓
Error Middleware
 ↓
Response
```

---

# Important Rules

✔ Custom error class extends `Error`  
✔ Add status and message properties  
✔ Throw error in routes  
✔ Handle it in error middleware  

---

# Quick Summary

Custom Error Class:

- extends JavaScript `Error`
- carries status code + message
- used for structured error handling
- handled by Express error middleware