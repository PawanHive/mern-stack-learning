### `index.js` Code Snippet Explained
```js
// Faker library → used to generate fake/random data (not used in this route yet)
const { faker } = require('@faker-js/faker');

// mysql2 → used to connect Node.js with MySQL database
const mysql = require('mysql2');

// Express → used to create server and routes
const express = require("express");
const app = express();

// Port number where server will run
let port = 8000;


// Create MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',              // MySQL server address
  user: 'root',                   // MySQL username
  database: 'delta_app',          // Database name
  password: "Pawan@MySQL9500/"    // MySQL password
});


// Function to generate fake user data (currently NOT used)
// Returns ARRAY so it can be used directly for bulk insert
let getRandomUser = () => {
  return [
    faker.string.uuid(),           // unique id
    faker.internet.username(),     // random username
    faker.internet.email(),        // random email
    faker.internet.password(),     // random password
  ];
};


// ================= ROOT ROUTE =================

// When user visits http://localhost:8000/
app.get("/", (req, res) => {

  // SQL query to count total rows in 'user' table
  // Backticks allow multiline strings and dynamic queries
  let q = `SELECT count(*) FROM user`;

  try {
    // Send query to MySQL database
    connection.query(q, (err, result) => {
      if (err) throw err;           // If SQL error occurs, throw it

      // result is an array with one object
      // Example output: [ { 'count(*)': 101 } ]
      console.log(result);

      // First element of array
      // Example: { 'count(*)': 101 }
      console.log(result[0]);

      // Extract actual count value using key
      // Output: 101
      console.log(result[0]["count(*)"]);

      // Send response to browser
      res.send("success");
    });

  } catch (err) {
    // NOTE: This catch will NOT catch async DB errors
    console.log(err);
    res.send("some error in DB");
  }
});


// Start Express server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// connection.end(); 
// We do NOT close connection here because server needs DB continuously
```