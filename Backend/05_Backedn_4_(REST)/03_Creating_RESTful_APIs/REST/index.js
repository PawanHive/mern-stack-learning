const express = require("express");             // // Import Express framework
const app = express();                          // Create an Express application

let port = 3000;                                // Port number for the server

const path = require("path");                   // Import path module to work with file paths

app.use(express.urlencoded({ extended: true }));    // Middleware to read form data (POST request body)

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));    // Set EJS as the template/view engine

app.use(express.static(path.join(__dirname, "public")));    // Serves static files like CSS, images, JS from "public" folder        express.static() is middleware, so we must use app.use()

app.get("/", (req, res) => {
    res.send("server working well")
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
});