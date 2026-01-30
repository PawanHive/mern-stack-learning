const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Pawan@MySQL9500/"
});


  // # INSERT data of 100 users using 'Faker' 

let getRandomUser = () => {
  return [                                      // now 'return' Array[] instead of Object{} ... wo we can remove 'keys' from (key: value)pairs
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let q = "INSERT INTO user (id, username, email, password) VALUES ?";                  // IMPORTANT SYNTAX: // When inserting multiple rows, use `VALUES ?`

let data = [];
for (let i = 0; i <= 100; i++) {
  // console.log(getRandomUser());
  data.push(getRandomUser());           // give 100 fake users data
}

try {
    connection.query(q, [data], (err, result) => {          // 'q' variable pass as parameter
      if(err) throw err;
      console.log(result);
    });
} catch(err) {
  console.log(err);
}

connection.end();
