const express = require("express");
const router = express.Router();

// User's All Route
// Index
router.get("/", (req, res) => {
  res.send("GET for users");
});
// Show
router.get("/:id", (req, res) => {
  res.send("GET for user id");
});
// Post
router.post("/", (req, res) => {
  res.send("POST for users");
});
// Delete
router.delete("/:id", (req, res) => {
  res.send("DELETE for user id");
});

module.exports = router;

/*
NOTE:
Here, we have to replace "app.get" to "router.get" and same for every route, because here we don't 
have access to 'app', here we access to 'router'

Here, "/users"  is comman path so we have to remove that also but it should use in app.js 
when we call it as router middleware to perform, like:  app.use("/users", userRoutes)

*/