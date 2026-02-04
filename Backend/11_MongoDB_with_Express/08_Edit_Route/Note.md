## `index.ejs` code snippet explained

```js
// ======================= Imports & App Setup =======================
// Express for creating server and handling routes
const express = require("express");
const app = express();

// Mongoose for MongoDB connection and queries
const mongoose = require('mongoose');

// Path for handling file/folder paths safely
const path = require("path");

// ======================= Mongoose Model =======================
// Chat model represents chat documents in MongoDB
const Chat = require("./models/chat.js");

// ======================= Server Configuration =======================
let port = 8000;

// ======================= View Engine Setup =======================
// Use EJS to render dynamic HTML pages
// Define the folder where EJS templates are stored
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ======================= Middleware =======================

// Serve static files (CSS, images, JS) from public folder
app.use(express.static(path.join(__dirname, "public")));

// Parse incoming form data (required for POST & PUT)
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

    // Render index.ejs and send chats data
    res.render("index.ejs", { chats });
});

// New Chat Route → show form to create new chat
app.get('/chats/new', (req, res) => {
    res.render("new.ejs");
});

// POST Route → create new chat (CREATE)
app.post('/chats', (req, res) => {
    // Extract form data from request body
    let { from, to, msg } = req.body;

    // Create new chat document
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

// ======================= Edit Routes =======================

// Edit Chat Route → show edit form for a specific chat
app.get('/chats/:id/edit', async (req, res) => {
    // Extract chat id from URL parameter
    let { id } = req.params;

    // Find chat by its MongoDB _id
    let chat = await Chat.findById(id);

    // Send chat data to edit.ejs
    res.render("edit.ejs", { chat });
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

## `./views/edit.ejs` code snippet explained
**this file show form to edit chats**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- ======================= Meta & Page Setup ======================= -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit your message</title>
</head>

<body>

    <!-- ======================= Chat Identification ======================= -->
    <!-- chat._id is the unique MongoDB identifier -->
    <!-- It tells backend which chat needs to be updated -->
    <p>Edit your message: <b><%= chat._id %></b></p>

    <!-- ======================= Chat Info ======================= -->
    <!-- Display sender and receiver for context -->
    <p>
        This chat was sent from 
        <b><%= chat.from %></b> 
        to 
        <b><%= chat.to %></b>
    </p>

    <!-- ======================= Edit Form ======================= -->
    <!-- This form will send updated message to backend -->
    <form action="" method="POST">

        <!-- ======================= Message Field ======================= -->
        <!-- Textarea is pre-filled with existing chat message -->
        <!-- User edits this text -->
        <textarea name="msg" rows="6" cols="50">
<%= chat.msg %>
        </textarea>

        <br>

        <!-- ======================= Submit Button ======================= -->
        <!-- Submits updated message -->
        <button>Edit</button>
    </form>

</body>

</html>

```

---

# #Sigma Prime Note

## Chats
**Edit & Update Route**

`GET /chats/:id/edit`

`PUT /chats/:id`