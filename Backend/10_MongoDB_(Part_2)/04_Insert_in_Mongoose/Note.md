# #4: INSERT (inserting One)

In Mongoose,**insert one** means **adding a single document** to a MongoDB collection using a model.

Usually in real-world application we use **InsertOne** most frequently rather than **InsertMany**

## WAY 1: Using `new Model()` + `.save()`

Syntax
```js
const doc = new Model(object);

doc.save().then().catch();
```

Example:

```js
const user2 = new User({
  name: "eve",
  email: "eve@yahoo.in",
  age: 48,
});

user2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

```

Output: 
```bash
  {
    _id: ObjectId('69805e03b30ef79419ee0c1e'),
    name: 'eve',
    email: 'eve@yahoo.in',
    age: 48,
    __v: 0
  }
```

**What happens:**

- Creates a document in memory
- `.save()` inserts it into database


### What is `.save()`

`.save()` is a document method used to insert or update a single document in MongoDB.

## `index.js` Code Snippet Explained
```js
// ====================== IMPORT MONGOOSE ======================
const mongoose = require("mongoose");


// ====================== DATABASE CONNECTION ======================
main()
  .then(() => {
    console.log("connection successful"); // runs when DB connection is successful
  })
  .catch((err) => console.log(err)); // runs if connection fails

async function main() {
  // Connect Node.js app to MongoDB database named "test"
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


// ====================== SCHEMA DEFINITION ======================
const userSchema = new mongoose.Schema({
  name: String,   // user name
  email: String,  // user email
  age: Number,    // user age
});


// ====================== MODEL CREATION ======================
const User = mongoose.model("User", userSchema);
// Model "User" → data stored in "users" collection


// ====================== INSERT USER 1 ======================
const user1 = new User({
  name: "Adam",
  email: "adam@yahoo.in",
  age: 48,
});

// Save user1 document to database (async operation)
await user1.save();


// ====================== INSERT USER 2 ======================
const user2 = new User({
  name: "eve",
  email: "eve@yahoo.in",
  age: 48,
});

// Save user2 using Promise (.then / .catch)
user2
  .save()
  .then((res) => {
    console.log(res); // saved document
  })
  .catch((err) => {
    console.log(err); // error if save fails
  });
```