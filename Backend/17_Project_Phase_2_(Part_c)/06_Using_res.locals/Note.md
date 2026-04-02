# #Important Link:
**Express res.locals()** [https://expressjs.com/en/5x/api.html#res.locals](https://expressjs.com/en/5x/api.html#res.locals)

# #`server.js` code snippet explained
```js 
const express = require("express"); // Import Express framework
const app = express(); // Create Express app

const userRoutes = require("./routes/user.js"); // Import user routes (router)
const postRoutes = require("./routes/post.js"); // Import post routes (router)

const session = require("express-session"); // Import session middleware
const flash = require("connect-flash"); // Import connect-flash for flash messages
const path = require("path"); // Built-in module to handle file paths

// Set EJS as template engine
app.set("view engine", "ejs");

// Set views folder path safely using path module
app.set("views", path.join(__dirname, "views"));

const port = 3000;

// Session configuration options
const sessionOptions = {
  secret: "MySuperSecretString", // Secret key to sign session ID
  resave: false, // Don't save session if nothing changed
  saveUninitialized: true, // Save new sessions even if empty
};

// Use session middleware
// 👉 Creates session ID, stores data on server, sends cookie to client
app.use(session(sessionOptions));

// Use connect-flash middleware
// 👉 Enables req.flash() to store temporary messages
app.use(flash());

// custom-middleware to make flash messages available in all views
app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success"); // success messages
  res.locals.errorMsg = req.flash("error"); // error messages
  next(); // move to next middleware/route
});

// Route to simulate user registration
app.get("/register", (req, res) => {
  // Get name from query (?name=Pawan), default = "anonymous"
  let { name = "anonymous" } = req.query;

  // Store name in session (server-side storage)
  req.session.name = name;

  // Set flash message based on condition
  if (name === "anonymous") {
    req.flash("error", "user not registered!");
  } else {
    req.flash("success", "user registered successfully!");
  }

  // Redirect to another route (flash works here)
  res.redirect("/hello");
});

// Route to display data
app.get("/hello", (req, res) => {
  // Render EJS page and send session data (name)
  res.render("page.ejs", { name: req.session.name });
});

// Start server
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
```

# ------------------------------------------------------------------------------------------------------

# #2: Using `res.locals` in Express

## 1. What is `res.locals`?

`res.locals` is an object used to:

> Store data that is available only during a single request-response cycle

---

## 2. Why Do We Use It?

To pass data from backend → views (EJS) **without manually sending it every time**

---

## 3. Basic Example

~~~js
app.get("/", (req, res) => {
  res.locals.name = "Pawan";
  res.render("home.ejs");
});
~~~

---

### In EJS

~~~ejs
<h1>Hello <%= name %></h1>
~~~

---

## 4. Key Feature

- Available only for **one request**
- Automatically passed to views

---

## 5. Using with Middleware (Very Important)

~~~js
app.use((req, res, next) => {
  res.locals.currentUser = "Pawan";
  next();
});
~~~

👉 Now available in **all routes + all views**

---

## 6. Common Use Case: Flash Messages

~~~js
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});
~~~

👉 No need to pass manually in every `res.render()`

---

## 7. Example Without `res.locals` ❌

~~~js
res.render("index.ejs", {
  success: req.flash("success"),
  error: req.flash("error")
});
~~~

👉 Repeating again and again ❌

---

## 8. Example With `res.locals` ✅

~~~js
// middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  next();
});

// route
res.render("index.ejs");
~~~

👉 Cleaner & DRY code ✅

---

## 9. Difference: `res.locals` vs `req.session`

| Feature        | res.locals              | req.session           |
|---------------|------------------------|----------------------|
| Lifetime      | One request             | Multiple requests    |
| Storage       | Server (temporary)      | Server (persistent)  |
| Use case      | Pass data to views      | Store user data      |

---

## 10. Real Use Cases

- Flash messages
- Current logged-in user
- Global variables in templates
- Auth status

---

## 11. Flow

~~~text
Request comes
   ↓
Middleware sets res.locals
   ↓
Route renders view
   ↓
View accesses res.locals data
~~~

---

## Summary

- `res.locals` = temporary data for views
- Available only in current request
- Best used with middleware
- Helps write clean & DRY code 🚀