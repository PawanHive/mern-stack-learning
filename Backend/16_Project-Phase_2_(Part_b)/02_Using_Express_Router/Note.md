# #1: `./routes/user.js` code snippet explained

```js
const express = require("express");

// Create a mini Express app (Router)
// 👉 This is NOT the main app, it's a modular route handler ( all below defined route will store in 'router' not 'app' that why we replace 'app' to 'router' you can see in route section)
const router = express.Router();

// ================= USER ROUTES =================

// INDEX ROUTE
// 👉 GET /users
// (because base path "/users" will be added in server.js)
router.get("/", (req, res) => {
  res.send("GET for users");
});

// SHOW ROUTE
// 👉 GET /users/:id
// ":id" is a route parameter (dynamic value)
router.get("/:id", (req, res) => {
  res.send("GET for user id");
});

// CREATE ROUTE
// 👉 POST /users
router.post("/", (req, res) => {
  res.send("POST for users");
});

// DELETE ROUTE
// 👉 DELETE /users/:id
router.delete("/:id", (req, res) => {
  res.send("DELETE for user id");
});

// Export router so it can be used in main app (server.js)
module.exports = router;


/*
================ 🧠 IMPORTANT NOTES =================

1. Why "router" instead of "app"?

👉 In this file, we are NOT using the main Express app.
👉 We are creating a separate module (mini app) using:
   const router = express.Router();

So:
❌ app.get(...)
✅ router.get(...)

-----------------------------------------------------

2. Why no "/users" in routes?

👉 Because "/users" is a COMMON BASE PATH
👉 We DON'T repeat it here

Instead, we define it in server.js:

   app.use("/users", userRoutes);

-----------------------------------------------------

3. How final routes are formed:

Inside this file:
   router.get("/")        → "/"
   router.get("/:id")     → "/:id"

In server.js:
   app.use("/users", userRoutes);

👉 Final routes become:

   GET  /users
   GET  /users/:id
   POST /users
   DELETE /users/:id

-----------------------------------------------------

4. Mental Model (Very Important)

- router = mini app
- server.js = main app
- app.use() = connects mini app to main app

-----------------------------------------------------

5. Flow Example:

Request → GET /users/10

Step 1: server.js sees "/users"
Step 2: forwards request to userRoutes
Step 3: router sees "/10"
Step 4: matches "/:id"

👉 Response sent

=====================================================
*/
```

# #2: `./routes/post.js` code snippet explained

```js
const express = require("express");

// Create a router (mini Express app)
// 👉 Used to handle only post-related routes
const router = express.Router();

// ================= POSTS ROUTES =================

// INDEX ROUTE
// 👉 GET /posts
// ("/posts" will be added from server.js)
router.get("/", (req, res) => {
  res.send("GET for posts");
});

// SHOW ROUTE
// 👉 GET /posts/:id
// ":id" is dynamic (e.g., /posts/5)
router.get("/:id", (req, res) => {
  res.send("GET for post id");
});

// CREATE ROUTE
// 👉 POST /posts
router.post("/", (req, res) => {
  res.send("POST for posts");
});

// DELETE ROUTE
// 👉 DELETE /posts/:id
router.delete("/:id", (req, res) => {
  res.send("DELETE for post id");
});

// Export this router so it can be used in server.js
module.exports = router;

/*
================ 🧠 IMPORTANT NOTES =================

1. Why use router?

👉 We are creating a modular structure
👉 This file only handles "posts" logic
👉 Keeps code clean and scalable

-----------------------------------------------------

2. Why no "/posts" here?

👉 Because base path will defined in server.js:

   app.use("/posts", postRoutes);

So inside this file:
   "/"      → "/posts"
   "/:id"   → "/posts/:id"

-----------------------------------------------------

3. Final Routes (after mounting)

   GET    /posts
   GET    /posts/:id
   POST   /posts
   DELETE /posts/:id

-----------------------------------------------------

4. Flow Example:

Request → GET /posts/7

Step 1: server.js matches "/posts"
Step 2: forwards to postRoutes
Step 3: router matches "/:id"
Step 4: response sent

-----------------------------------------------------


5. Mental Model

- router = mini app for posts
- server.js = main app
- app.use("/posts", postRoutes) = connects them

=====================================================
*/
```

# #3: `server.js` code snippet explained

```js
const express = require("express"); 
// Import Express framework

const app = express(); 
// Create main Express application (this is your main server)

const userRoutes = require("./routes/user.js");  
// Import user router
// 👉 userRoutes === router (exported from user.js)
// 👉 This router contains all user-related routes

const postRoutes = require("./routes/post.js");  
// Import post router (same concept as userRoutes)

const port = 3000; 
// Port number where server will run

// Root route (homepage)
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});
// 👉 When user visits: http://localhost:3000/
// 👉 This response is sent

// ================= ROUTER MIDDLEWARE =================

// Mount userRoutes on "/users"
// 👉 Any request starting with "/users" will go to userRoutes
// 👉 "/users" is a BASE PATH (prefix)
app.use("/users", userRoutes);

// Mount postRoutes on "/posts"
// 👉 Any request starting with "/posts" will go to postRoutes
app.use("/posts", postRoutes);

// ================= HOW IT WORKS =================

// Example:
// If request is: GET /users/5
// 👉 Express sees "/users" → sends request to userRoutes
// 👉 Inside userRoutes, "/5" is matched with "/:id"

// If request is: GET /posts
// 👉 Goes to postRoutes → matches "/" route inside it

// ================= START SERVER =================

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
// 👉 Starts the server on http://localhost:3000
```


# #4: Using Express Router

## 1. Goal

Use Express Router to:

> Split routes into separate files and connect them to the main app

---

## 2. Step-by-Step Usage

## Step 1: Create Router File

~~~js
// routes/users.js

const express = require("express");
const router = express.Router();

// routes
router.get("/", (req, res) => {
  res.send("All Users");
});

router.get("/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

module.exports = router;
~~~

---

## Step 2: Import Router in Main App

~~~js
// app.js

const express = require("express");
const app = express();

const userRoutes = require("./routes/users");

// use router
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running");
});
~~~

---

## 3. How Routing Works

~~~text
Request URL        → Actual Route
-----------------------------------
/users             → router.get("/")
/users/123         → router.get("/:id")
~~~

👉 `/users` is the **base path**

---

## 4. Multiple Routers

~~~js
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
~~~

---

## 5. Using Middleware in Router

~~~js
router.use((req, res, next) => {
  console.log("Router Middleware");
  next();
});
~~~

- Runs for all routes inside that router

---

## 6. Route Prefixing (Very Important)

~~~js
app.use("/api/users", userRoutes);
~~~

Now routes become:

~~~text
/api/users
/api/users/:id
~~~

---

## 7. Using Router for CRUD

~~~js
router.get("/", (req, res) => {
  res.send("GET all users");
});

router.post("/", (req, res) => {
  res.send("CREATE user");
});

router.put("/:id", (req, res) => {
  res.send("UPDATE user");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE user");
});
~~~

---

## 8. Router Parameters

~~~js
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User ${id}`);
});
~~~

---

## 9. Best Practices

- Keep each resource in separate file
  - `users.js`
  - `posts.js`
- Use meaningful base paths
- Keep routes clean and small

---

## 10. Folder Structure

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

- Create router using `express.Router()`
- Define routes inside router file
- Export router
- Use with `app.use(path, router)`
- Helps build scalable apps 🚀