const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

let port = 2000;

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");      // bydefault  express gives 500 status code but we set it to 401 custom status code, and this code will appear in console
};

app.get("/api", checkToken, (req, res) => {         
  res.send("secret data")                   // request route: http://localhost:2000/api?token=giveaccess
})

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
  // next(err);                                  // next(err) will call next error handling middleware, and only next() will call next non-error handling middlewares
  res.send(err);
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
