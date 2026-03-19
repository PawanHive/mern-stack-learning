// ============================================
// Example: User & their Posts (One-to-Squillions)
// Approach: Referencing (Child stores Parent ID)
// ============================================

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo"); // DatabaseName = 'relationDemo'
}

// defines user Schema (Parent)-(One)
const userSchema = new Schema({
  username: String,
  email: String,
});

// defines post Schema (Child)-(Many)
const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    // Note: reference stored in (Child)
    type: Schema.Types.ObjectId, // (_id) reference
    ref: "User", // means refering to "User" collection
  },
});

// User Model
const User = mongoose.model("User", userSchema);

// Post Model
const Post = mongoose.model("Post", postSchema);

// Add data to database
const addData = async () => {

  // First User and First Post Create here
  
  let user1 = new User({
    username: "Pawan",
    email: "pawan@gmail.com",
  });

  let post1 = new Post({
    content: "Hello World!",
    likes: 7,
  });

  post1.user = user1;

  await user1.save();
  await post1.save();
  

  // Now here First User also creating Second Post
  
  let user = await User.findOne({ username: "Pawan" });

  let post2 = new Post({
    content: "Bye Bye :)",
    likes: 23,
  });

  post2.user = user; // here post2.user referencing to field created in postSchema and right side 'user' bring data from database the user that already created

  await post2.save();
  
};

addData();

// Print/find whole data( with Objects not just _id:) in console about both posts
const getData = async () => {
  let result = await Post.find({}).populate("user");   // here 'user' is field which defined in postSchema
  console.log(result);
}

getData()