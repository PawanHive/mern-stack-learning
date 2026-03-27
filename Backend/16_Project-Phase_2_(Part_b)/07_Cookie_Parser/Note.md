# #1: `server.js1` code snippet explained
```js
const express = require("express");
const app = express();
// Main Express app (your server)

const userRoutes = require("./routes/user.js"); 
// Import user router (mini app for /users routes)

const postRoutes = require("./routes/post.js"); 
// Import post router (mini app for /posts routes)

const cookieParser = require("cookie-parser");
// Import cookie-parser (helps read cookies from browser)

app.use(cookieParser());
// Middleware → converts cookies into usable object (req.cookies)

const port = 3000;

// ================= SET COOKIES =================

// This route sends cookies to browser
app.get("/setcookies", (req, res) => {
  res.cookie("greet", "namaste"); 
  // Sets cookie → name: greet, value: namaste

  res.cookie("madeIn", "India");
  // Sets another cookie

  res.send("Sent you some cookies!");
});

// ================= READ COOKIES =================

// This route reads cookies
app.get("/greet", (req, res) => {
  // Destructuring cookie
  // If "name" cookie not found → default = "anonymous"
  let { name = "anonymous" } = req.cookies;

  res.send(`Hi, ${name}`);
});

// ================= ROOT ROUTE =================

app.get("/", (req, res) => {
  console.dir(req.cookies);
  // Logs all cookies in terminal (object form)

  res.send(`Hi, I am root!`);
});

// ================= ROUTER MIDDLEWARE =================

// All routes starting with "/users" go to userRoutes
app.use("/users", userRoutes);

// All routes starting with "/posts" go to postRoutes
app.use("/posts", postRoutes);

// ================= START SERVER =================

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
```

# #2: Cookie Parser in Express

## 1. What is `cookie-parser`?

`cookie-parser` is a middleware used to:

> Read (parse) cookies sent by the browser

---

## 2. Why Do We Need It?

When browser sends cookies:

~~~text
Cookie: username=Pawan; token=abc123
~~~

👉 Express cannot read this directly ❌  

👉 `cookie-parser` converts it into:

~~~js
req.cookies = {
  username: "Pawan",
  token: "abc123"
};
~~~

---

## 3. Installation

~~~bash
npm install cookie-parser
~~~

---

## 4. Setup

~~~js
const cookieParser = require("cookie-parser");

app.use(cookieParser());
~~~

---

## 5. Reading Cookies

~~~js
app.get("/getcookie", (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
});
~~~

---

## 6. Signed Cookies (Important 🔐)

### What are Signed Cookies?

> Cookies that are tamper-proof (cannot be modified by user)

---

### Setup with Secret

~~~js
app.use(cookieParser("secretKey"));
~~~

---

### Sending Signed Cookie

~~~js
res.cookie("token", "abc123", { signed: true });
~~~

---

### Reading Signed Cookie

~~~js
app.get("/getsigned", (req, res) => {
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});
~~~

---

## 7. Normal vs Signed Cookies

| Feature        | Normal Cookie     | Signed Cookie        |
|---------------|------------------|---------------------|
| Security      | Low              | Higher              |
| Tamper-proof  | ❌ No             | ✅ Yes              |
| Access        | `req.cookies`    | `req.signedCookies` |

---

## 8. How It Works Internally

~~~text
Browser → sends cookie string
        ↓
cookie-parser parses it
        ↓
Available in req.cookies
~~~

---

## 9. Real Use Case

~~~js
app.get("/profile", (req, res) => {
  const user = req.cookies.username;

  if (!user) {
    return res.send("Not logged in");
  }

  res.send(`Welcome ${user}`);
});
~~~

---

## 10. Important Notes ⚠️

- Must use `app.use(cookieParser())` before routes
- Signed cookies need a **secret key**
- Works only for cookies sent by browser

---

## Summary

- `cookie-parser` reads cookies from request
- Converts them into `req.cookies`
- Supports signed cookies for security
- Essential for authentication systems 🚀