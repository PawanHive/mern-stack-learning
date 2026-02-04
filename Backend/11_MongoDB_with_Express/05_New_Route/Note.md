

## `index.js` Code Snippet Explained

```js
// ======================= Imports & App Setup =======================
// Express for server & routing
const express = require("express");
const app = express();

// Mongoose for MongoDB connection and data handling
const mongoose = require('mongoose');

// Path for handling file and folder paths safely
const path = require("path");

// ======================= Mongoose Model =======================
// Chat model to interact with chats collection
const Chat = require("./models/chat.js");

// ======================= Server Configuration =======================
let port = 4000;

// ======================= View Engine Setup =======================
// Use EJS to render dynamic HTML pages
// Define views folder location
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ======================= Static Files =======================
// Serve static files like CSS, images, JS from "public" folder
// Example: public/style.css can be accessed directly in EJS
app.use(express.static(path.join(__dirname, "public")));

// ======================= Database Connection =======================
// Connect to MongoDB when the server starts
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// ======================= Routes =======================

// Index Route → show all chats
app.get('/chats', async (req, res) => {
    // Fetch all chat documents from database
    let chats = await Chat.find();

    // Render index.ejs and pass chats data to it
    res.render("index.ejs", { chats });
});

// New Chat Route → form for creating new message
app.get('/chats/new', (req, res) => {
    res.render("new.ejs");
});

// Root Route → basic health check
app.get('/', (req, res) => {
    res.send("Root is Working");
});

// ======================= Server Start =======================
// Start the Express server on given port
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});

```

---
## `./views/index.ejs` Code Snippet Explained

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- ======================= Meta & Page Setup ======================= -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Whatsapp</title>

    <!-- ======================= Styles ======================= -->
    <!-- style.css is served from public folder using express.static -->
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!-- ======================= Page Headings ======================= -->
    <h1>Index Page</h1>
    <h3>All Chats!</h3>

    <!-- ======================= New Chat Button ======================= -->
    <!-- Redirects user to /chats/new route -->
    <form method="GET" action="/chats/new">
        <button>New Chat</button>
    </form>

    <br>

    <!-- ======================= Chats Loop (EJS) ======================= -->
    <!-- Loop through all chats passed from backend -->
    <% for (let chat of chats) { %>

        <div class="chat">
            <!-- Sender -->
            <p>From: <i><%= chat.from %></i></p>

            <!-- Message box -->
            <div class="msg">
                <!-- <%= %> prints escaped data -->
                <p><%= chat.msg %></p>
            </div>

            <!-- Receiver -->
            <p>Received by <i><%= chat.to %></i></p>

            <hr>
        </div>

        <br><br>
    <% } %>

</body>

</html>

```
---
## `./views/new.ejs` Code Snippet Explained
**form to create new chat**

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
    <!-- Form will send user input to backend to create a new chat -->
    <form action="" method="POST">
        
        <!-- Sender name -->
        Your Name: <br>
        <input type="text" placeholder="who are you?" name="from">
        <br><br>

        <!-- Message content -->
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
---

# #Sigma Prime Note

## Chats
New & Create Route

`GET /chats/new`

`POST /chats`