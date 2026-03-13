# #Important link:
**Express (Default) Error Handling Guide**: [https://expressjs.com/en/guide/error-handling.html](https://expressjs.com/en/guide/error-handling.html)

# Express Default Error Handler

## What is the Default Error Handler?

Express has a **built-in error handling middleware**.

If an error occurs and you **don't create your own error handler**, Express automatically handles it.

It will:

- Set status code
- Send error message
- Show stack trace (in development)

---

# When Default Error Handler Runs

It runs when:

- `next(error)` is called
- An error is thrown inside a route
- No custom error middleware exists

Example:

```js
app.get("/", (req, res) => {
  throw new Error("Something went wrong");
});
```

Express catches this and sends an error response.

---

# Example Using next(error)

```js
app.get("/error", (req, res, next) => {
  const err = new Error("Something failed");
  next(err);
});
```

Flow:

```
Request
 ↓
Route
 ↓
next(error)
 ↓
Express Default Error Handler
 ↓
Response sent
```

---

# Default Response Behavior

If an error occurs:

Express automatically sends:

```
Status Code → 500
Message → Error message
Stack trace → (only in development)
```

Example response:

```
Error: Something failed
```

---

# Production Behavior

When `NODE_ENV = production`:

Express **hides stack traces**.

Response becomes:

```
Internal Server Error
```

This protects sensitive information.

---

# Creating Custom Error Middleware

You can override the default error handler.

Error middleware must have **4 parameters**.

```js
app.use((err, req, res, next) => {
  res.status(500).send("Custom Error Message");
});
```

Now Express will use this instead.

---

# Example Custom Error Handler

```js
app.get("/error", (req, res, next) => {
  next(new Error("Something broke"));
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("Something went wrong!");
});
```

---

# Important Rules

✔ Error middleware has **4 parameters**  
✔ Must be placed **after routes**  
✔ `next(error)` triggers error handler  
✔ If no custom handler → Express uses default one  

---

# Quick Summary

- Express has built-in error handler
- Triggered by `next(error)` or thrown errors
- Sends status `500`
- Shows stack trace in development
- Can be replaced with custom error middleware