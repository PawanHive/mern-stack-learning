## `index.js` code snippet explained

```js
// ====================== Imports & App Setup ======================

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");

// Import Chat model (Mongoose Schema)
const Chat = require("./models/chat.js");

let port = 1010;


// ====================== View Engine & Middleware ======================

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, images, etc.) from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

// Allow PUT & DELETE using ?_method=PUT / DELETE
app.use(methodOverride("_method"));


// ====================== Database Connection ======================

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


// ====================== Routes ======================

// Root test route
app.get('/', (req, res) => {
    res.send("Root is Working");
});


// ====================== READ (Index Route) ======================
// Fetch all chats and show them

app.get('/chats', async (req, res) => {
    let chats = await Chat.find();       // fetch all documents
    res.render("index.ejs", { chats });  // send data to EJS
});


// ====================== CREATE ======================

// Show "New Chat" form
app.get('/chats/new', (req, res) => {
    res.render("new.ejs");
});

// Handle new chat submission
app.post('/chats', (req, res) => {
    let { from, to, msg } = req.body;

    // Create new Chat document
    let newChat = new Chat({
        from,
        to,
        msg,
        created_at: new Date(),
    });

    // Save to database
    newChat
        .save()
        .then(() => {
            console.log("Data saved successfully");
        })
        .catch((err) => {
            console.log(err);
        });

    // Redirect back to chats list
    res.redirect("/chats");
});


// ====================== UPDATE ======================

// Show edit form for a specific chat
app.get('/chats/:id/edit', async (req, res) => {
    let { id } = req.params;              // extract id from URL
    let chat = await Chat.findById(id);   // fetch chat
    res.render("edit.ejs", { chat });     // send to edit page
});


// Update chat message
app.put('/chats/:id', async (req, res) => {

    let { id } = req.params;              // chat id from URL
    let { msg: newMsg } = req.body;       // updated message from form

    /*
        findByIdAndUpdate explained:
        ----------------------------
        1st argument → which document (id)
        2nd argument → what to update
        3rd argument → options

        new: true
        - returns updated document (not old one)

        runValidators: true
        - re-check schema rules (like maxLength)
    */
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );

    // Redirect after update
    res.redirect("/chats");
});


// ====================== DELETE ======================

// Delete a chat permanently
app.delete('/chats/:id', async (req, res) => {

    let { id } = req.params;                 // chat id from URL

    /*
        findByIdAndDelete:
        ------------------
        - removes document from MongoDB
        - returns deleted document (if needed for logging)
    */
    let deletedChat = await Chat.findByIdAndDelete(id);

    console.log(deletedChat);                // optional debug
    res.redirect("/chats");                  // refresh list
});


// ====================== Server ======================

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});

```

---

## `./views/index.ejs` code snippet explained

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Basic HTML meta setup -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Page title -->
    <title>Mini Whatsapp</title>

    <!-- Linking external CSS (served from /public using express.static) -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- Page Heading -->
    <h1>Index Page</h1>

    <h3>All Chats!</h3>

    <!-- Button to open "New Chat" form -->
    <form method="GET" action="/chats/new">
        <button>New Chat</button>
    </form>

    <br>

    <!-- Loop through all chats received from server -->
    <% for (let chat of chats) { %>

        <div class="chat">

            <!-- Sender information -->
            <p>From: <i><%= chat.from %></i></p>

            <!-- Message box -->
            <div class="msg">

                <!-- Chat message text -->
                <p><%= chat.msg %></p>

                <!-- Edit button -->
                <!-- Sends GET request to /chats/:id/edit -->
                <form method="GET" action="/chats/<%= chat._id %>/edit">
                    <button>Edit</button>
                </form>

                <!-- Delete button -->
                <!-- HTML forms don’t support DELETE -->
                <!-- method-override converts POST + ?_method=DELETE into DELETE -->
                <form method="POST" action="/chats/<%= chat._id %>?_method=DELETE">
                    <button>Delete</button>
                </form>

            </div>

            <!-- Receiver information -->
            <p>Received by <i><%= chat.to %></i></p>

            <hr>

            <!-- Display time (HH:MM:SS) -->
            <!-- created_at is a Date object from MongoDB -->
            <p>
                <%= chat.created_at.toString().split(" ")[4] %>
            </p>

            <!-- Display date (Day-Month-Date-Year) -->
            <p>
                <%= chat.created_at.toString().split(" ").slice(0, 4).join("-") %>
            </p>

        </div>

        <br><br>

    <% } %>

</body>
</html>

```

# #Sigma Prime Note

## Chats

**Destroy Route**

`DELETE /chats/:id`