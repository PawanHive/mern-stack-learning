**Compatible Session Stores:**[https://www.npmjs.com/package/express-session#compatible-session-stores](https://www.npmjs.com/package/express-session#compatible-session-stores)

# -----------------------------------------------------------------------------------------------------

# Session Behavior – Summary

## 🔍 Same Browser → Same Session
- Browser already has cookie:
  ~~~
  connect.sid = abc123
  ~~~
- Cookie is sent with every request

### ✅ Result:
- Server पहचान करता है same user
- Same session ID is reused

---

## 🌐 Different Browser → New Session
- Each browser has separate cookie storage

### ✅ Result:
- Server treats it as a new user
- New session ID is created

---

## ⚡ Important Cases

- **Same browser, new tab** → Same session  
- **Incognito/private mode** → New session  
- **Clear cookies** → New session  
- **Session expires** → New session  

---

## 🔥 Key Concept

Session depends on:
~~~
Browser + connect.sid cookie
~~~

NOT on:
- IP address ❌  
- Device ❌  

# -----------------------------------------------------------------------------------------------------

# #2: `server.js` code snippet explained

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
// 🔐 SESSION MIDDLEWARE
// ==============================

app.use(
  session({
    secret: "MySuperSecretString", // used to sign session ID
    resave: false,                 // don't save session if not modified
    saveUninitialized: true,       // save new sessions even if empty
  })
);

/*
👉 Enables session:
- Creates unique session ID
- Stores it in cookie (connect.sid)
- Allows server to remember user
*/


// ==============================
// 📊 REQUEST COUNT LOGIC
// ==============================

app.get("/reqcount", (req, res) => {
  // If count exists → increase it
  if (req.session.count) {
    req.session.count++;
  } else {
    // First request → initialize count
    req.session.count = 1;
  }

  res.send(`You sent a request ${req.session.count} times`);
});

/*
👉 Counts how many times SAME USER (same session) hits this route
- Stored in req.session (server-side)
- Works because browser sends same connect.sid cookie
*/


// ==============================
// 🚀 START SERVER
// ==============================

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
```

# -----------------------------------------------------------------------------------------------------


# Express Session - Options

## 1. What are Session Options?

Session options are configuration settings used in:

~~~js
app.use(session(options));
~~~

👉 They control how sessions behave

---

## 2. Basic Example

~~~js
const session = require("express-session");

app.use(session({
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}));
~~~

---

## 3. Important Session Options

## `secret` ⭐

~~~js
secret: "mysecretkey"
~~~

- Used to **sign session ID cookie**
- Prevents tampering
- Must be strong and secure

---

## `resave`

~~~js
resave: false
~~~

- If `true` → session saved on every request
- If `false` → saved only when modified

👉 Recommended: `false`

---

## `saveUninitialized`

~~~js
saveUninitialized: false
~~~

- `true` → saves empty sessions
- `false` → saves only when data is added

👉 Recommended: `false`

---

## `name`

~~~js
name: "sessionId"
~~~

- Name of session cookie
- Default: `connect.sid`

---

## `cookie` Object

Used to configure cookie behavior

---

### `cookie.maxAge`

~~~js
cookie: {
  maxAge: 1000 * 60 * 60
}
~~~

- Expiry time (in ms)
- Example: 1 hour

---

### `cookie.httpOnly`

~~~js
httpOnly: true
~~~

- Prevents access via JavaScript
- Protects against XSS

---

### `cookie.secure`

~~~js
secure: true
~~~

- Cookie sent only over HTTPS
- Use in production

---

### `cookie.sameSite`

~~~js
sameSite: "strict"
~~~

Options:
- `"strict"` → only same-site
- `"lax"` → limited sharing
- `"none"` → cross-site allowed (requires secure)

---

## `rolling`

~~~js
rolling: true
~~~

- Resets cookie expiry on every request
- Keeps session alive while user is active

---

## `unset`

~~~js
unset: "destroy"
~~~

- `"destroy"` → deletes session when unset
- `"keep"` → keeps session

---

## 4. Production Setup Example

~~~js
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  name: "sessionId",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: true,
    sameSite: "strict"
  }
}));
~~~

---

## 5. Important Notes ⚠️

- Never expose `secret`
- Use `secure: true` in production
- Use database store (NOT MemoryStore)

---

## Summary

- Session options control behavior
- Most important:
  - `secret`
  - `resave`
  - `saveUninitialized`
  - `cookie`
- Proper config = secure & scalable app 🚀