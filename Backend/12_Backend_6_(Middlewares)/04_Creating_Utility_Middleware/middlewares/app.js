const express = require("express");
const app = express();

let port = 4000;

// app.use((req, res, next) => {
//   console.log("Hi, I am 1st middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Hi, I am 2nd middleware");
//   next();
// });

// logger (unility) middleware

// app.use( (req, res, next) => {
//   console.log(req);
//   next();
// })

app.use( (req, res, next) => {
  req.time = new Date(Date.now()).toString()                    // middleware can manupulate - we made this (req.time) by own and defined it
  console.log(req.method, req.hostname, req.path, req.time);    // this will tell us about request send my which-method, what-hostname-is? & what-pat-is
  next();
})

app.get("/", (req, res) => {
  res.send("Hi, I am root.");
})

app.get("/random", (req, res) => {
  res.send("This is a random page");
})

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});

