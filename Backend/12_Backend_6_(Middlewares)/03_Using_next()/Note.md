# next() in Express Middleware

## What is next()?

`next()` is a function used in **Express middleware** to pass control to the **next middleware or route handler**.

If `next()` is not called, the request will **stop there** and the client will not get a response.

Basic structure:

```js
function middleware(req, res, next) {
  // do something
  next();
}
```

---

# Request Flow with next()

```
Client Request
      ↓
Middleware 1
      ↓ next()
Middleware 2
      ↓ next()
Route Handler
      ↓
Response
```

---

# 1️⃣ Basic Example

```js
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});
```

Flow:

```
Request → Middleware → next() → Route → Response
```

---

# 2️⃣ Multiple Middlewares

```js
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});
```

Console output:

```
Middleware 1
Middleware 2
```

---

# 3️⃣ Middleware That Stops Request

If `next()` is not used:

```js
app.use((req, res, next) => {
  console.log("Stopped here");
});
```

The request **never reaches the route**.

Client keeps loading.

---

# 4️⃣ Using next() with Conditions

Example: authentication check.

```js
function checkAuth(req, res, next) {
  if (req.user) {
    next(); // go to route
  } else {
    res.send("Access denied");
  }
}

app.get("/admin", checkAuth, (req, res) => {
  res.send("Admin page");
});
```

---

# 5️⃣ Passing Error to next()

You can pass errors to the error handler.

```js
app.use((req, res, next) => {
  const error = new Error("Something wrong");
  next(error);
});
```

Then Express sends it to error middleware.

---

# 6️⃣ Error Handling Middleware

Error middleware has **4 parameters**.

```js
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("Server Error");
});
```

---

# 7️⃣ Route-Level Middleware

```js
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.get("/about", logger, (req, res) => {
  res.send("About Page");
});
```

---

# Important Rules

✔ Always call `next()` if you want request to continue  
✔ If response is sent → do not call `next()`  
✔ `next(error)` triggers error handler  
✔ Middleware runs in the order defined  

---

# Quick Summary

- `next()` → passes control to next middleware  
- Required to continue request flow  
- Without `next()` request stops  
- `next(error)` → triggers error middleware