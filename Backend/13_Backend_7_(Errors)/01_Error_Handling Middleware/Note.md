# #Important Note
**Error Handler in express**: [https://expressjs.com/en/guide/error-handling.html](https://expressjs.com/en/guide/error-handling.html)


# Error Handling Middleware (Express)

## What is Error Handling Middleware?

Error handling middleware is a **special middleware used to catch and handle errors** in an Express application.

It prevents the server from crashing and sends a proper response to the client.

---

# Special Structure

Error middleware has **4 parameters**.

```js
app.use((err, req, res, next) => {
  // error handling logic
});
```

Parameters:

- `err` → error object
- `req` → request object
- `res` → response object
- `next` → next middleware

The **first parameter must be `err`**.

---

# Basic Example

```js
app.get("/error", (req, res) => {
  throw new Error("Something went wrong");
});

app.use((err, req, res, next) => {
  res.status(500).send("Server Error");
});
```

Flow:

```
Request
 ↓
Route throws error
 ↓
Error Middleware
 ↓
Response sent
```

---

# Using next(error)

Instead of throwing, you can pass error using `next()`.

```js
app.get("/error", (req, res, next) => {
  const err = new Error("Database Failed");
  next(err);
});
```

Express automatically sends this to **error middleware**.

---

# Logging Errors

Error middleware is often used for **logging**.

```js
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("Something broke");
});
```

---

# Custom Error Status Code

```js
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send(err.message);
});
```

Example error:

```js
const err = new Error("Not Found");
err.status = 404;
next(err);
```

---

# Important Rule

Error middleware must be **placed after routes**.

Correct order:

```js
app.get("/", routeHandler);

app.use(errorMiddleware);
```

Wrong order:

```
error middleware
routes
```

It will not work.

---

# Multiple Error Middlewares

You can chain them.

Example:

```js
app.use((err, req, res, next) => {
  console.log("Logging error");
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).send("Server Error");
});
```

Flow:

```
Error
 ↓
Logger Middleware
 ↓
Response Middleware
```

---

# Example Full App

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("Crash!");
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(3000);
```

---

# Important Rules

✔ Must have **4 parameters**  
✔ Must be placed **after routes**  
✔ Handles errors sent with `next(error)`  
✔ Prevents application crash  

---

# Quick Summary

Error Handling Middleware:

- catches application errors
- logs errors
- sends proper response
- prevents server crash