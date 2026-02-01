## `index.js` Code Snippet Explained

```js
// ------------------- IMPORT REQUIRED PACKAGES -------------------

// Faker → generate fake user data
const { faker } = require('@faker-js/faker');

// mysql2 → connect Node.js with MySQL database
const mysql = require('mysql2');

// express → backend framework
const express = require("express");
const app = express();

// path → handle file & folder paths safely
const path = require("path");

// method-override → allow PATCH/DELETE using forms
const methodOverride = require('method-override');


// ------------------- SERVER CONFIGURATION -------------------

let port = 1200;


// ------------------- MIDDLEWARE SETUP -------------------

// Enable method override using ?_method=PATCH/DELETE
app.use(methodOverride('_method'));

// Parse form data (req.body)
app.use(express.urlencoded({ extended: true }));


// ------------------- VIEW ENGINE SETUP -------------------

// Set EJS as templating engine
app.set("view engine", "ejs");

// Tell Express where views folder exists
app.set("views", path.join(__dirname, "views"));


// ------------------- DATABASE CONNECTION -------------------

// Create connection with MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Pawan@MySQL9500/"
});


// ------------------- HELPER FUNCTION -------------------
// Generates random fake user data using Faker

let getRandomUser = () => {
  return [
    faker.string.uuid(),          // unique user id
    faker.internet.username(),    // random username
    faker.internet.email(),       // random email
    faker.internet.password(),    // random password
  ];
};


// ------------------- HOME ROUTE -------------------
// Shows total number of users in database

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      // Extract user count from query result
      let count = result[0]["count(*)"];

      // Render home.ejs and pass count
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});


// ------------------- SHOW ALL USERS ROUTE -------------------
// Fetches and displays all users

app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;

  try {
    connection.query(q, (err, users) => {
      if (err) throw err;

      // Send users data to EJS template
      res.render("showuser.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});


// ------------------- EDIT USER ROUTE -------------------
// Shows edit form for a specific user

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, users) => {
      if (err) throw err;

      // Get single user object
      let user = users[0];

      // Render edit form with user data
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});


// ------------------- UPDATE USER ROUTE -------------------
// Updates username after password verification

app.patch("/user/:id", (req, res) => {
  let { id } = req.params;

  // Rename values while destructuring
  let { password: formPass, username: newUsername } = req.body;

  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      let user = result[0];

      // Password validation
      if (formPass != user.password) {
        res.send("WRONG password");
      } else {
        // Update username if password matches
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id = '${id}'`;

        connection.query(q2, (err, result) => {
          if (err) throw err;

          // Redirect back to users list
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});


// ------------------- SERVER START -------------------

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// ------------------- OPTIONAL DB CLOSE -------------------
// connection.end();

```