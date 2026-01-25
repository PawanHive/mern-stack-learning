const express = require("express");

const app = express();
const path = require("path");

let port =8000;

app.set("view engine", "ejs");                         // Tells Express to use EJS files to generate dynamic HTML pages        // 'EJS' package automatically 'require()' by Express, so we no need to 'require' it explicitally
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    // res.send("this is home");
    res.render("home.ejs");                            // 'res.render' sending whole file (home.ejs) which is in 'view' folder... express accessing it automatically.
});

app.get("/ig/:username", (req, res) => {
    const followers = ['adam', 'bob', 'steve', 'abc']
    let {username} = req.params;
    res.render("instagram.ejs", {username, followers})
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});