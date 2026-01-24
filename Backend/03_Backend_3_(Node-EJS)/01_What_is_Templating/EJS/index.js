const express = require("express");

const app = express();
const path = require("path");

let port = 8080;

app.set("view engine", "ejs");                          // 'EJS' package automatically 'require()' by Express, so we no need to 'require' it explicitally
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // res.send("this is home");
    res.render("home.ejs");                            // 'res.render' sending whole file (home.ejs) which is in 'view' folder... express accessing it automatically.
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});