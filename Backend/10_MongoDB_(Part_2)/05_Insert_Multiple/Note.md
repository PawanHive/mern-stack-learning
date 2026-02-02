## `insertMany()`  
- Inserts **multiple** documents at once 
- Faster than inserting one-by-one
- Common in seed data, bulk uploads
- Returns inserted documents
- Used a lot in real projects


## WAY 1: Async / Await version (Recommended)
```js
await User.insertMany([
  { name: "Adam", email: "adam@gmail.com", age: 48 },
  { name: "Eve", email: "eve@gmail.com", age: 45 }
]);
```

## WAY 2: Exmaple: Promise version 
```js
User.insertMany([
  { name: "Adam", email: "adam@gmail.com", age: 48 },
  { name: "Eve", email: "eve@gmail.com", age: 45 }
])
.then(res => console.log(res))
.catch(err => console.log(err));
```

### Note:

**Mongoose uses Operation Buffering**

Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB.

## `index.js` Code Snippet Explained

```js
// ====================== IMPORT MONGOOSE ======================
const mongoose = require("mongoose");


// ====================== DATABASE CONNECTION ======================
main()
  .then(() => {
    console.log("connection successful"); // confirms DB connection
  })
  .catch((err) => console.log(err)); // handles connection error

async function main() {
  // Connect Node.js app to MongoDB database named "test"
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


// ====================== SCHEMA DEFINITION ======================
const userSchema = new mongoose.Schema({
  name: String,    // user name
  email: String,   // user email
  age: Number,     // user age
});


// ====================== MODEL CREATION ======================
const User = mongoose.model("User", userSchema);
// Model "User" → MongoDB collection "users"


// ====================== INSERT MULTIPLE DOCUMENTS ======================
User.insertMany([
  { name: "Tony", email: "tony@gmail.com", age: 50 },
  { name: "Peter", email: "peter@gmail.com", age: 30 },
  { name: "Bruce", email: "bruce@gmail.com", age: 47 },
])
.then((res) => {
  console.log(res); // inserted documents
});

```