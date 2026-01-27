const express = require("express");             // // Import Express framework
const app = express();                          // Create an Express application

let port = 5000;                                // Port number for the server

const path = require("path");                   // Import path module to work with file paths

app.use(express.urlencoded({ extended: true }));    // Middleware to read form data (POST request body)

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));    // Set EJS as the template/view engine

app.use(express.static(path.join(__dirname, "public")));    // Serves static files like CSS, images, JS from "public" folder        express.static() is middleware, so we must use app.use()

let posts = [                                       // replica of database
    {
        username: "apnacollege",
        content: "I love coding!"
    },
    {
        username: "shradhakhapra",
        content: "Hard work is important to achieve success"
    },
    {
        username: "rahulkumar",
        content: "I got selected for my 1st internship"
    },

]

app.get("/posts", (req, res) => {
    // res.send("server working well")
    res.render("index.ejs", { posts })                  // 'posts' basically a above array of database
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
});

app.post("/posts", (req, res) => {                      // This route handles form submission using POST method
    // console.log(req.body)
    let {username, content} = req.body;                 // req.body contains data sent from the form
    posts.push({username, content});                    // Add the new post data into the posts array (acting like a database)
    res.send("post request working");            
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
});