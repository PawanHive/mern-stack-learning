const express = require("express");
const app = express();

const port = 2000;

app.use(express.urlencoded({ extended: true }));    // for form data
app.use(express.json());                            // this line make express understand JSON data.... suppose we pass data from hoppscotch (Raw body request)

app.get("/register", (req, res) => {
    let {user, password} = req.query;                      
    res.send(`standard GET response. Welcome ${user}`);
});

app.post("/register", (req, res) => {
    console.log(req.query);
    // console.log(req.body);                          // print data in object format what we pass into the FORM
    let { user, password } = req.body;
    res.send(`standard POST response. Hello ${user}!`)
})

app.listen(port, () => {
    console.log(`Listening to post ${port}`)
});