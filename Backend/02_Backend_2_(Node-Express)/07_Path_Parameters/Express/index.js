

const express = require("express");                      // REMEMEBER: here 'express' is basically a function
const app = express();                                   // this 'app' variable will help us to create server side application

let port = 4000;    // 3000

app.listen(port, () => {                                 // app.listen() is used to start the server and wait for client requests. it is most useful function
    console.log(`app is listening on port ${port}`);
});



//------------------------------------------------------------------------------------------------------------------
// ## Path Parameters (req.params):

// app.get("/:username", (req, res) => {                    //NOTE SYNTAX       // (:username) is a path parameter -- It means: accept anything at this position in the URL... Ex: GET http://localhost:8080/pawan
//     console.log(req.params);                             // is an object that stores path parameters... output: { username: 'pawan' }
//     res.send("hello, i am root")
// })

// app.get("/:username/:id", (req, res) => {                   // request URL will be: http://localhost:8080/pawan/123
//     // console.log(req.params);
//     let { username, id } = req.params;
//     res.send(`Welcome to the page of @${username}`)
// })

app.get("/:username/:id", (req, res) => {                   // request URL will be: http://localhost:8080/pawan/123
    // console.log(req.params);
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}</h1>`        //      
    res.send(htmlStr)
})

