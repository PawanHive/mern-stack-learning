# Passing Multiple Middlewares (Express)

## What does it mean?

In Express, you can attach **multiple middleware functions** to a route.

They run **one after another in sequence**.

Each middleware must call `next()` to pass control to the next middleware.

---

# Basic Syntax

```js
app.get("/route", middleware1, middleware2, middleware3, handler);
```

Flow:

```
Request
  ↓
middleware1
  ↓ next()
middleware2
  ↓ next()
middleware3
  ↓ next()
route handler
  ↓
Response
```

---

# 1️⃣ Example

```js
function m1(req, res, next) {
  console.log("Middleware 1");
  next();
}

function m2(req, res, next) {
  console.log("Middleware 2");
  next();
}

app.get("/home", m1, m2, (req, res) => {
  res.send("Home Page");
});
```

Console output:

```
Middleware 1
Middleware 2
```

---

# 2️⃣ Middleware Array

You can also pass middleware as an array.

```js
const middlewares = [m1, m2];

app.get("/about", middlewares, (req, res) => {
  res.send("About Page");
});
```

Useful when **reusing middleware groups**.

---

# 3️⃣ Real Example (Auth + Logger)

```js
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

function auth(req, res, next) {
  if (req.query.token === "12345") {
    next();
  } else {
    res.send("Access Denied");
  }
}

app.get("/dashboard", logger, auth, (req, res) => {
  res.send("Dashboard");
});
```

Flow:

```
Request
 ↓
Logger
 ↓
Auth Check
 ↓
Route Handler
```

---

# 4️⃣ Stopping Middleware Chain

If a middleware sends a response:

```js
res.send("Error");
```

Then `next()` is **not needed** and execution stops.

Example:

```js
function check(req, res, next) {
  if (!req.query.token) {
    res.send("Token required");
  } else {
    next();
  }
}
```

---

# 5️⃣ Multiple app.use() Middleware

You can also stack middleware globally.

```js
app.use(middleware1);
app.use(middleware2);
```

These run **before every route**.

---

# Important Rules

✔ Middleware runs in the order defined  
✔ Each middleware must call `next()`  
✔ If response is sent, chain stops  
✔ Can pass middleware individually or in array  

---

# Quick Summary

Ways to pass multiple middleware:

```
app.get("/route", m1, m2, m3, handler)
```

or

```
app.get("/route", [m1, m2, m3], handler)
```

Used for:

- Authentication
- Logging
- Validation
- Authorization
