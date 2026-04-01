# Important Links: 
**flash-connect (package):**[https://www.npmjs.com/package/connect-flash](https://www.npmjs.com/package/connect-flash)

# #Sigma Note
## connect-flash (package)
*The flash is a special area of the sesion used for storing messages. Messages are written to the flash and cleared after being displayed of the user.*

# -----------------------------------------------------------------------------------------------------

# #1: connect-flash – Quick Notes

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

## One-Line Summary
connect-flash is used to pass short-lived messages between requests using session in Express apps.

# -----------------------------------------------------------------------------------------------------

# Using `connect-flash`

## 1. What is `connect-flash`?

`connect-flash` is a middleware used to:

> Store temporary messages in session and show them on next request

---

## 2. Why Do We Need It?

Used for:

- Success messages ✅
- Error messages ❌
- Notifications after redirect

---

## 3. Installation

~~~bash
npm install connect-flash
~~~

---

## 4. Setup (Very Important)

~~~js
const session = require("express-session");
const flash = require("connect-flash");

app.use(session({
  secret: "mysecret",
  resave: false,
  saveUninitialized: true
}));

app.use(flash());
~~~

👉 Flash depends on **sessions**

---

## 5. How Flash Works

~~~text
1. Store message in session
2. Redirect user
3. Message is shown once
4. Message is automatically deleted
~~~

---

## 6. Setting Flash Messages: (Key: message) pair

```js
req.flash("success", "Listing created successfully!");
req.flash("error", "Something went wrong!");
```
here "success" and "error" are `key` and after that there is `flash-massage` defined.

---

## 7. Accessing Flash Messages

~~~js
app.get("/listings", (req, res) => {
  res.render("index.ejs", {
    success: req.flash("success"),
    error: req.flash("error")
  });
});
~~~

---

## 8. Global Middleware (Best Practice)

~~~js
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});
~~~

👉 Now available in ALL views

---

## 9. Using in EJS

~~~ejs
<% if (success.length) { %>
  <p><%= success %></p>
<% } %>

<% if (error.length) { %>
  <p><%= error %></p>
<% } %>
~~~

---

## 10. Example Flow

~~~js
app.post("/listings", (req, res) => {
  req.flash("success", "Listing Created!");
  res.redirect("/listings");
});
~~~

---

~~~text
User submits form
   ↓
Flash message stored
   ↓
Redirect happens
   ↓
Message displayed ONCE
   ↓
Message deleted automatically
~~~

---

## 11. Important Notes ⚠️

- Requires `express-session`
- Messages persist for **one request only**
- Stored in session temporarily

---

## 12. Real Use Cases

- Form submission success
- Login/logout messages
- Error handling

---

## Summary

- `connect-flash` = temporary messages
- Stored in session
- Used after redirects
- Automatically cleared after use 🚀