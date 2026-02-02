Link: [Mongoose Model.find()](https://mongoosejs.com/docs/api/model.html#Model.find())

#  Mongoose Find Methods

This note explains the three most commonly used **read (query) methods** in Mongoose:
- `find()`
- `findOne()`
- `findById()`

---

## 1. `find()`

### 👉 What it does
- Finds **multiple documents**
- **Always returns an array**

### Syntax
> Model.find(filter)

### Example
```js
const users = await User.find({ age: 30 });
```

**When to use**
- Get a **list of data**
- Show all users, products, posts, etc.

---

## 2. `findOne()`

### 👉 What it does
- Finds the **first matching document**
- Returns a **single object**, not an array

### Syntax
> Model.findOne(filter)

### Example
```js
const user = await User.findOne({ email: "adam@gmail.com" });
```  

**When to use**
- Searching by **unique fields** (email, username)
- Login, profile lookup

---

## 3. `findById()` (MOST COMMON)

### 👉 What it does
- Finds a document using its **_id**
- Shortcut method for `_id` search

### Syntax
> Model.findById(id)

### Example
```js
User.findById("65af9c8e2f9a1a001234abcd");
```

**When to use**
- Fetch data by **MongoDB ID**
- Very common in routes (params-based queries)

---

## ⚖️ Quick Summary

| Method | Returns | Best Used For |
|------|--------|--------------|
| `find()` | Array | Multiple records |
| `findOne()` | Object / null | One record by condition |
| `findById()` | Object / null | One record by `_id` |

---

### 🧠 One-line takeaway
**`find()` → many, `findOne()` → one by condition, `findById()` → one by ID**

🧾 Async / Await (Recommended)
```js
const users = await User.find({ age: 30 });
console.log(users);
```

🔗 Promise style
```js
User.find({ age: 30 })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

# #Sigma Prime Note

Model.find()        // return a Query Object (thennable)

**Mongoose Queries are not promise. But they have a .then()**

## `index.js` Code Snippet Explained

```js
// ====================== IMPORT MONGOOSE ======================
const mongoose = require("mongoose");


// ====================== DATABASE CONNECTION ======================
main()
  .then(() => {
    console.log("connection successful"); // DB connected
  })
  .catch((err) => console.log(err));      // connection error

async function main() {
  // Connect to MongoDB database "test"
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


// ====================== SCHEMA DEFINITION ======================
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});


// ====================== MODEL CREATION ======================
const User = mongoose.model("User", userSchema);
// Model "User" → collection "users"


// ====================== FIND BY ID (MOST COMMON) ======================
User.findById("69806c3e18393e032e3257d7")
  .then((res) => {
    console.log(res); // single user document
  })
  .catch((err) => {
    console.log(err);
  });


// ====================== FIND ONE BY _id ======================
User.findOne({ _id: "69806c3e18393e032e3257d9" })
  .then((res) => {
    console.log(res); // one matching document
  })
  .catch((err) => {
    console.log(err);
  });


// ====================== FIND ONE (FIRST MATCH) ======================
User.findOne({ age: { $gt: 47 } })
  .then((res) => {
    console.log(res); // first user whose age > 47
  })
  .catch((err) => {
    console.log(err);
  });


// ====================== FIND ALL DOCUMENTS ======================
User.find({})
  .then((res) => {
    console.log(res); // array of all users
  })
  .catch((err) => {
    console.log(err);
  });


// ====================== FIND WITH CONDITION ======================
User.find({ age: { $gt: 48 } })
  .then((res) => {
    console.log(res[0]);       // first matching user
    console.log(res[0].name);  // name of that user
  })
  .catch((err) => {
    console.log(err);
  });

```