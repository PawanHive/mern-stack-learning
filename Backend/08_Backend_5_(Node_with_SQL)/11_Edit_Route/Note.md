## `index.js` Code Snippet Explained 

```js
// Import faker to generate fake user data
const { faker } = require('@faker-js/faker');

// Import mysql2 package to connect MySQL with Node.js
const mysql = require('mysql2');

// Import express framework
const express = require("express");
const app = express();

// Import path module to handle file paths
const path = require("path");

// Import method-override to support PATCH & DELETE in forms
const methodOverride = require('method-override')

// Server port
let port = 1100;

// Middleware to override HTTP methods using ?_method=PATCH
app.use(methodOverride('_method'));

// Middleware to parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

// Set EJS as view engine
app.set("view engine", "ejs");

// Set views folder path
app.set("views", path.join(__dirname, "views"));

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Pawan@MySQL9500/"
});

// Function to generate random user data using faker
let getRandomUser = () => {
  return [                                      
    faker.string.uuid(),        // unique id
    faker.internet.username(),  // random username
    faker.internet.email(),     // random email
    faker.internet.password(),  // random password
  ];
};

// =======================
// HOME PAGE ROUTE
// =======================
app.get("/", (req, res) => {

  // SQL query to count total users
  let q = `SELECT count(*) FROM user`;            

  try {
    connection.query(q, (err, result) => {          
      if (err) throw err;

      // Extract count value
      let count = result[0]["count(*)"];

      // Render home.ejs and send count
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

// =======================
// SHOW ALL USERS ROUTE
// =======================
app.get("/user", (req, res) => {

  // SQL query to get all users
  let q = `SELECT * FROM user`;            

  try {
    connection.query(q, (err, users) => {          
      if (err) throw err;

      // Render showuser.ejs and send users array
      res.render("showuser.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

// =======================
// EDIT USER ROUTE
// =======================
app.get("/user/:id/edit", (req, res) => {

  // Get user id from URL
  let { id } = req.params;

  // SQL query to fetch single user by id
  let q = `SELECT * FROM user WHERE id = '${id}'`;            

  try {
    connection.query(q, (err, users) => {          
      if (err) throw err;

      // Since id is unique, result will be at index 0
      let user = users[0];

      // Render edit.ejs and send user data
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

// =======================
// UPDATE USER (DB) ROUTE
// =======================
app.patch("/user/:id", (req, res) => {

  // This route will update user data in database
  // (SQL update logic to be added)
  res.send("Database Updated");
});

// =======================
// START SERVER
// =======================
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Close DB connection (optional)
// connection.end();

```