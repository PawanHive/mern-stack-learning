const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");

const Chat = require("./models/chat.js")

let port = 6060;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));        // serving single static file .... which is (style.css)

app.use(express.urlencoded({ extended: true }));

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

// POST Route of NewChat
app.post('/chats', (req, res) => {
    let { from, to, msg } = req.body;      // to parse this data we need to add this line in this code --- app.use(express.urlencoded({ extended: true }));        
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    })
    newChat                                 // here we used .then() but we an also use 'async & await'
        .save()
        .then((res) => {
            console.log("Data saved successfully");
        })
        .catch((err) => {
            console.log(err);
        })
    // console.log(newChat)
    res.redirect("/chats");
})

app.get('/', (req, res) => {
    res.send("Root is Working")
})

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`)
})