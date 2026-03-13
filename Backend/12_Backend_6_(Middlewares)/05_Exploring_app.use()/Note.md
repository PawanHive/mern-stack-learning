# app.use() Callback (Express)

## What is app.use()?

`app.use()` is used to **register middleware in an Express application**.

It runs a **callback function for every request** that matches the path.

Basic syntax:

```js
app.use(callback)
```

Example:

```js
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});
```

This middleware runs for **every request**.

---

# 1️⃣ app.use() Basic Example

```js
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
```

Whenever a request comes:

```
GET /
GET /about
GET /users
```

This middleware runs.

---

# 2️⃣ app.use() with Path

You can limit middleware to a specific path.

```js
app.use("/admin", (req, res, next) => {
  console.log("Admin middleware");
  next();
});
```

This runs only for:

```
/admin
/admin/users
/admin/settings
```

---

# 3️⃣ Multiple app.use() Middlewares

```js
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});
```

Execution order:

```
Middleware 1
Middleware 2
Route Handler
```

---

# 4️⃣ Using app.use() with Middleware Function

```js
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.use(logger);
```

Reusable middleware.

---

# 5️⃣ Using app.use() for Static Files

```js
app.use(express.static("public"));
```

Serves files like:

```
public/style.css
public/script.js
```

Access in browser:

```
/style.css
/script.js
```

---

# 6️⃣ Using app.use() for Body Parsing

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

Used to read request body.

---

# 7️⃣ Error Handling with app.use()

Error middleware uses **4 parameters**.

```js
app.use((err, req, res, next) => {
  res.status(500).send("Server Error");
});
```

Express recognizes it as **error handler**.

---

# 8️⃣ Middleware Execution Order

Order matters.

Example:

```js
app.use(middleware1);
app.use(middleware2);
app.get("/", routeHandler);
```

Flow:

```
Request
 ↓
middleware1
 ↓
middleware2
 ↓
routeHandler
```

---

# Important Rules

✔ `app.use()` registers middleware  
✔ Runs in the order defined  
✔ Works for all HTTP methods  
✔ Must call `next()` to continue  
✔ Can limit middleware with path  

---

# Quick Summary

- `app.use()` → adds middleware
- Runs before routes
- Can run globally or for specific path
- Order of middleware matters
- Used for logging, parsing, auth