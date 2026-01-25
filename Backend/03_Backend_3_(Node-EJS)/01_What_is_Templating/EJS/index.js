const express = require("express");

const app = express();

let port = 8080; 

app.get("/", (req, res) => {
    res.send("this is home");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});