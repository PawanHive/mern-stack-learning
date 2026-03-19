# #Sigma Note

## Mongo Relationships

### #`Approach (One-to-Squillions): Referencing (Child stores Parent ID)`
**Note:**  
 Store a reference(ObjectId) of the parent document inside child

 ```js
// Example: User & their Posts (Approach / One-to-Squillion)

// defines user Schema (Parent)-(One)
const userSchema = new Schema({
  username: String,
  email: String,
});

// defines post Schema (Child)-(Many)   **Note: Reference stored in here(child)
const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {                                             // Note: reference stored in (Child)
    type: Schema.Types.ObjectId,                      // (_id) reference
    ref: "User",                                      // means refering to "User" collection
  },
});

 ```
 ### Important to note this:
 **Here:**  
In this approach *(One-to-Squillion)*, things are totally opposite **Reference(ObjectId) stored inside (Child)** document  
**where as**  
In Approach *(One-to-Many)* **Reference(ObjectId) stored inside (Parent)** document

# 2: `posts.js` code snippet Explained

```js
// ============================================
// Example: User & their Posts (One-to-Squillions)
// Approach: Referencing (Child stores Parent ID)
// ============================================

// import mongoose
const mongoose = require("mongoose");

// extract Schema constructor
const { Schema } = mongoose;


// =======================
// DATABASE CONNECTION
// =======================

// connect to MongoDB
main()
  .then(() => {
    console.log("connection successful"); // runs when DB connects
  })
  .catch((err) => console.log(err)); // handles errors

async function main() {
  // connecting to local database 'relationDemo'
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}


// =======================
// SCHEMA DEFINITIONS
// =======================

// USER SCHEMA → (Parent / One side)
const userSchema = new Schema({
  username: String, // username
  email: String,    // email
});


// POST SCHEMA → (Child / Many side)
const postSchema = new Schema({
  content: String, // post content
  likes: Number,   // number of likes

  // `user` object will store references (ObjectIds) of `User` document
  user: {
    type: Schema.Types.ObjectId, // stores User _id
    ref: "User", // tells mongoose this ID belongs to User model
  },
});


// =======================
// MODELS
// =======================

// create User model → collection: 'users'
const User = mongoose.model("User", userSchema);

// create Post model → collection: 'posts'
const Post = mongoose.model("Post", postSchema);


// =======================
// ADD DATA FUNCTION
// =======================

const addData = async () => {

  // =====================
  // STEP 1: Create User & First Post
  // =====================

  let user1 = new User({
    username: "Pawan",
    email: "pawan@gmail.com",
  });

  let post1 = new Post({
    content: "Hello World!",
    likes: 7,
  });

  // linking post1 to user1
  // mongoose automatically stores user1._id
  post1.user = user1;

  // saving both in database
  await user1.save();
  await post1.save();


  // =====================
  // STEP 2: Create Second Post for Same User
  // =====================

  // fetch existing user from database
  let user = await User.findOne({ username: "Pawan" });

  let post2 = new Post({
    content: "Bye Bye :)",
    likes: 23,
  });

  // linking second post to same user
  post2.user = user;

  // saving second post
  await post2.save();
};

// call function
addData();


// =======================
// FETCH DATA FUNCTION
// =======================

const getData = async () => {

  // fetch all posts
  // populate replaces user ObjectId with full user document
  let result = await Post.find({}).populate("user");

  // print posts with full user details
  console.log(result);
};

// call function
getData();
```