## `index.js` Code Snippet Explained

```js
// =================== IMPORT REQUIRED PACKAGES ===================

// Faker → generate fake/random user data
const { faker } = require('@faker-js/faker');

// mysql2 → connect Node.js with MySQL
const mysql = require('mysql2');

// Express → backend framework
const express = require("express");
const app = express();

// Path → safely handle file paths
const path = require("path");

// Method Override → allow PATCH & DELETE via forms
const methodOverride = require('method-override');

// UUID → generate unique ids (not used currently)
const { v4: uuidv4 } = require("uuid");


// =================== SERVER CONFIG ===================

let port = 1300;


// =================== MIDDLEWARE SETUP ===================

// Allow HTML forms to send PATCH & DELETE requests
app.use(methodOverride('_method'));

// Parse form data and make it available in req.body
app.use(express.urlencoded({ extended: true }));


// =================== VIEW ENGINE SETUP ===================

// Set EJS as template engine
app.set("view engine", "ejs");

// Define where EJS templates are stored
app.set("views", path.join(__dirname, "views"));


// =================== DATABASE CONNECTION ===================

// Create connection with MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Pawan@MySQL9500/"
});


// =================== HELPER FUNCTION ===================
// Generates random user data using Faker (for testing)

let getRandomUser = () => {
  return [
    faker.string.uuid(),        // unique id
    faker.internet.username(),  // username
    faker.internet.email(),     // email
    faker.internet.password(),  // password
  ];
};


// =================== HOME PAGE ROUTE ===================
// Shows total number of users

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      // Extract count from query result
      let count = result[0]["count(*)"];

      // Render home page with user count
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});


// =================== SHOW ALL USERS ROUTE ===================
// Displays all users in table format

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


// =================== EDIT USER ROUTE ===================
// Opens edit form for a specific user

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


// =================== UPDATE USER ROUTE ===================
// Updates username after password verification

app.patch("/user/:id", (req, res) => {
  let { id } = req.params;

  // Rename form values for clarity
  let { password: formPass, username: newUsername } = req.body;

  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      let user = result[0];

      // Check if entered password matches DB password
      if (formPass != user.password) {
        res.send("WRONG password");
      } else {
        // Update username if password is correct
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id = '${id}'`;

        connection.query(q2, (err, result) => {
          if (err) throw err;

          // Redirect to users list
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});


// =================== ADD NEW USER ROUTES ===================

// Show new user form
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

// Insert new user into database
app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = faker.string.uuid();

  let q = `
    INSERT INTO user (id, username, email, password)
    VALUES ('${id}', '${username}', '${email}', '${password}')
  `;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      console.log("added new user");
      res.redirect("/user");
    });
  } catch (err) {
    res.send("some error occurred");
  }
});


// =================== DELETE USER ROUTES ===================

// Show delete confirmation page
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

// Delete user after password verification
app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password: formPass } = req.body;

  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      let user = result[0];

      if (formPass != user.password) {
        res.send("WRONG password");
      } else {
        let q2 = `DELETE FROM user WHERE id = '${id}'`;

        connection.query(q2, (err, result) => {
          if (err) throw err;

          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});


// =================== SERVER START ===================

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// =================== OPTIONAL DB CLOSE ===================
// connection.end();

```