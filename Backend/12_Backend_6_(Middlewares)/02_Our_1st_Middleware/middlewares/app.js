const express = require("express");
const app = express();

let port = 2000;

app.use((req, res) => {
  let { query } = req.query;
  console.log(query)
  console.log("Hi, I am middleware");
  res.send("Middleware finished")
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

