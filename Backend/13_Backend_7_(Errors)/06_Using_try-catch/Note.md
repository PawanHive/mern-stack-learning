# Using try...catch in Express (Error Handling)

## Why try...catch is Used

`try...catch` is used to **handle errors inside synchronous or asynchronous code**.

In Express, it helps to:

- catch errors
- prevent server crash
- send error to error middleware

---

# Basic Syntax

```js
try {
  // risky code
} catch (err) {
  // error handling
}
```

---

# Using try...catch in Express Route

Example:

```js
app.get("/data", async (req, res, next) => {
  try {
    throw new Error("Database failed");
  } catch (err) {
    next(err);
  }
});
```

Explanation:

```
Error occurs
 ↓
catch block
 ↓
next(err)
 ↓
Error middleware
```

---

# Example with Database Query

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

If database fails:

```
Error caught
 ↓
next(err)
 ↓
Error middleware
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

# Full Flow

```
Client Request
      ↓
Route
      ↓
try block
      ↓
Error occurs
      ↓
catch block
      ↓
next(err)
      ↓
Error Middleware
      ↓
Response
```

---

# Problem with try...catch

If used everywhere:

- Code becomes repetitive
- Many `try...catch` blocks

Example problem:

```
Route 1 → try-catch
Route 2 → try-catch
Route 3 → try-catch
```

Solution → **async wrapper function**

---

# Important Rules

✔ Use `try...catch` for async code  
✔ Always pass error using `next(err)`  
✔ Do not send response directly inside catch unless needed  
✔ Error middleware handles final response  

---

# Quick Summary

`try...catch` in Express:

- catches runtime errors
- sends error to middleware
- prevents server crash
- often used with async routes