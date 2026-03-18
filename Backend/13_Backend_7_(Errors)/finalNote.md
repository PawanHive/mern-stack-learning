# Backend Error Handling (Express) — Final Summary Notes

Concise summary of all major backend error topics you learned.

---

# 1️⃣ Error Handling Middleware

A special middleware used to **catch and handle errors in Express**.

Structure:

```js
app.use((err, req, res, next) => {
  res.status(500).send("Server Error");
});
```

Important:

- Must have **4 parameters**
- Should be placed **after routes**

Flow:

```
Route Error
 ↓
Error Middleware
 ↓
Response
```

---

# 2️⃣ Custom Error Class

A **custom class extending JavaScript Error** to attach extra properties.

Example:

```js
class ExpressError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}
```

Benefits:

- structured errors
- custom status codes
- reusable across routes

---

# 3️⃣ Default Status & Message

Errors may not always contain `status` or `message`.

So we provide **default values**.

Example:

```js
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});
```

Default values:

```
status → 500
message → "Something went wrong"
```

---

# 4️⃣ Handling Async Errors

Express **does not automatically catch async errors**.

Example problem:

```js
app.get("/", async (req, res) => {
  throw new Error("Database failed");
});
```

Solution:

- try...catch
- wrapper function

---

# 5️⃣ Using try...catch

Used to **catch async errors manually**.

Example:

```js
app.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    next(err);
  }
});
```

Problem:

```
Too many try-catch blocks
```

---

# 6️⃣ Using wrapAsync

A **helper function that catches async errors automatically**.

Example:

```js
function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
}
```

Usage:

```js
app.get(
  "/users",
  wrapAsync(async (req, res) => {
    const users = await User.find();
    res.send(users);
  })
);
```

Benefits:

- cleaner routes
- avoids repetitive try-catch

---

# 7️⃣ Handling Mongoose Errors

Common MongoDB/Mongoose errors:

| Error | Cause |
|------|------|
| ValidationError | schema validation failed |
| CastError | invalid ObjectId |
| MongoServerError | duplicate key |
| DocumentNotFound | document missing |

Example handling:

```js
app.use((err, req, res, next) => {

  if (err.name === "ValidationError") {
    return res.status(400).send(err.message);
  }

  if (err.name === "CastError") {
    return res.status(400).send("Invalid ID");
  }

  res.status(500).send("Server Error");
});
```

---

# 8️⃣ Complete Error Flow

```
Client Request
      ↓
Route Handler
      ↓
Async Operation / Database
      ↓
Error Occurs
      ↓
wrapAsync / try-catch
      ↓
next(error)
      ↓
Error Handling Middleware
      ↓
Response Sent
```

---

# Final Key Rules

✔ Use **error middleware** to centralize errors  
✔ Create **custom error classes** for better structure  
✔ Always set **default status and message**  
✔ Use **wrapAsync** for async routes  
✔ Handle **Mongoose errors properly**  

---

# One-Line Definition

**Backend error handling ensures that application errors are captured, processed, and returned to the client safely without crashing the server.**

---

# # 2: Now learn these basic concept about Error basically (err) object 
# 🧠 Where does `err` come from in Express?

---

## 📌 Core Idea

let { statusCode, message } = err;

👉 The `err` object is **automatically passed by Express** when an error occurs.

But Express only gets it in **two ways**:

---

## 🔴 1. When you `throw` an error

app.get("/user", (req, res) => {
  throw new ExpressError(404, "User not found");
});

### 🧠 What happens internally:

1. You `throw` error  
2. Express catches it  
3. Express **passes it as `err`** to your error middleware  

👉 So inside middleware:

err = new ExpressError(404, "User not found");

---

## 🔵 2. When you call `next(err)`

app.get("/user", (req, res, next) => {
  const err = new ExpressError(500, "Server issue");
  next(err);
});

👉 Here YOU manually send the error to Express

---

## 🔗 Now connect everything

### 📌 Your class:

class ExpressError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

---

### 📌 When you create error:

throw new ExpressError(404, "User not found");

👉 That object looks like:

err = {
  statusCode: 404,
  message: "User not found"
}

---

### 📌 Then in middleware:

app.use((err, req, res, next) => {
  let { statusCode, message } = err;
  res.status(statusCode).send(message);
});

👉 Now it works because:
- err.statusCode → 404  
- err.message → "User not found"  

---

## 🔥 Full Flow (Super Important)

You throw error  
     ↓  
Express catches it  
     ↓  
Express sends it as `err`  
     ↓  
Error middleware receives it  
     ↓  
You extract values from `err`  
     ↓  
Send response  

---

## ⚠️ Important thing beginners miss

If you do this:

throw new Error("Something broke");

👉 Then:

err = {
  message: "Something broke"
}

❌ No `statusCode`

---

### ✅ So you use default:

let { statusCode = 500 } = err;

---

## 🧩 Simple Analogy

- You = person reporting problem  
- ExpressError = structured complaint form  
- Express = delivery system  
- err = complaint reaching manager (middleware)  

---

## ✅ Final Answer (Simple)

👉 Value enters `err` because:

- You create an error using `throw` or `next(err)`  
- Express automatically forwards that error to middleware  
- That error object becomes `err`  

---