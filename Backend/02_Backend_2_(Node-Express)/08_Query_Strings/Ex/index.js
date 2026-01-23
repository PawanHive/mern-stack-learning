const express = require("express");                      // REMEMEBER: here 'express' is basically a function
const app = express();                                   // this 'app' variable will help us to create server side application

let port = 8080;    // 3000

app.listen(port, () => {                                 // app.listen() is used to start the server and wait for client requests. it is most useful function
    console.log(`app is listening on port ${port}`);
});

app.use((req, res) => {                                  // request URL: http://localhost:8080/
    console.log("request received");
    res.send("this is basic response")                   // res.send() sends a response to the client and ends the request-response cycle.
});