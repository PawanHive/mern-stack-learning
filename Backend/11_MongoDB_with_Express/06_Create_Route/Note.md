## `index.js` code snippet explained

```js
// ======================= Imports & App Setup =======================
// Express for server creation and routing
const express = require("express");
const app = express();

// Mongoose for MongoDB connection and schema interaction
const mongoose = require('mongoose');

// Path for handling file and folder paths safely
const path = require("path");

// ======================= Mongoose Model =======================
// Chat model represents chat documents in MongoDB
const Chat = require("./models/chat.js");

// ======================= Server Configuration =======================
let port = 6060;

// ======================= View Engine Setup =======================
// Use EJS to render dynamic HTML pages
// Define folder where EJS templates are stored
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ======================= Middleware =======================

// Serve static files like CSS from public folder
app.use(express.static(path.join(__dirname, "public")));

// Parse form data (required for POST requests)
app.use(express.urlencoded({ extended: true }));

// ======================= Database Connection =======================
// Connect to MongoDB when server starts
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

// Async function to establish MongoDB connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// ======================= Routes =======================

// Index Route → display all chats (READ)
app.get('/chats', async (req, res) => {
    // Fetch all chat documents from database
    let chats = await Chat.find();

    // Send chats data to index.ejs
    res.render("index.ejs", { chats });
});

// New Chat Route → show form to create chat
app.get('/chats/new', (req, res) => {
    res.render("new.ejs");
});

// POST Route → create new chat (CREATE)
app.post('/chats', (req, res) => {
    // Extract form data from request body
    let { from, to, msg } = req.body;

    // Create new Chat document
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });

    // Save chat to MongoDB
    // (Can also be written using async/await)
    newChat
        .save()
        .then(() => {
            console.log("Data saved successfully");
        })
        .catch((err) => {
            console.log(err);
        });

    // Redirect user back to chats page
    res.redirect("/chats");
});

// Root Route → simple health check
app.get('/', (req, res) => {
    res.send("Root is Working");
});

// ======================= Server Start =======================
// Start Express server on specified port
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});

```
---

## `./views/new.ejs` code snippet explained

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- ======================= Meta & Page Setup ======================= -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Write new chat</title>
</head>

<body>

    <!-- ======================= Page Heading ======================= -->
    <h3>Write new chat..</h3>

    <!-- ======================= New Chat Form ======================= -->
    <!-- This form sends data to POST /chats route -->
    <form method="POST" action="/chats">

        <!-- Sender name -->
        Your Name: <br>
        <input type="text" placeholder="who are you?" name="from">
        <br><br>

        <!-- Message text -->
        Message: <br>
        <textarea name="msg">Write your message here..</textarea>
        <br><br>

        <!-- Receiver name -->
        To Whom: <br>
        <input type="text" placeholder="add receiver" name="to">
        <br><br>

        <!-- Submit button -->
        <button>Create Chat</button>
    </form>

</body>
</html>

```