# Important Note: 
**Express req.cookies**:[https://expressjs.com/en/api.html#req.cookies](https://expressjs.com/en/api.html#req.cookies)
# --------------------------------------------------------------------------------------------------

# #1: `server.js` code snippet explained
```js
const express = require("express");
const app = express();
// Main Express app (server)

const userRoutes = require("./routes/user.js"); 
// Import user router

const postRoutes = require("./routes/post.js"); 
// Import post router

const cookieParser = require("cookie-parser");
// Import cookie-parser (used to read cookies)

// Pass a secret key → used to sign cookies
app.use(cookieParser("secretcode"));
// 👉 Now we can use signed cookies (secure cookies)

const port = 3000;

// ================= SIGNED COOKIES =================

// Send a signed cookie
app.get("/setsignedcookie", (req, res) => {
  res.cookie("made-in", "India", { signed: true });
  // 👉 This cookie is encrypted using secret "secretcode"
  // 👉 Cannot be modified easily by user

  res.send("signed cookie sent");
});

// Verify signed cookies
app.get("/verify", (req, res) => {
  console.log(req.cookies);        
  // 👉 Contains ONLY normal (unsigned) cookies

  console.log(req.signedCookies);  
  // 👉 Contains ONLY signed cookies (verified using secret)

  res.send("verified");
});

// ================= NORMAL COOKIES =================

// Send normal cookies
app.get("/setcookies", (req, res) => {
  res.cookie("greet", "namaste"); 
  // 👉 normal cookie

  res.cookie("madeIn", "India");
  // 👉 another normal cookie

  res.send("Sent you some cookies!");
});

// Read cookie (example: name)
app.get("/greet", (req, res) => {
  let { name = "anonymous" } = req.cookies;
  // 👉 If "name" cookie exists → use it
  // 👉 Else → default = "anonymous"

  res.send(`Hi, ${name}`);
});

// ================= ROOT ROUTE =================

app.get("/", (req, res) => {
  console.dir(req.cookies); 
  // 👉 Prints all normal cookies in terminal

  res.send(`Hi, I am root!`);
});

// ================= ROUTER MIDDLEWARE =================

// All "/users" routes handled by userRoutes
app.use("/users", userRoutes);

// All "/posts" routes handled by postRoutes
app.use("/posts", postRoutes);

// ================= START SERVER =================

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
```

# --------------------------------------------------------------------------------------------------

# #2: Signed Cookies in Express

## 1. What is a Signed Cookie?

A **signed cookie** is a cookie that is:

> Protected from tampering using a secret key

👉 It ensures:
- Data is not modified by the user
- Integrity of cookie is maintained

---

## 2. Why Do We Need Signed Cookies?

Normal cookies ❌:
- User can edit them manually in browser

Signed cookies ✅:
- If modified → becomes invalid
- Server can detect tampering

---

## 3. Setup (Very Important)

### Step 1: Install cookie-parser

~~~bash
npm install cookie-parser
~~~

---

### Step 2: Add Secret Key

~~~js
const cookieParser = require("cookie-parser");

app.use(cookieParser("mySecretKey"));
~~~

👉 This secret is used to **sign cookies**

---

## 4. Sending a Signed Cookie

~~~js
res.cookie("token", "abc123", {
  signed: true
});
~~~

---

## 5. Reading a Signed Cookie

~~~js
app.get("/getsigned", (req, res) => {
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});
~~~

👉 Access via:
- `req.signedCookies` ✅
- NOT `req.cookies` ❌

---

## 6. How It Works Internally

~~~text
Server sends:
token=abc123 + signature

Browser stores it

If user modifies value:
→ signature mismatch
→ cookie becomes invalid
~~~

---

## 7. Example Flow

~~~js
// set cookie
res.cookie("user", "Pawan", { signed: true });

// read cookie
app.get("/profile", (req, res) => {
  const user = req.signedCookies.user;

  if (!user) {
    return res.send("Invalid or tampered cookie");
  }

  res.send(`Welcome ${user}`);
});
~~~

---

## 8. Normal vs Signed Cookies

| Feature        | Normal Cookie     | Signed Cookie        |
|---------------|------------------|---------------------|
| Editable      | ✅ Yes            | ❌ No (detectable)  |
| Security      | Low              | Higher              |
| Access        | `req.cookies`    | `req.signedCookies` |

---

## 9. Important Notes ⚠️

- Signed cookies are **NOT encrypted**
- Only protects integrity, not secrecy
- Always use strong secret key
- Combine with:
  - `httpOnly`
  - `secure`

---

## 10. When to Use?

Use signed cookies when:

- Storing sensitive identifiers (userId, token)
- You want to prevent tampering

---

## Summary

- Signed cookies = tamper-proof cookies
- Use `cookie-parser(secret)`
- Send with `{ signed: true }`
- Read using `req.signedCookies`
- Improves security 🚀