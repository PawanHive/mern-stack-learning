const express = require("express");
const app = express();
const userRoutes = require("./routes/user.js"); // (userRoutes === router) exported from user.js
const postRoutes = require("./routes/post.js"); // (postRoutes === router) exported from post.js
const session = require("express-session");

const port = 3000;

// express Session Middleware    // because of this line: automatically create sessionId, sends cookie, tracks user.
app.use(
  session({
    secret: "MySuperSecretString",
    resave: false,
    saveUninitialized: true,
  }),
);

// Usecase: this code will count ki, same use se single session ke andar kitni bar request aayi.
app.get("/reqcount", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  
  res.send(`You sent a request ${req.session.count} times`);
});

// app.get("/test", (req, res) => {
//   res.send("test successful");
// });

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

/*
when we will run this code and when we will look into chrome devtool "application" options under 'Cookies'
we will get "connect.sid" (name: value) pair which means ( connect-session-id) it means express session'
connected to browser client-side
 */
