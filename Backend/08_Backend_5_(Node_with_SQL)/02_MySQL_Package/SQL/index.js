const { faker } = require('@faker-js/faker');                // Import faker library to generate fake data (random users, emails, passwords, etc.)
const mysql = require('mysql2');                             // Import mysql2 package to connect Node.js with MySQL database

const connection = mysql.createConnection({                  // Create a connection with MySQL database
  host: 'localhost',                                         // MySQL server address (local machine)
  user: 'root',                                              // MySQL username
  database: 'delta_app',                                     // Database name to use
  password: "Pawan@MySQL9500/"                               // MySQL password
});

// Run a SQL query to check if connection is working
try {
    connection.query("SHOW TABLES", (err, result) => {        // SQL command: show all tables in current database
      if(err) throw err;
      console.log(result);
    });
} catch(err) {
  console.log(err);
}

connection.end();                                             // Close the database connection

let getRandomUser = () => {                                   // Function to generate a random user using faker
  return {
    id: faker.string.uuid(),                                  // Generate random UUID
    username: faker.internet.username(),                      // Generate random username
    email: faker.internet.email(),                            // Generate random email
    password: faker.internet.password(),                      // Generate random password
  };
};

// console.log(getRandomUser());