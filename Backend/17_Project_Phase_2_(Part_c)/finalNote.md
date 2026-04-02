# #`express-session` setup
## 1. What is Express Session?

`express-session` is middleware used to:

> Store user session data on the server and track users using a session ID

---

## 2. Why Do We Need Sessions?

HTTP is stateless ❌  
👉 It does NOT remember users

Sessions help to:

- Keep users logged in
- Store user-specific data
- Maintain state across requests

---

## 3. How Sessions Work

~~~text
1. User sends request
2. Server creates session
3. Server sends session ID (cookie)
4. Browser stores session ID
5. Browser sends session ID in next requests
6. Server uses ID to get session data
~~~


```js
const session = require("express-session"); // Import session middleware

// Configuration for session
const sessionOptions = {
  secret: "MySuperSecretKey", 
  resave: false,
  saveUninitialized: true, 
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, 
    maxAge: 7 * 24 * 60 * 60 * 1000, 
    httpOnly: true, 
  }
};

// express-session middleware
app.use(session(sessionOptions));
```

# ------------------------------------------------------------------------------------------------

# #2: Using `connect-flash`

- Used to store **temporary messages** (flash messages) in Express apps  
- Works with **sessions** (requires express-session)

## Key Idea
- Message is stored in one request  
- Available in the **next request only**  
- Automatically **deleted after being read**

## Common Use Cases
- Login success/error messages  
- Form submission feedback  
- Alerts after redirect (CRUD operations)

## Important Points
- Must use with session middleware  
- Works best with **redirect flow**, not direct rendering  
- Messages are stored in **session temporarily**  
- Returns messages as an **array**  
- Requires cookies (since sessions depend on cookies)  
- Not for storing long-term or sensitive data  

## Best Practice
- Pass flash messages to views using middleware  
- Use consistent keys like: success, error  

```js
npm i express-session
npm i connect-flash

const session = require("express-session");
const flash = require("connect-flash");

// configuration for session Options
const sessionOptions = {
  secret: "MySuperSecretKey",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  }
};

// express-session middleware
app.use(session(sessionOptions))

app.use(flash()); // connect-flash middleware

// custom-middleware (flash msg avail to all route/views
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// Using in EJS
<% if (success.length) { %>
  <p><%= success %></p>
<% } %>

<% if (error.length) { %>
  <p><%= error %></p>
<% } %>

// Add actual (key: message) in routes
app.post("/listings", (req, res) => {
  req.flash("success", "Listing Created!");
  res.redirect("/listings");
});

```