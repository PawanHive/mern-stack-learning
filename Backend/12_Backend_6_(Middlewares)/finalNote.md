# Express Middleware — Final Summary Notes

A concise summary of all middleware concepts you asked about.

---

# 1️⃣ What is Middleware?

Middleware is a **function that runs between the request and the response** in an Express application.

It can:

- Read request data
- Modify request/response
- Execute logic
- End response
- Pass control to next middleware

Basic structure:

```js
function middleware(req, res, next) {
  // logic
  next();
}
```

Parameters:

- `req` → request object
- `res` → response object
- `next()` → moves to next middleware

---

# 2️⃣ Middleware Flow

```
Client Request
      ↓
Middleware
      ↓
Middleware
      ↓
Route Handler
      ↓
Response
```

Middleware executes **in the order defined**.

---

# 3️⃣ app.use()

`app.use()` is used to **register middleware globally**.

Example:

```js
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
```

Runs for **every request**.

With path:

```js
app.use("/admin", middleware);
```

Runs only for `/admin` routes.

---

# 4️⃣ Built-in Express Middlewares

Express provides built-in middleware.

### express.json()

Parses JSON request body.

```js
app.use(express.json());
```

### express.urlencoded()

Parses form data.

```js
app.use(express.urlencoded({ extended: true }));
```

### express.static()

Serves static files.

```js
app.use(express.static("public"));
```

---

# 5️⃣ Third-Party Middleware

Installed using npm.

Examples:

| Middleware | Purpose |
|------------|--------|
| morgan | request logging |
| method-override | enable PUT & DELETE in forms |
| cookie-parser | read cookies |
| express-session | manage user sessions |

Example:

```js
app.use(morgan("dev"));
```

---

# 6️⃣ Custom (Utility) Middleware

Reusable middleware created by developers.

Example:

```js
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
```

Used for:

- logging
- authentication
- validation
- request tracking

Best practice:

```
project
 ├── middleware/
 │     └── logger.js
 └── app.js
```

---

# 7️⃣ next() Function

`next()` passes control to the **next middleware**.

Example:

```js
app.use((req, res, next) => {
  console.log("Step 1");
  next();
});
```

If `next()` is not called:

```
Request stops there
```

You can also pass errors:

```js
next(error);
```

---

# 8️⃣ Passing Multiple Middleware

Multiple middleware functions can run on a route.

```js
app.get("/route", m1, m2, m3, handler);
```

Execution flow:

```
m1 → m2 → m3 → route handler
```

Or using array:

```js
app.get("/route", [m1, m2], handler);
```

---

# 9️⃣ API Token Middleware (Query String)

Used to protect APIs.

Example request:

```
/api/data?token=12345
```

Middleware:

```js
function checkToken(req, res, next) {
  if (req.query.token === "12345") {
    next();
  } else {
    res.status(401).send("Access denied");
  }
}
```

Better security methods:

- Authorization header
- Bearer tokens
- JWT

---

# 🔟 Error Handling Middleware

Handles errors in Express.

Special structure:

```js
app.use((err, req, res, next) => {
  res.status(500).send("Server Error");
});
```

Important:

- Must have **4 parameters**
- Should be placed **after routes**

---

# 1️⃣1️⃣ Express Default Error Handler

Express has a built-in error handler.

Triggered when:

- `next(error)` is called
- an error is thrown
- no custom error handler exists

Behavior:

| Environment | Response |
|-------------|----------|
| Development | error + stack trace |
| Production | "Internal Server Error" |

---

# 1️⃣2️⃣ Important Middleware Rules

✔ Middleware runs in order  
✔ Always call `next()` unless sending response  
✔ Middleware can modify `req` and `res`  
✔ Error middleware must have **4 parameters**  
✔ Place error middleware **after routes**  
✔ Keep middleware reusable

---

# Final Middleware Flow

```
Request
  ↓
Global Middleware (app.use)
  ↓
Route Middleware
  ↓
Route Handler
  ↓
Error Middleware (if error occurs)
  ↓
Response
```

---

# Quick One-Line Definition

**Middleware = functions that execute between request and response to process, modify, or control application logic.**