const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

// User's All Route
// Index
app.get("/users", (req, res) => {
  res.send("GET for users");
});
// Show
app.get("/users/:id", (req, res) => {
  res.send("GET for user id");
});
// Post
app.post("/users", (req, res) => {
  res.send("POST for users");
});
// Delete
app.delete("/users/:id", (req, res) => {
  res.send("DELETE for user id");
});


// Posts's All Route
// Index
app.get("/posts", (req, res) => {
  res.send("GET for posts");
});
// Show
app.get("/posts/:id", (req, res) => {
  res.send("GET for post id");
});
// Post
app.post("/posts", (req, res) => {
  res.send("POST for posts");
});
// Delete
app.delete("/posts/:id", (req, res) => {
  res.send("DELETE for post id");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
