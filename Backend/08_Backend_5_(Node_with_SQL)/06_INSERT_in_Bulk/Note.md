## 1:`index.js` Code Snippet Explained

```js
// Import faker to generate fake/random user data
const { faker } = require('@faker-js/faker');

// Import mysql2 to connect Node.js with MySQL
const mysql = require('mysql2');

// Create a connection to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',              // MySQL server running locally
  user: 'root',                   // MySQL username
  database: 'delta_app',          // Database name
  password: "Pawan@MySQL9500/"    // MySQL password
});


// ================= INSERT 100 USERS USING FAKER =================

// Function that returns ONE user's data as an array
// Array order must match table columns
let getRandomUser = () => {
  return [
    faker.string.uuid(),           // id (UUID)
    faker.internet.username(),     // username
    faker.internet.email(),        // email
    faker.internet.password(),     // password (plain text for now)
  ];
};

// SQL query for inserting MULTIPLE rows
// IMPORTANT: `VALUES ?` is required for bulk insert
let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];                  // This array will store 100 users

// Generate fake data for 100 users
for (let i = 0; i <= 100; i++) {   // ⚠️ This actually creates 101 users because i=0; 
  data.push(getRandomUser());      // Push each user into data array
}

// Execute SQL query
try {
  connection.query(q, [data], (err, result) => {      // Pass bulk data as [data] (required by mysql2)
    if (err) throw err;             // Handle SQL error

    console.log(result);            // Shows affectedRows, warnings, etc.
  });
} catch (err) {
  console.log(err);                 // Will NOT catch async errors
}

// Close MySQL connection
connection.end();

```