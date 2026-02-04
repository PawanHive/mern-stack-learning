## `index.js` Code Snippet Explained

```js
// ======================= Imports & App Setup =======================
// Import Express to create server and handle routes
const express = require("express");
const app = express();

// Import Mongoose to connect and interact with MongoDB
const mongoose = require('mongoose');

// Import path to safely handle file/folder paths
const path = require("path");

// ======================= Mongoose Model =======================
// Chat model will be used later to read/write chat data
const Chat = require("./models/chat.js");

// ======================= Server Configuration =======================
// Port number where the server will listen for requests
let port = 2000;

// ======================= View Engine Setup =======================
// Use EJS for rendering dynamic HTML pages
// Set the directory where EJS template files are stored
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ======================= Database Connection =======================
// Establish connection with MongoDB when server starts
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

// Async function to connect to MongoDB database
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// ======================= Routes =======================
// Root route used to verify that server is running
app.get('/', (req, res) => {
    res.send("Root is Working");
});

// ======================= Server Start =======================
// Start the Express server on specified port
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});

```


## `init.js` Code Snippet Explained 

**this file will initialize database with some sample data**

```js
// ======================= Purpose =======================
// This file initializes the database with some sample chat data
// Run this file once to insert dummy chats into MongoDB

// ======================= Imports =======================
const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

// ======================= Database Connection =======================
// Connect to MongoDB before inserting data
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// ======================= Sample Chat Data =======================
// Array of chat objects to be inserted into database
let allChats = [
    {
        from: "neha",
        to: "preeti",
        msg: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "sumit",
        msg: "all the best!",
        created_at: new Date(),
    },
    {
        from: "anita",
        to: "ramesh",
        msg: "bring me some fruits",
        created_at: new Date(),
    },
    {
        from: "tony",
        to: "peter",
        msg: "love you 3000",
        created_at: new Date(),
    },
];

// ======================= Insert Data =======================
// Insert multiple chat documents at once into MongoDB
Chat.insertMany(allChats)
    .then((res) => {
        console.log("Sample chats inserted successfully");
    })
    .catch((err) => {
        console.log("Error inserting chats:", err);
    });

```
---

## `./models/chat.js` Code Snippet Explained
**this `./models` will save differnt-different files who define schema's for different different collections**

```js 
// ======================= Mongoose Import =======================
// Import mongoose to define schema and interact with MongoDB
const mongoose = require("mongoose");

// ======================= Chat Schema =======================
// Schema defines the structure of chat documents in MongoDB
const chatSchema = new mongoose.Schema({
    from: {
        type: String,        // Sender name
        required: true,      // Must be provided
    },
    to: {
        type: String,        // Receiver name
        required: true,      // Must be provided
    },
    msg: {
        type: String,        // Chat message content
        maxLength: 50,       // Limit message length to 50 characters
    },
    created_at: {
        type: Date,          // Date & time when message was created
        required: true,      // Timestamp is mandatory
    }
});

// ======================= Model Creation =======================
// Create Chat model from schema (collection name: chats)
const Chat = mongoose.model("Chat", chatSchema);

// ======================= Export Model =======================
// Export Chat model to use it in other files
module.exports = Chat;

```