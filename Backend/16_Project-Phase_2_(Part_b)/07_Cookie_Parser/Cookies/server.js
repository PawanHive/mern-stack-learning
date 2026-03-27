const express = require("express");
const app = express();
const userRoutes = require("./routes/user.js"); // (userRoutes === router) exported from user.js
const postRoutes = require("./routes/post.js"); // (postRoutes === router) exported from post.js
const cookieParser = require("cookie-parser");

app.use(cookieParser());

const port = 3000;

// Sending Cookies to browser
app.get("/setcookies", (req, res) => {
  res.cookie("greet", "namaste"); // this is (name: value) pair, 'greet' goes to name & 'hello' goes to value.
  res.cookie("madeIn", "India");
  res.send("Sent you some cookies!");
});

// getting (name: value) from cookies (which created directly in chrome devtool), otherwise print 'anonymous
app.get("/greet", (req, res) => {
  let { name = "anonymous" } = req.cookies;     
  res.send(`Hi, ${name}`)
})


// Suppose we want to print(getting) cookies at root route
app.get("/", (req, res) => {
  console.dir(req.cookies);  // getting 'undifined' that why we use 'cookieParser' package
  res.send(`Hi, I am root!`);
});

// ExpressRouter Middleware
app.use("/users", userRoutes); // 'user' router middleware
app.use("/posts", postRoutes); // 'post' router middleware

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
