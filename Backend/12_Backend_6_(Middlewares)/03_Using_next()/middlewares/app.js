const express = require("express");
const app = express();

let port = 3000;

app.use((req, res, next) => {
  console.log("Hi, I am 1st middleware");
  next();
  console.log("Hi, this is after next()");
});

app.use((req, res, next) => {
  console.log("Hi, I am 2nd middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Hi, I am root.");
})

app.get("/random", (req, res) => {
  res.send("This is a random page");
})

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});

