const express = require("express");
const app = express();
const userRoutes = require("./routes/user.js");     // (userRoutes === router) exported from user.js
const postRoutes = require("./routes/post.js");     // (postRoutes === router) exported from post.js

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

// ExpressRouter Middleware
app.use("/users", userRoutes)  // 'user' router middleware
app.use("/posts", postRoutes)  // 'post' router middleware

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
