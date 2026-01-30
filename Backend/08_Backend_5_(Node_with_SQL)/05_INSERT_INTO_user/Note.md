## #Sigmar Prime Note

### INSERT User
using **placeholder**

```js
let user = ["123@abc2", "random_user2","random@gmail.com2","random@123"];

connection.query(
    `INSERT INTO user(userId, username, email, password) VALUES (?, ?, ?, ?)`,
    user, 
    function (err, results) {
        if(err) throw err;
        console.log(results);
    }
)
```

## 2: How to INSERT new data.

### INSERT single row

Example:

```js
let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";      
let user = ['123', '123_newuser', 'abc@gmail.com', 'abc'];                         

try {
    connection.query(q, user, (err, result) => {          
      if(err) throw err;
      console.log(result);
    });
} catch(err) {
  console.log(err);
}

connection.end();
```
---
### INSERT multiple row

```js

let q = "INSERT INTO user (id, username, email, password) VALUES ?";                                        
let users = [
  ['123b', '123_newuserb', 'abc@gmail.comb', 'abcb'],
  ['123c', '123_newuserc', 'abc@gmail.comc', 'abcc']
]

try {
    connection.query(q, [users], (err, result) => {          
      if(err) throw err;
      console.log(result);
    });
} catch(err) {
  console.log(err);
}

connection.end();
```