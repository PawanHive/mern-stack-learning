const express = require("express");
const app = express();

let port = 5000;

// this middleware only invokes for "/random" path
app.use("/random", (req, res, next) => {
  console.log("Middleware: I am only for random");
  next();                                             // if we didn't use this line (next()), then page will continuously load and nothing will appear 
});

app.get("/", (req, res) => {
  res.send("Hi, I am root.");
})

app.get("/random", (req, res) => {
  res.send("This is a random page");
})

// this middleware invoke when we suppose to access page which actually not exits or if are request doesn't match with above paths
app.use((req, res) => {
  res.send("Page not found");               // suppose we by mistakly request for (localhost:5000/abcd) which not exits
})

//or we can also write above code in this format
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});

