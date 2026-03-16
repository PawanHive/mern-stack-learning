# index.js code explanation:
```js


// ---------------- MIDDLEWARE ----------------

// Serve static files like CSS from public folder
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

// Middleware to allow PUT and DELETE methods from forms
// Example: /chats/123?_method=PUT
app.use(methodOverride("_method"));

// CREATE ROUTE → Save new chat in DB
app.post(
  "/chats",
  wrapAsync(async (req, res) => {

    // Destructure form data
    let { from, to, msg } = req.body;

    // Create new chat object
    let newChat = new Chat({
      from,
      to,
      msg,
      created_at: new Date(),
    });

    // Save chat in database
    await newChat.save();

    // Redirect to index page
    res.redirect("/chats");
  })
);


// ---------------- ASYNC ERROR WRAPPER ----------------

// Express does NOT automatically catch async errors
// So this function wraps async routes and sends errors to next()

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// ---------------- ERROR HANDLING ----------------


// Function to handle mongoose validation errors
// Example: required field missing, invalid value etc.

const handleValidationErr = (err) => {

  console.log("This was a Validation error, Please follow rules");

  // Print actual mongoose error message
  console.dir(err.message);

  // Return modified error
  return err;
};

// ERROR TYPE DETECTION MIDDLEWARE
// This middleware runs BEFORE final error handler
// It checks error type and modifies it if needed

app.use((err, req, res, next) => {

  // Print error name (ValidationError, CastError, etc.)
  console.log(err.name);

  // If error is mongoose validation error
  if (err.name === "ValidationError") {
    err = handleValidationErr(err);
  }

  // Pass error to next error handling middleware
  next(err);
});



// FINAL ERROR HANDLER
// This middleware sends response to client

app.use((err, req, res, next) => {

  // Destructure status & message from error object
  // If not provided → default values
  let { status = 500, message = "Some Error Occured" } = err;

  // Send HTTP status + message
  res.status(status).send(message);
});



// ---------------- SERVER ----------------

// Start express server
app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
```
----------------------------------------------------------------------------------------------------------

# Handling Mongoose Errors with Express Middleware

## What are Mongoose Errors?

When working with MongoDB using **Mongoose**, errors can occur during:

- database connection
- schema validation
- invalid object IDs
- duplicate data
- query failures

These errors should be **handled using Express error middleware**.

---

# Common Mongoose Errors

| Error Type | Cause |
|-------------|------|
| ValidationError | Schema validation failed |
| CastError | Invalid MongoDB ObjectId |
| MongoServerError | Duplicate key error |
| DocumentNotFoundError | Document not found |

---

# 1️⃣ ValidationError

Occurs when data **does not match schema rules**.

Example Schema:

```js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
```

If `name` is missing:

```
ValidationError occurs
```

Handling in middleware:

```js
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).send(err.message);
  }
  next(err);
});
```

---

# 2️⃣ CastError (Invalid ID)

Occurs when an **invalid ObjectId** is used.

Example:

```
/users/123
```

But MongoDB expects:

```
ObjectId
```

Error handling:

```js
app.use((err, req, res, next) => {
  if (err.name === "CastError") {
    return res.status(400).send("Invalid ID");
  }
  next(err);
});
```

---

# 3️⃣ Duplicate Key Error

Occurs when a **unique field already exists**.

Example schema:

```js
email: {
  type: String,
  unique: true
}
```

If same email inserted again:

```
MongoServerError (code 11000)
```

Handling:

```js
app.use((err, req, res, next) => {
  if (err.code === 11000) {
    return res.status(400).send("Duplicate field value");
  }
  next(err);
});
```

---

# 4️⃣ Document Not Found

Occurs when a query returns **null**.

Example:

```js
const user = await User.findById(id);

if (!user) {
  throw new Error("User not found");
}
```

Handled in error middleware.

---

# Example Error Middleware

```js
app.use((err, req, res, next) => {

  if (err.name === "ValidationError") {
    return res.status(400).send(err.message);
  }

  if (err.name === "CastError") {
    return res.status(400).send("Invalid ID");
  }

  if (err.code === 11000) {
    return res.status(400).send("Duplicate value error");
  }

  res.status(500).send("Server Error");
});
```

---

# Best Practice

Use:

- **wrapAsync for async routes**
- **Custom Error Class**
- **Error middleware**

Flow:

```
Route
 ↓
Mongoose query
 ↓
Error occurs
 ↓
wrapAsync
 ↓
next(error)
 ↓
Error Middleware
 ↓
Response
```

---

# Important Rules

✔ Always validate database input  
✔ Handle common Mongoose errors  
✔ Use error middleware for centralized handling  
✔ Return proper HTTP status codes  

---

# Quick Summary

Mongoose errors handled in Express middleware:

- ValidationError → bad input data
- CastError → invalid ObjectId
- MongoServerError → duplicate value
- DocumentNotFound → missing document