

const express = require("express");                      // REMEMEBER: here 'express' is basically a function
const app = express();                                   // this 'app' variable will help us to create server side application

let port = 5000;    // 3000

app.listen(port, () => {                                 // app.listen() is used to start the server and wait for client requests. it is most useful function
    console.log(`app is listening on port ${port}`);
});



//--------------------------------------------------------------------------------------------------------------------
// ## Routing:

app.get("/", (req, res) => {                             // route defined as "/" ... known as root path      // http://localhost:5000/
    console.log("root")
    res.send("you contacted root path");
});

app.get("/apple", (req, res) => {                        // route defined as "/apple" path     // http://localhost:5000/apple
    console.log("apple")
    res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {                       // route defined as "/orange" path     // http://localhost:5000/orange
    console.log("orange")
    res.send("you contacted orange path");
});


// // app.get("/*", (req, res) => {                         // '/*' -- this kind of route is invalid in Express 5 version, so don't use it will crash whole code    // The requested URL does NOT match any other defined route (In simple words: If no route matches, show this message.)     // suppose we requested URL: http://localhost:5000/mango        ... which not defined in route
// //     console.log("*")
// //     res.send("this path does not exist");
// // });

app.post("/", (req, res) => {
    console.log("post")
    res.send("you send a post request to root");
})

