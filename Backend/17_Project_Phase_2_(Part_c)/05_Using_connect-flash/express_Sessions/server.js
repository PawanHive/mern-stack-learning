const express = require("express");
const app = express();
const userRoutes = require("./routes/user.js"); // (userRoutes === router) exported from user.js
const postRoutes = require("./routes/post.js"); // (postRoutes === router) exported from post.js
const session = require("express-session");
const flash = require("connect-flash")
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const port = 3000;

const sessionOptions = {
  secret: "MySuperSecretString",
  resave: false,
  saveUninitialized: true,
};

// express Session Middleware    // because of this line: automatically create sessionId, sends cookie, tracks user.
app.use(session(sessionOptions));

// connect-flash middleware
app.use(flash());

app.get("/register", (req, res) => {    
  let { name = "anonymous" } = req.query; // Get name from query (?name=Pawan), default = "anonymous"
  req.session.name = name;  // Store name in session (server-side)
  req.flash("success", "user registered successfully!");
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  // console.log(req.flash("success")); // it compulsory to pass req.flash() with it's 'key' which is here "success"
  res.render("page.ejs", {name: req.session.name, msg: req.flash("success")}); // Read name from session and respond
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});


