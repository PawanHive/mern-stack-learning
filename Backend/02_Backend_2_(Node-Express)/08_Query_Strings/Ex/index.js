const express = require("express");                      // REMEMEBER: here 'express' is basically a function
const app = express();                                   // this 'app' variable will help us to create server side application

let port = 3000;    

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

app.get("/search", (req, res) => {                       // http://localhost:8080/search?q=mango
    let { q } = req.query;
    if (!q) {
        res.send("<h1>nothing searched</h1>")            // this will run we search nothing after 'q=' string  like this URL: // http://localhost:8080/search? 
    }
    res.send(`<h1>search results for query: ${q}</h1>`)
})