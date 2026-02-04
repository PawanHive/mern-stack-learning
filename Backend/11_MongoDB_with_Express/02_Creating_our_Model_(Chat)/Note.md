
folder `/models` = `collections` folder

## `index.js` Code Snippet Explained

```js
// ======================= Imports & App Setup =======================
// Import required packages for server, database, and file paths
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");

// ======================= Mongoose Model =======================
// Import Chat model to create and store chat documents in MongoDB
const Chat = require("./models/chat.js");

// ======================= Server Configuration =======================
// Port number on which the Express server will run
let port = 2000;

// ======================= View Engine Setup =======================
// Set EJS as the template engine and define views folder path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ======================= Database Connection =======================
// Connect to MongoDB using Mongoose
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

// Async function to connect to MongoDB database
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// ======================= Sample Chat Creation =======================
// Create a new chat document using the Chat model
let chat1 = new Chat({
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(), // stores current date & time
});

// Save the chat document into MongoDB collection
chat1
    .save()
    .then((res) => {
        console.log("Chat saved:", res);
    })
    .catch((err) => {
        console.log("Error saving chat:", err);
    });

// ======================= Routes =======================
// Root route to check if server is running properly
app.get('/', (req, res) => {
    res.send("Root is Working");
});

// ======================= Server Start =======================
// Start Express server and listen on given port
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});

```

---


## `./models/chat.js` Code Snippet Explained
this `./models` will save differnt-different files who define schema's for different different collections

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