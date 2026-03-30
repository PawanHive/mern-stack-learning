
# #`server.js` code snippet explained
```js 
// ==============================
// 📦 IMPORTS & SETUP
// ==============================

const express = require("express");
const app = express();

const userRoutes = require("./routes/user.js"); // imported but not used
const postRoutes = require("./routes/post.js"); // imported but not used

const session = require("express-session"); // session middleware

const port = 3000;


// ==============================
// 🔐 SESSION CONFIG
// ==============================

const sessionOptions = {
  secret: "MySuperSecretString", // signs session ID (security)
  resave: false,                 // don't save session if unchanged
  saveUninitialized: true,       // create session even if empty
};

// Enable session → creates session ID + sends cookie (connect.sid)
app.use(session(sessionOptions));


// ==============================
// 📝 REGISTER ROUTE
// ==============================

app.get("/register", (req, res) => {
  // Get name from query (?name=Pawan), default = "anonymous"
  let { name = "anonymous" } = req.query;

  // Store name in session (server-side)
  req.session.name = name;

  // Redirect to /hello after saving data
  res.redirect("/hello");
});

/*
👉 Flow:
1. Visit: /register?name=Pawan
2. Name stored in session
3. Redirect → /hello
*/


// ==============================
// 👋 HELLO ROUTE
// ==============================

app.get("/hello", (req, res) => {
  // Read name from session and respond
  res.send(`hello, ${req.session.name}`);
});

/*
👉 Uses stored session data
- If session exists → shows name
- If not → undefined
*/


// ==============================
// 🚀 START SERVER
// ==============================

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

/*
👉 Open:
http://localhost:3000/register?name=Pawan

Flow:
- Name saved in session
- Redirected to /hello
- Output: "hello, Pawan"
*/
```

# ----------------------------------------------------------------------------------------------------

# Storing and Using Session Info (Express Session)

## 1. What Does It Mean?

Using sessions means:

> Storing user-specific data on the server and accessing it across requests

---

## 2. Where is Session Data Stored?

- Data → stored on **server**
- Session ID → stored in **browser (cookie)**

---

## 3. Basic Flow

~~~text
User logs in
   ↓
Server stores data in session
   ↓
Session ID sent as cookie
   ↓
Browser sends cookie in future requests
   ↓
Server retrieves session data
~~~

---

## 4. Storing Data in Session

~~~js
app.get("/login", (req, res) => {
  req.session.username = "Pawan";
  req.session.userId = 123;

  res.send("User logged in");
});
~~~

👉 Data is stored in `req.session`

---

## 5. Accessing Session Data

~~~js
app.get("/profile", (req, res) => {
  const user = req.session.username;

  if (!user) {
    return res.send("Not logged in");
  }

  res.send(`Welcome ${user}`);
});
~~~

---

## 6. Updating Session Data

~~~js
app.get("/update", (req, res) => {
  req.session.username = "NewName";
  res.send("Session updated");
});
~~~

---

## 7. Using Session for Authentication

~~~js
app.get("/login", (req, res) => {
  req.session.isLoggedIn = true;
  res.send("Logged in");
});

app.get("/dashboard", (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.send("Access denied");
  }

  res.send("Welcome to dashboard");
});
~~~

---

## 8. Destroying Session (Logout)

~~~js
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("Logged out");
  });
});
~~~

---

## 9. Session Persistence

- Session stays active until:
  - It expires (`maxAge`)
  - Or user logs out

---

## 10. Important Notes ⚠️

- Always check session before giving access
- Do NOT store sensitive data (like passwords)
- Use session for:
  - userId
  - login status

---

## 11. Real Use Cases

- Login system
- Authorization (protected routes)
- Shopping cart
- Flash messages

---

## 12. Visual Flow

~~~text
Login → Store session data
      ↓
Session ID (cookie)
      ↓
Request → Server reads session
      ↓
User recognized ✅
~~~

---

## Summary

- Store data using `req.session`
- Access it in future requests
- Used for authentication & state
- Destroy session on logout 🚀