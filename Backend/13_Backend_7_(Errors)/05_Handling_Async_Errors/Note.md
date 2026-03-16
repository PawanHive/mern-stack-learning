# Handling Async Errors (Express)

## Problem with Async Errors

Express **does NOT automatically catch errors in async functions**.

Example:

```js
app.get("/data", async (req, res) => {
  throw new Error("Database Failed");
});
```

Problem:

```
Express may crash
Error middleware may not catch it
```

Because async functions return **Promises**.

---

# Solution 1️⃣ Using next()

wrap error handler in next().

```js
app.get("/data", async (req, res, next) => {
    next(throw new Error("Database Failed"));
  }
});
```

