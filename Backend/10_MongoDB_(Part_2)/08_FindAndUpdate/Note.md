## 1. [Model.findOneAndUpdate()](https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate())
Finds the first document matching the filter, updates it, and returns the document.

Syntax:
```js
Model.findOneAndUpdate(filter, update, options)
```
- `filter`: Finds one document using a condition
- `update`: Updates it
- `options`: Can return the updated document

Examples:
```js
User.findOneAndUpdate( { name: "Bruce" }, { age: 42 }, { new: true } )    // now it will return UPDATED document
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
```
### Important Options
```text
{ new: true }    // return updated document
{ new: false }   // return old document (default)
```

---

## 2. [Model.findByIdAndUpdate()](https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate())

Syntax: 
```js
Model.findByIdAndUpdate(id, update, options)
```
- `id`: Finds a document using `_id`
- `update`: Updates it
- `options`: Shortcut for _id updates

Example: 
```js
User.findByIdAndUpdate('69806c3e18393e032e3257d8', { age: 100 }, { new: true })             // updated document using 'id'
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
```
---
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


// ====================== UPDATE & RETURN UPDATED DOCUMENT ======================


// -------- UPDATE BY ID (RETURN UPDATED DOC) --------
User.findByIdAndUpdate(
  "69806c3e18393e032e3257d8",   // document _id
  { age: 100 },                // update
  { new: true }                // return updated document
)
.then((res) => {
  console.log(res);            // updated user
})
.catch((err) => {
  console.log(err);
});


// -------- UPDATE BY CONDITION (RETURN UPDATED DOC) --------
User.findOneAndUpdate(
  { name: "Bruce" },           // find condition
  { age: 42 },                 // update
  { new: true }                // return updated document
)
.then((res) => {
  console.log(res);            // updated user
})
.catch((err) => {
  console.log(err);
});


// -------- UPDATE BY CONDITION (DEFAULT BEHAVIOR) --------
User.findOneAndUpdate(
  { name: "Bruce" },           // find condition
  { age: 35 }                  // update
)                               // returns OLD document by default
.then((res) => {
  console.log(res);            // old user data
})
.catch((err) => {
  console.log(err);
});

```