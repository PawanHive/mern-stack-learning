const express = require("express");             // // Import Express framework
const app = express();                          // Create an Express application

let port = 9000;                                // Port number for the server

const path = require("path");                   // Import path module to work with file paths
const { v4: uuidv4 } = require("uuid");         // Import UUID 


app.use(express.urlencoded({ extended: true }));    // Middleware to read form data (POST request body)

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));    // Set EJS as the template/view engine

app.use(express.static(path.join(__dirname, "public")));    // Serves static files like CSS, images, JS from "public" folder        express.static() is middleware, so we must use app.use()

let posts = [                                       // replica of database
    {
        id: uuidv4(),                               // uuidv4() create new unique id automatically
        username: "apnacollege",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "shradhakhapra",
        content: "Hard work is important to achieve success"
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();                              // new id will assign when new post created
    posts.push({id, username, content});                    // Add the new post data into the posts array (acting like a database)
    // res.send("post request working");            // ❌ No, we cannot use res.send() and res.redirect() at the same time.   //In Express, each request can have only ONE response.
    res.redirect("/posts")                          // automatically send to GET/posts ... browser makes a new GET request to /posts
});

app.get("/posts/:id", (req, res) => {               
    let { id } = req.params;                        // Get id from URL
    let post = posts.find((p) => id === p.id)       // Find matching post
    // console.log(post)
    // console.log(id)
    // res.send("request working")
    res.render("show.ejs", { post })
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id)
    res.send("patch request working")
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
});