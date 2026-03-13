# #Important Links:
**Middlewares Documentation**: [https://expressjs.com/en/5x/api.html#app.use](https://expressjs.com/en/5x/api.html#app.use)

# Express Middlewares (Backend)

## What is Middleware?

Middleware is a **function that runs between request and response** in an Express app.

It has access to:

- `req` → request object  
- `res` → response object  
- `next()` → passes control to next middleware

Basic structure:

```js
function middleware(req, res, next) {
  // do something
  next();
}
```

---

# Middleware Flow

```
Client Request
      ↓
Middleware 1
      ↓
Middleware 2
      ↓
Route Handler
      ↓
Response
```

---

# 1️⃣ Built-in Middlewares

## express.json()

Parses JSON request body.

```js
app.use(express.json());
```

Used for APIs when sending JSON.

Example request:

```json
{
  "name": "John"
}
```

---

## express.urlencoded()

Parses form data.

```js
app.use(express.urlencoded({ extended: true }));
```

Used when submitting HTML forms.

---

## express.static()

Serves static files like:

- CSS
- JS
- Images

```js
app.use(express.static("public"));
```

Now files inside `public/` become accessible.

Example:

```
public/style.css
```

Accessible as:

```
/style.css
```

---

# 2️⃣ Third-Party Middlewares

These come from npm packages.

---

## morgan

Used for **logging HTTP requests**.

Install:

```
npm install morgan
```

Use:

```js
const morgan = require("morgan");

app.use(morgan("dev"));
```

Example log:

```
GET /users 200 12ms
```

---

## method-override

Allows using **PUT & DELETE from forms**.

HTML forms support only:

- GET
- POST

Install:

```
npm install method-override
```

Use:

```js
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
```

Example:

```
/edit?_method=PUT
```

---

## cookie-parser

Reads cookies from request.

Install:

```
npm install cookie-parser
```

Use:

```js
const cookieParser = require("cookie-parser");

app.use(cookieParser());
```

Access cookies:

```js
req.cookies
```

---

## express-session

Creates user sessions.

Install:

```
npm install express-session
```

Use:

```js
const session = require("express-session");

app.use(session({
  secret: "mysupersecret",
  resave: false,
  saveUninitialized: true
}));
```

Access session:

```js
req.session
```

---

# 3️⃣ Custom Middleware

You can create your own middleware.

Example:

```js
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
```

Runs for every request.

---

# 4️⃣ Route Middleware

Middleware applied to specific route.

```js
app.get("/admin", checkAuth, (req, res) => {
  res.send("Admin Page");
});
```

Example middleware:

```js
function checkAuth(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send("Not authorized");
  }
}
```

---

# 5️⃣ Error Handling Middleware

Special middleware for handling errors.

Structure:

```js
app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong");
});
```

Must have **4 parameters**.

---

# Important Rules

✔ Middleware runs in order  
✔ Must call `next()` to continue  
✔ Can modify `req` and `res`  
✔ Can end response early  

---

# Quick Summary

Common Express middlewares:

| Middleware | Purpose |
|------------|--------|
| express.json() | Parse JSON body |
| express.urlencoded() | Parse form data |
| express.static() | Serve static files |
| morgan | HTTP logging |
| method-override | Use PUT/DELETE in forms |
| cookie-parser | Read cookies |
| express-session | Manage sessions |