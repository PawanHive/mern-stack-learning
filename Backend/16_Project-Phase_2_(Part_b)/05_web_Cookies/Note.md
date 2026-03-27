# #Sigma Note:
**Web Cookies:**  
HTTP cookies are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user's web browser.
#  -----------------------------------------------------------------------------------------------------

# #1: How to View Cookies in Chrome DevTools

## 🧭 Method 1: Using the Application Tab (Recommended)

### Steps:
1. Open your website in Google Chrome  
2. Open DevTools:
   - Press `F12`  
   - OR Right-click → **Inspect**

3. Go to the **Application** tab  
   - If not visible, click `>>` to find it

4. In the left sidebar:
- `Storage` → `Cookies`

5. Click your domain (e.g., `http://localhost:3000`)

### ✅ What you can see:
- Name
- Value
- Domain
- Path
- Expiry
- HttpOnly / Secure flags

### 🔧 Actions you can perform:
- View cookies 👀  
- Edit cookies ✏️  
- Delete cookies ❌  

---

## ⚡ Method 2: Using Console (Quick Method)

1. Open DevTools → **Console** tab  
2. Run:

```js
document.cookie
```
#  -----------------------------------------------------------------------------------------------------

# #2: Web Cookies

## 1. What are Cookies?

Cookies are small pieces of data stored in the browser:

> Sent by the server and stored on the client (browser)

---

## 2. Why Cookies are Used?

Cookies help to:

- Maintain **user sessions**
- Store **login information**
- Remember user preferences (language, theme, etc.)

---

## 3. How Cookies Work

### Step-by-Step Flow

~~~text
1. Client → sends request to server
2. Server → sends response with cookie
3. Browser → stores cookie
4. Next request → browser sends cookie automatically
~~~

---

## 4. Example (Concept)

~~~text
Request:
GET /profile

Response:
Set-Cookie: userId=123
~~~

Next request:

~~~text
GET /dashboard
Cookie: userId=123
~~~

---

## 5. Setting Cookies in Express

~~~js
app.get("/setcookie", (req, res) => {
  res.cookie("name", "Pawan");
  res.send("Cookie set!");
});
~~~

---

## 6. Reading Cookies

Install package:

~~~bash
npm install cookie-parser
~~~

---

### Use it:

~~~js
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/getcookie", (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
});
~~~

---

## 7. Cookie Options

~~~js
res.cookie("token", "abc123", {
  maxAge: 900000,
  httpOnly: true,
  secure: true
});
~~~

---

### Important Options

- `maxAge` → expiry time
- `httpOnly` → prevents access via JS (security)
- `secure` → only sent over HTTPS

---

## 8. Types of Cookies

### 1. Session Cookies
- Deleted when browser closes

### 2. Persistent Cookies
- Stored for a fixed time

---

## 9. Security Concepts ⚠️

- Cookies can be stolen (XSS attack)
- Use:
  - `httpOnly`
  - `secure`
  - `sameSite`

---

## 10. Cookies vs Sessions

| Feature   | Cookies              | Sessions              |
|----------|----------------------|----------------------|
| Storage  | Browser              | Server               |
| Size     | Small (~4KB)         | Large                |
| Security | Less secure          | More secure          |

---

## 11. Real Use Cases

- Login authentication
- Shopping cart
- User tracking

---

## Summary

- Cookies store small data in browser
- Automatically sent with every request
- Used for authentication & state management
- Must be handled securely 🚀