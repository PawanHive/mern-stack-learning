const express = require("express");
const app = express();
const userRoutes = require("./routes/user.js"); // (userRoutes === router) exported from user.js
const postRoutes = require("./routes/post.js"); // (postRoutes === router) exported from post.js
const session = require("express-session");

const port = 3000;

// express Session Middleware
app.use(session({ secret: "MySuperSecretString" }));      // because of this line: automatically create sessionId, sends cookie, tracks user.

app.get("/test", (req, res) => {
  res.send("test successful");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});


/*
when we will run this code and when we will look into chrome devtool "application" options under 'Cookies'
we will get "connect.sid" (name: value) pair which means ( connect-session-id) it means express session'
connected to browser client-side
 */