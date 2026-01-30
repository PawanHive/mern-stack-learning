const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Pawan@MySQL9500/"
});

// Inserting New Data

  // # INSERT SINGLE ROW (example)
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";      // '?' is placeholder of value what we will pass later                                       
// let user = ['123', '123_newuser', 'abc@gmail.com', 'abc'];                         // this is how we insert single row of data

  // # INSERT MULTIPLE ROWS
let q = "INSERT INTO user (id, username, email, password) VALUES ?";                  // IMPORTANT SYNTAX: // When inserting multiple rows, use `VALUES ?`
let users = [
  ['123b', '123_newuserb', 'abc@gmail.comb', 'abcb'],
  ['123c', '123_newuserc', 'abc@gmail.comc', 'abcc']
]

try {
    connection.query(q, [users], (err, result) => {          // 'q' variable pass as parameter
      if(err) throw err;
      console.log(result);
    });
} catch(err) {
  console.log(err);
}

connection.end();


let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

// console.log(getRandomUser());