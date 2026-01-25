const express = require("express");
const path = require("path");

const app = express();

let port = 5000;

app.set("view engine", "ejs");                         // Tells Express to use EJS files to generate dynamic HTML pages        // 'EJS' package automatically 'require()' by Express, so we no need to 'require' it explicitally
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    // res.send("this is home");
    res.render("home.ejs");                            // 'res.render' sending whole file (home.ejs) which is in 'view' folder... express accessing it automatically.
});

app.get("/rolldice", (req, res) => {                    // request URL: http://localhost:5000/rolldice
    let diceVal = Math.floor(Math.random() * 6) + 1;
    // res.render("rolldice.ejs", { num: diceVal })          // here second arugment is Object and has (key: value) pair, and this key we have to access in .ejs fiel
    // res.render("rolldice.ejs", { diceVal: diceVal })     // here (key:value) both had same name 'diceVal'         
    res.render("rolldice.ejs", { diceVal })                 // generally we pass single value here like 'diceVal' ....it mean both (key: value) had same name. and above two line of codes are also same 
})

app.get("/user", (req, res) => {                        // http://localhost:5000/user
    res.render("user.ejs", {
        name: "Pawan", 
        age: 50,
        isLoggedIn: true
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});