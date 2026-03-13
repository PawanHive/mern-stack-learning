# #Important Links:
**req.method**: [https://expressjs.com/en/5x/api.html#req.method](https://expressjs.com/en/5x/api.html#req.method)
**req.hostname**: [https://expressjs.com/en/5x/api.html#req.hostname](https://expressjs.com/en/5x/api.html#req.hostname)
**req.path**: [https://expressjs.com/en/5x/api.html#req.path](https://expressjs.com/en/5x/api.html#req.path)


**req.params**: [https://expressjs.com/en/5x/api.html#req.params](https://expressjs.com/en/5x/api.html#req.params)
**req.query**: [https://expressjs.com/en/5x/api.html#req.query](https://expressjs.com/en/5x/api.html#req.query)


# Creating Utility Middleware (Express)

## What is Utility Middleware?

Utility middleware is a **custom reusable middleware** created to perform common tasks.

Purpose:

- Code reuse
- Cleaner routes
- Centralized logic

Examples:
- Logging requests
- Authentication checks
- Validation
- Adding custom data to request

---

# 1️⃣ Basic Utility Middleware

Example: request logger.

```js
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
```

Use it:

```js
app.use(logger);
```

Now it runs for every request.

---

# 2️⃣ Utility Middleware as Separate File

Best practice is to keep middleware in a **separate file**.

Folder structure:

```
project
│
├── middleware
│     └── logger.js
│
├── app.js
```

logger.js

```js
function logger(req, res, next) {
  console.log("Request received");
  next();
}

module.exports = logger;
```

Use in app.js:

```js
const logger = require("./middleware/logger");

app.use(logger);
```

---

# 3️⃣ Middleware for Authentication

Example: checking user login.

```js
function isLoggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send("Please login first");
  }
}
```

Use it:

```js
app.get("/dashboard", isLoggedIn, (req, res) => {
  res.send("Welcome to dashboard");
});
```

---

# 4️⃣ Middleware That Adds Data to Request

Utility middleware can **modify req object**.

Example:

```js
function addTime(req, res, next) {
  req.requestTime = new Date();
  next();
}
```

Use:

```js
app.use(addTime);

app.get("/", (req, res) => {
  res.send(req.requestTime.toString());
});
```

---

# 5️⃣ Validation Middleware

Example: checking required field.

```js
function validateUser(req, res, next) {
  if (!req.body.username) {
    return res.send("Username required");
  }
  next();
}
```

Use:

```js
app.post("/register", validateUser, (req, res) => {
  res.send("User registered");
});
```

---

# 6️⃣ Middleware for Specific Routes

```js
app.use("/admin", adminMiddleware);
```

Runs only for routes starting with:

```
/admin
/admin/users
/admin/settings
```

---

# 7️⃣ Middleware Chain

Multiple utility middleware can run together.

```js
app.get("/profile", logger, isLoggedIn, (req, res) => {
  res.send("Profile page");
});
```

Flow:

```
Request
 ↓
logger
 ↓
isLoggedIn
 ↓
route handler
```

---

# Important Rules

✔ Always call `next()` unless sending response  
✔ Keep middleware reusable  
✔ Store middleware in separate folder  
✔ Middleware can modify req & res  
✔ Order of middleware matters  

---

# Quick Summary

Utility middleware:

- Custom reusable functions
- Used for logging, auth, validation
- Often stored in `middleware/` folder
- Improves code structure
- Used with `app.use()` or route level