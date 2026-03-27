# Important Note:
**Express res.cookie()**:[https://expressjs.com/en/api.html#res.cookie](https://expressjs.com/en/api.html#res.cookie)

# Sending Cookies in Express

## 1. What is "Sending Cookies"?

Sending cookies means:

> Server sends data to the browser using the HTTP response

The browser then:
- Stores the cookie
- Automatically sends it back in future requests

---

## 2. Basic Syntax

~~~js
res.cookie(name, value, options);
~~~

---

## 3. Simple Example

~~~js
app.get("/setcookie", (req, res) => {
  res.cookie("username", "Pawan");
  res.send("Cookie sent!");
});
~~~

👉 Browser stores:
~~~text
username = Pawan
~~~

---

## 4. Sending Multiple Cookies

~~~js
res.cookie("name", "Pawan");
res.cookie("age", 21);
res.send("Multiple cookies sent");
~~~

---

## 5. Cookie with Options

~~~js
res.cookie("token", "abc123", {
  maxAge: 1000 * 60 * 15, // 15 minutes
  httpOnly: true,
  secure: true,
  sameSite: "strict"
});
~~~

---

## 6. Important Options

### `maxAge`
- Time before cookie expires (in ms)

---

### `httpOnly`
- Cannot be accessed via JavaScript
- Protects against XSS attacks

---

### `secure`
- Cookie sent only over HTTPS

---

### `sameSite`
- Controls cross-site requests

Values:
- `"strict"` → only same site
- `"lax"` → limited cross-site
- `"none"` → allow all (needs secure)

---

## 7. Sending JSON Data in Cookie

~~~js
res.cookie("user", {
  id: 1,
  name: "Pawan"
});
~~~

👉 Automatically converted to string

---

## 8. Real Use Case (Login)

~~~js
app.post("/login", (req, res) => {
  const token = "xyz123"; // generated token

  res.cookie("token", token, {
    httpOnly: true
  });

  res.send("Logged in!");
});
~~~

---

## 9. Flow

~~~text
User logs in
   ↓
Server sends cookie (token)
   ↓
Browser stores cookie
   ↓
Browser sends cookie in future requests
   ↓
Server verifies user
~~~

## 10. Clearing Cookies
```js
res.clearCookie("token");
```


---

## Summary
- Use res.cookie() to send cookies
- Stored in browser automatically
- Sent with every request
- Used for auth, sessions, tracking.