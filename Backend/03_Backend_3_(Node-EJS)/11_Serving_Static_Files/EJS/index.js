const express = require("express");

const app = express();
const path = require("path");

let port = 1100;

app.use(express.static(path.join(__dirname, "public")));        // serving single static file .... which is (style.css)

app.set("view engine", "ejs");                         // Tells Express to use EJS files to generate dynamic HTML pages        // 'EJS' package automatically 'require()' by Express, so we no need to 'require' it explicitally
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    // res.send("this is home");
    res.render("home.ejs");                            // 'res.render' sending whole file (home.ejs) which is in 'view' folder... express accessing it automatically.
});

app.get("/ig/:username", (req, res) => {                // request URL: http://localhost:1010/ig/dogs       OR   http://localhost:1010/ig/cats
    let { username } = req.params;
    const instaData = require("./data.json")            // REMEMBER SYNTAX: this is how we require our internal files (./filename) 
    const data = instaData[username];
    console.log(data)
    if (data) {                                         // suppose if request any other url then else statment will render to screen which is 'error.ejs' file
        res.render("instagram.ejs", { data })
    } else {
        res.render("error.ejs")
    }

})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});