Link [mongoose Model.updateOne()](https://mongoosejs.com/docs/api/model.html#Model.updateOne())  

Link [mongoose Model.updateMany()](https://mongoosejs.com/docs/api/model.html#Model.updateMany())

## 1. Model.updateOne()
Updates the first document that matches the filter criteria 

Syntax:
```js
Model.updateOne(filter, update, options)
```
`filter` = difine condition
`update` = define what to update 

Example: 
```js
User.updateOne({ name: "Bruce" }, { age: 49 })
  .then((res) => {
    console.log(res);                                 
  })
  .catch((err) => {
    console.log(err);
  });
```

## 2. `Model.updateMany()` 
Updates all documents that match the filter criteria

Syntax: 
```js
Model.updateMany(filter, update, options)
```
`filter` = difine condition
`update` = define what to update 

Example: 
```js
User.updateMany({ age: { $gt: 48 } }, { age: 55 })
  .then((res) => {
    console.log(res);                                 
  })
  .catch((err) => {
    console.log(err);
  });
```

## Key Differences
- `updateOne()`:   Updates only the first matching document, even if multiple documents match the filter.  
- `updateMany()`:   Updates all documents that match the filter.

## Common Update Operators

`$set`:   Sets field values  
`$inc`:   Increments a number field  
`$push`:   Adds to an array  
`$pull`:   Removes from an array  
`$unset`:   Removes a field  

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
// Model "User" → MongoDB collection "users"


// ====================== UPDATE OPERATIONS ======================

// -------- UPDATE MANY DOCUMENTS --------
User.updateMany(
  { age: { $gt: 48 } },   // filter: users whose age > 48
  { age: 55 }             // update: set age to 55
)
.then((res) => {
  console.log(res);       // metadata (matchedCount, modifiedCount)
})
.catch((err) => {
  console.log(err);
});


// -------- UPDATE ONE DOCUMENT --------
User.updateOne(
  { name: "Bruce" },      // filter: user with name "Bruce"
  { age: 49 }             // update: set age to 49
)
.then((res) => {
  console.log(res);       // metadata only, not updated document
})
.catch((err) => {
  console.log(err);
});

```