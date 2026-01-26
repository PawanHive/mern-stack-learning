const express = require("express");
const app = express();

const port = 1000;

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`standard GET response. Welcome ${user}`);
});

app.post("/register", (req, res) => {
    res.send("standard POST response")
})

app.listen(port, () => {
    console.log(`Listening to post ${port}`)
});