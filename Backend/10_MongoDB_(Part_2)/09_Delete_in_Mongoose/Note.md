# Mongoose Delete Methods

- `deleteOne()`
- `deleteMany()`
- `findByIdAndDelete()`
- `findOneAndDelete()`

---

## 1. [deleteOne()](https://mongoosejs.com/docs/api/model.html#Model.deleteOne())

### 👉 What it does
- Deletes **only ONE matching document**
- Even if multiple match → deletes **first match only**
- Does **NOT** return deleted document

### Syntax
```js
Model.deleteOne(filter)
```

### Example
```js
User.deleteOne({ name: "Bruce" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
```

### Return Value
```bash
{ acknowledged: true, deletedCount: 1 }
```
---

## 2. [deleteMany()](https://mongoosejs.com/docs/api/model.html#Model.deleteMany())

### 👉 What it does
- Deletes **ALL matching documents**
- Dangerous if filter is wrong ⚠️
- Does **NOT** return deleted documents

### Syntax
```js
Model.deleteMany(filter)
```

### Example
```js
User.deleteMany({ age: 48})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
```
### Return Value
```bash
{ acknowledged: true, deletedCount: 5 }
```
---

## 3. [findByIdAndDelete()](https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete())

### 👉 What it does
- Finds document by **_id**
- Deletes it
- Returns the **deleted document**

### Syntax
```js
Model.findByIdAndDelete(id)
```

### Example
```js
User.findByIdAndDelete('69806c3e18393e032e3257d8')
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});
```

### Return Value
```bash
{ … }   // deleted document  
null    // not found
```

---

## 4. [findOneAndDelete()](https://mongoosejs.com/docs/api/model.html#Model.findOneAndDelete())

### 👉 What it does
- Finds **one document by condition**
- Deletes it
- Returns the **deleted document**

### Syntax
```js
Model.findOneAndDelete(filter)
```

### Example
```js
User.findOneAndDelete({ name: "John" })
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});
```

## `index.js` Code Snippet Explained

```js
// ====================== IMPORT MONGOOSE ======================
const mongoose = require("mongoose");


// ====================== DATABASE CONNECTION ======================
main()
  .then(() => {
    console.log("connection successful"); // confirms DB connection
  })
  .catch((err) => console.log(err));      // handles connection error

async function main() {
  // Connect Node.js app to MongoDB database "test"
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


// ====================== DELETE & RETURN DELETED DOCUMENT ======================


// -------- DELETE ONE BY CONDITION --------
User.findOneAndDelete({ name: "John" })   // finds one matching user and deletes it
  .then((res) => {
    console.log(res);                     // deleted document
  })
  .catch((err) => {
    console.log(err);
  });


// -------- DELETE ONE BY ID --------
User.findByIdAndDelete("69806c3e18393e032e3257d8") // delete using _id
  .then((res) => {
    console.log(res);                              // deleted document
  })
  .catch((err) => {
    console.log(err);
  });


// ====================== DELETE (NO DOCUMENT RETURNED) ======================


// -------- DELETE MANY DOCUMENTS --------
User.deleteMany({ age: 48 })               // deletes all users with age = 48
  .then((res) => {
    console.log(res);                      // metadata (deletedCount)
  })
  .catch((err) => {
    console.log(err);
  });


// -------- DELETE ONE DOCUMENT --------
User.deleteOne({ name: "Bruce" })           // deletes first matching user
  .then((res) => {
    console.log(res);                      // metadata only
  })
  .catch((err) => {
    console.log(err);
  });

```