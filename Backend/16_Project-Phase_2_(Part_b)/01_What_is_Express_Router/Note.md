# Important Link: 
**Express Router:**[https://expressjs.com/en/5x/api.html#router.all](https://expressjs.com/en/5x/api.html#router.all)

# #1: Sigma Note
## Express Router
**Note:**  
Express Routers are a way to organize your Express application such that our primary app.js file does not become bloated.
```js
const router = express.Router() // creates new router object
```

# Express Router

## 1. What is Express Router?

`Express Router` is a **mini application** in Express used to:

> Organize routes into separate files/modules

---

## 2. Why Use Router?

Without router:

- All routes go in one file ❌
- Code becomes messy and hard to manage

With router:

- Split routes into multiple files ✅
- Better structure and scalability

---

## 3. Basic Example (Without Router)

~~~js
const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.send("All users");
});

app.get("/posts", (req, res) => {
  res.send("All posts");
});
~~~

👉 Problem: Everything is in one file

---

## 4. Using Express Router

### Step 1: Create Router File

~~~js
// routes/users.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All users");
});

router.get("/:id", (req, res) => {
  res.send("Single user");
});

module.exports = router;
~~~

---

### Step 2: Use Router in Main App

~~~js
const express = require("express");
const app = express();

const userRoutes = require("./routes/users");

app.use("/users", userRoutes);
~~~

---

## 5. How It Works

~~~text
Request: /users       → router "/"
Request: /users/123   → router "/:id"
~~~

👉 `/users` is the **base path**

---

## 6. Advantages

- 📂 Clean folder structure
- 🔄 Reusable route modules
- 📈 Scalable for large apps
- 🧠 Easy to maintain

---

## 7. Multiple Routers Example

~~~js
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
~~~

---

## 8. Router with Middleware

~~~js
router.use((req, res, next) => {
  console.log("Middleware in router");
  next();
});
~~~

- Runs for all routes in that router

---

## 9. Router Parameters

~~~js
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
~~~

---

## 10. Important Concept

> Router = Modular Routing System

---

## 11. Folder Structure Example

~~~text
project/
│
├── app.js
├── routes/
│   ├── users.js
│   └── posts.js
~~~

---

## Summary

- Express Router helps organize routes
- Keeps code clean and modular
- Use `express.Router()`
- Mount using `app.use()` 🚀