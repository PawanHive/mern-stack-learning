

const express = require("express");                      // REMEMEBER: here 'express' is basically a function
const app = express();                                   // this 'app' variable will help us to create server side application

let port = 8080;    // 3000

app.listen(port, () => {                                 // app.listen() is used to start the server and wait for client requests. it is most useful function
    console.log(`app is listening on port ${port}`);
});

//-------------------------------------------------------------------------------------------------------------------------
// ## Query Strings (req.query):

// app.get("/search", (req, res) => {                       // http://localhost:8080/search?q=hello
//     console.log(req.query);
//     res.send("no results")
// });

// app.get("/search", (req, res) => {                       // http://localhost:8080/search?q=mango
//     let { q } = req.query;
//     res.send(`search results for query: ${q}`)
// });

// app.get("/search", (req, res) => {                       // http://localhost:8080/search?q=mango
//     let { q } = req.query;
//     if (!q) {
//         res.send("<h1>nothing searched</h1>")            // this will run we search nothing after 'q=' string  like this URL: // http://localhost:8080/search? 
//     }
//     res.send(`<h1>search results for query: ${q}</h1>`)
// })

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

// app.get("/:username/:id", (req, res) => {                   // request URL will be: http://localhost:8080/pawan/123
//     // console.log(req.params);
//     let { username, id } = req.params;
//     let htmlStr = `<h1>Welcome to the page of @${username}</h1>`        //      
//     res.send(htmlStr)
// })

//--------------------------------------------------------------------------------------------------------------------
// ## Routing:

// app.get("/", (req, res) => {                             // route defined as "/" ... known as root path      // http://localhost:8080/
//     console.log("root")
//     res.send("you contacted root path");
// });

// app.get("/apple", (req, res) => {                        // route defined as "/apple" path     // http://localhost:8080/apple
//     console.log("apple")
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {                       // route defined as "/orange" path     // http://localhost:8080/orange
//     console.log("orange")
//     res.send("you contacted orange path");
// });


// // app.get("/*", (req, res) => {                         // '/*' -- this kind of route is invalid in Express 5 version, so don't use it will crash whole code    // The requested URL does NOT match any other defined route (In simple words: If no route matches, show this message.)     // suppose we requested URL: http://localhost:8080/mango        ... which not defined in route
// //     console.log("*")
// //     res.send("this path does not exist");
// // });

// app.post("/", (req, res) => {
//     console.log("post")
//     res.send("you send a post request to root");
// })

//------------------------------------------------------------------------------------------------------------------------
// ## Handling Request & Sending Response:

// app.use((req, res) => {                                  // request URL: http://localhost:8080/
//     console.log("request received");
//     res.send("this is basic response")                   // res.send() sends a response to the client and ends the request-response cycle.
// });