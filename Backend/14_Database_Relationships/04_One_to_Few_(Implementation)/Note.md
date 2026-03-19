# #Sigma Notes:

## MongoDB Relationships

## #`Approach (One-to-Few): Embedding (Child stored inside Parent)`
**Note:** 
Store the child document inside parent
```js
// Example: User & Addresses (Approach / One-to-Few)

// defining users Schema
const userSchema = new Schema({
  username: String,             
  addresses: [                  // (Child / many-side) - Stored directly inside (parent)
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});
```
### Important to note this: 
**Here:**  
In this appraoch *(One-to-Few)* implemented using **Embedding**  
**means:**  
here `addresses` are embedded directly inside the `user` document.

---

# 2: `user.js` code snippet Explained

```js
// ============================================
// Example: User & Addresses (One-to-Few)
// Approach: Embedding (Child stored inside Parent)
// ============================================

// import mongoose
const mongoose = require("mongoose");

// extract Schema constructor
const { Schema } = mongoose;


// =======================
// DATABASE CONNECTION
// =======================

// calling main function to connect DB
main()
  .then(() => {
    console.log("connection successful"); // runs if DB connects successfully
  })
  .catch((err) => console.log(err)); // handles connection errors

// async function to connect MongoDB
async function main() {
  // connecting to local MongoDB database named 'relationDemo'
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}


// =======================
// SCHEMA DEFINITION
// =======================

// USER SCHEMA → (Parent / One side)
const userSchema = new Schema({
  username: String,  // username of user

  // addresses are embedded directly inside user document
  // this is ONE-TO-FEW relationship (small number of addresses)
  addresses: [
    {
      _id: false,     // disables automatic _id for each address object (cleaner data)
      location: String, // street / house info
      city: String,     // city name
    },
  ],
});


// =======================
// MODEL (COLLECTION)
// =======================

// creating User model → collection: 'users'
const User = mongoose.model("User", userSchema);


// =======================
// ADD USER FUNCTION
// =======================

// function to insert user data into database
const addUsers = async () => {

  // creating new user with initial address
  let user1 = new User({
    username: "Sherlockholmes",

    // adding first address while creating user
    addresses: [
      {
        location: "221B Backer Street", // first address
        city: "London",
      },
    ],
  });

  // pushing another address into same user document
  user1.addresses.push({
    location: "P32 WallStreet", // second address
    city: "London",
  });

  // saving user document (with embedded addresses) to database
  let result = await user1.save();

  // printing saved document
  console.log(result);
};

// calling function
addUsers();
```