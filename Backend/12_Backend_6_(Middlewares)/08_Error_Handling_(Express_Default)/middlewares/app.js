const express = require("express");
const app = express();

let port = 8000;

const checkToken = ("/api", (req, res, next) => {         // now it becomes function
  let { token } = req.query;
  if (token === "giveaccess") {        
    next();
  }
  throw new Error("ACCESS DENIED!")               // this will throw error in express (res.statusMessage) format 
})

app.get("/api", checkToken, (req, res) => {       // path for request (localhost:7000/api?token=giveaccess)                     
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

