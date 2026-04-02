# Cookie in Express Session Options

## 1. What is `cookie` in Session?

In `express-session`, the `cookie` option is used to:

> Configure how the session ID cookie behaves in the browser

---

## 2. Important Concept

- Session data → stored on **server**
- Session ID → stored in **cookie (browser)**

👉 `cookie` option controls this session ID cookie

---

## 3. Basic Example

~~~js
app.use(session({
  secret: "mysecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}));
~~~

---

## 4. Important Cookie Options

## `maxAge`

~~~js
cookie: {
  maxAge: 1000 * 60 * 60
}
~~~

- Time before cookie expires (in ms)
- Example: 1 hour

---

## `httpOnly`

~~~js
httpOnly: true
~~~

- Prevents access via JavaScript
- Protects against XSS attacks

---

## `secure`

~~~js
secure: true
~~~

- Cookie sent only over HTTPS
- Use in production

---

## `sameSite`

~~~js
sameSite: "strict"
~~~

Values:
- `"strict"` → only same-site requests
- `"lax"` → limited cross-site
- `"none"` → allow cross-site (requires secure)

---

## `path`

~~~js
path: "/"
~~~

- Defines where cookie is accessible

---

## `expires`

~~~js
expires: new Date(Date.now() + 3600000)
~~~

- Exact expiry date (alternative to `maxAge`)

---

## 5. Example (Full Config)

~~~js
app.use(session({
  secret: "mysecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: false,
    sameSite: "lax"
  }
}));
~~~

---

## 6. Important Notes ⚠️

- `httpOnly: true` → always recommended
- `secure: true` → only works with HTTPS
- Use `sameSite` for CSRF protection
- Do NOT store sensitive data in cookies

---

## 7. Flow

~~~text
User logs in
   ↓
Server creates session
   ↓
Session ID stored in cookie
   ↓
Cookie sent in every request
   ↓
Server identifies user
~~~

---

## 8. Cookie vs Session Data

| Feature        | Cookie (Session ID)   | Session Data         |
|---------------|----------------------|----------------------|
| Storage       | Browser              | Server               |
| Contains      | Session ID           | User data            |
| Size          | Small                | Large                |

---

## Summary

- `cookie` option controls session ID behavior
- Important for security & expiry
- Key options:
  - `maxAge`
  - `httpOnly`
  - `secure`
  - `sameSite`
- Critical for authentication systems 🚀