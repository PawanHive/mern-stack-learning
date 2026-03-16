const express = require("express");
const app = express();

let port = 1000;

app.get("/", (req, res) => {
  res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
  res.send("This is a random page");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.use((err, req, res, next) => {
  console.log("--------ERROR--------");
  next(err);                            // next(err) will call next error handling middleware, and only next() will call next non-error handling middlewares
});

app.use((err, req, res, next) => {
  console.log("--------ERROR2 middleware--------");
  next(err);
});

// app.use((req, res) => {
//   res.status(404).send("Page not found");
// });

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
