const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Pawan@MySQL9500/"
});

let q = "SHOW TABLES";                              // 'SHOW TABLES' query assigned to variable 'q'                     // sql query

try {
    connection.query(q, (err, result) => {          // 'q' variable pass as parameter
      if(err) throw err;
      console.log(result);
      console.log(result.length);
      console.log(result[0]);
      console.log(result[0]);
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