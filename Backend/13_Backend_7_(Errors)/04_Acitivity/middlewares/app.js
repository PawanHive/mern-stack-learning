const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

let port = 4000;

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!"); // bydefault  express gives 500 status code but we set it to 401 custom status code, and this code will appear in console
};

app.get("/api", checkToken, (req, res) => {
  res.send("secret data"); // request route: http://localhost:2000/api?token=giveaccess
});

app.get("/", (req, res) => {
  res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
  res.send("This is a random page");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is Forbidden");
});

// custom error handling

// app.use((err, req, res, next) => {
//   let { status, message } = err;
//   res.status(status).send(message);
// });

app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occurred" } = err; // this is set as a default status code and messages
  res.status(status).send(message);
});

// app.use((err, req, res, next) => {
//   console.log("--------ERROR2 middleware--------");
//   next(err);
// });

// app.use((req, res) => {
//   res.status(404).send("Page not found");
// });

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
