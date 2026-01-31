## `index.js` Code Snippet Explained 

```js

const { faker } = require('@faker-js/faker');           // Import faker library → used to generate fake user data (uuid, username, email, password)

const mysql = require('mysql2');        // Import mysql2 → used to connect Node.js with MySQL database

// Import express → used to create server and routes
const express = require("express");
const app = express();

const path = require("path");               // Import path → helps in creating correct file paths (works on all OS)

// Define server port number
let port = 9000;

app.set("view engine", "ejs")       // Tell Express that we are using EJS as our template engine

app.set("views", path.join(__dirname, "views"))     // Tell Express where our EJS files (views) are located

// Create MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',       // MySQL server location
  user: 'root',            // MySQL username
  database: 'delta_app',   // Database name
  password: "Pawan@MySQL9500/" // MySQL password
});

// Function to generate random user data using Faker
let getRandomUser = () => {
  return [                                      
    faker.string.uuid(),        // random unique id
    faker.internet.username(),  // random username
    faker.internet.email(),     // random email
    faker.internet.password(),  // random password
  ];
};

// Route for home page → runs when user opens http://localhost:9000/
app.get("/", (req, res) => {

  let q = `SELECT count(*) FROM user`;            // SQL query to count total number of rows in "user" table

  try {
    // Execute SQL query
    connection.query(q, (err, result) => {          
      if(err) throw err;   // if DB error occurs, stop execution

      // console.log(result[0]["count(*)"])                 // result looks like: [ { 'count(*)': 101 } ]
      // Extract the count value from result
      let count = result[0]["count(*)"]

      // Send data to EJS file (home.ejs)
      // count variable can now be used inside EJS
      res.render("home.ejs", { count })
    });
  } catch(err) {
    // If any error occurs
    console.log(err);
    res.send("some error in DB")
  }
});


// Start the Express server
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`)
})


// connection.end();  ❌ NOT used here because
// we want DB connection alive while server is running

```