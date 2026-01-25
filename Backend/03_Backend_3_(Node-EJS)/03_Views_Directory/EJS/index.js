const express = require("express");

const app = express();
const path = require("path");                           // import path package

let port = 3000;

app.set("view engine", "ejs");                         // Tells Express to use EJS files to generate dynamic HTML pages        // 'EJS' package automatically 'require()' by Express, so we no need to 'require' it explicitally
app.set("view", path.join(__dirname, "/view"));

app.get("/", (req, res) => {
    // res.send("this is home");
    res.render("home.ejs");                            // 'res.render' sending whole file (home.ejs) which is in 'view' folder... express accessing it automatically.
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});