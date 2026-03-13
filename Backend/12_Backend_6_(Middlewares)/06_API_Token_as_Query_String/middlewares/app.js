const express = require("express");
const app = express();

let port = 6060;

app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {         // path for request (localhost:6060/api?token=giveaccess)
    next();
  }
  res.send("ACCESS DENIED!")
})

app.get("/api", (req, res) => {
  res.send("secret data");
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

