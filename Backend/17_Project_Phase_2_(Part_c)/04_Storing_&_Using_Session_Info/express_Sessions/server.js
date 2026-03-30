const express = require("express");
const app = express();
const userRoutes = require("./routes/user.js"); // (userRoutes === router) exported from user.js
const postRoutes = require("./routes/post.js"); // (postRoutes === router) exported from post.js
const session = require("express-session");

const port = 3000;

const sessionOptions = {
  secret: "MySuperSecretString",
  resave: false,
  saveUninitialized: true,
};

// express Session Middleware    // because of this line: automatically create sessionId, sends cookie, tracks user.
app.use(session(sessionOptions));

// # This code basically demonstrates how data is stored in the session store and then retrieved (read) from it.

app.get("/register", (req, res) => {    
  let { name = "anonymous" } = req.query; // Get name from query (?name=Pawan), default = "anonymous"
  req.session.name = name;  // Store name in session (server-side)
  // res.send(name);
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.send(`hello, ${req.session.name}`); // Read name from session and respond
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});


