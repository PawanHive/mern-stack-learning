# API Token as Query String (Express Middleware)

## What is an API Token?

An API token is a **secret key used to authenticate API requests**.

It ensures that **only authorized users can access the API**.

Example request:

```
/api/data?token=12345
```

Here:

```
token = API key
```

---

# Why Use API Token?

Used for:

- Protecting APIs
- Allowing only authorized access
- Preventing misuse of endpoints

Common in:

- Public APIs
- Private backend services

---

# 1️⃣ Creating Token Middleware

Example middleware that checks token.

```js
function checkToken(req, res, next) {
  const token = req.query.token;

  if (token === "12345") {
    next();
  } else {
    res.status(401).send("Invalid API Token");
  }
}
```

Explanation:

- `req.query.token` → reads token from URL
- If token matches → continue
- Otherwise → reject request

---

# 2️⃣ Using Middleware in Route

```js
app.get("/api/data", checkToken, (req, res) => {
  res.send("Secret Data");
});
```

Request:

```
/api/data?token=12345
```

Response:

```
Secret Data
```

Without token:

```
Invalid API Token
```

---

# 3️⃣ Example API Request

Browser request:

```
http://localhost:3000/api/data?token=12345
```

Query parameters are stored in:

```
req.query
```

Example:

```js
req.query.token
```

---

# 4️⃣ Protecting Multiple Routes

Apply middleware globally.

```js
app.use("/api", checkToken);
```

Now all routes starting with `/api` require token.

Example:

```
/api/users
/api/products
/api/orders
```

---

# 5️⃣ Example API Server

```js
const express = require("express");
const app = express();

function checkToken(req, res, next) {
  const token = req.query.token;

  if (token === "12345") {
    next();
  } else {
    res.status(401).send("Access Denied");
  }
}

app.get("/api/data", checkToken, (req, res) => {
  res.send("Protected API Data");
});

app.listen(3000);
```

---

# 6️⃣ Security Note ⚠️

Using token in query string is **not very secure** because:

- Token appears in URL
- URLs can be logged
- Browsers store URLs in history

Better alternatives:

- Authorization header
- Bearer tokens
- JWT

Example header:

```
Authorization: Bearer token123
```

---

# Important Rules

✔ Use middleware to validate tokens  
✔ Read token from `req.query`  
✔ Return `401` for unauthorized access  
✔ Protect API routes using middleware  

---

# Quick Summary

- API token → authentication key
- Sent in query string
- Access using `req.query`
- Middleware validates token
- Protects API routes