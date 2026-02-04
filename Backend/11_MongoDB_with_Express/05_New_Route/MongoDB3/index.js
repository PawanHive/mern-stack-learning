const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");

const Chat = require("./models/chat.js")

let port = 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));        // serving single static file .... which is (style.css)

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Index Route
app.get('/chats', async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats)
    res.render("index.ejs", { chats })
})

// New Chat Route
app.get('/chats/new', (req, res) => {
    res.render("new.ejs")
})

app.get('/', (req, res) => {
    res.send("Root is Working")
})

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`)
})