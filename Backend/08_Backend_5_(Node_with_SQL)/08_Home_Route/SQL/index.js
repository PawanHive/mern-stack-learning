const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();

let port = 8000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Pawan@MySQL9500/"
});

let getRandomUser = () => {
  return [                                      // now 'return' Array[] instead of Object{} ... wo we can remove 'keys' from (key: value)pairs
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};


app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;            // now We have to run this query to our database on this route"/"   // we can use backtick, or any colon to wrap QUERIES
  try {
    connection.query(q, (err, result) => {          // 'q' variable pass as parameter
      if(err) throw err;
      console.log(result);                         //output: [{"count(*)":101}]    ... it's a (key: value) pair which is wrapped into Array and inside that array there is object
      console.log(result[0]);                     //output: {"count(*)":101}
      console.log(result[0]["count(*)"])            //output: 101       ... means we extracted
      res.send("success")
    });
} catch(err) {
  console.log(err);
  res.send("some error in DB")
}
});

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`)
})



// connection.end();