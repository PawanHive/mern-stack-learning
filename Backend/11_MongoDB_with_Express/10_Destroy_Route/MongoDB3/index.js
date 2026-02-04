const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");

const Chat = require("./models/chat.js")

let port = 1010;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));        // serving single static file .... which is (style.css)
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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

// Edit Chat Route
app.get('/chats/:id/edit', async (req, res) =>{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    console.log(chat)
    res.render("edit.ejs", { chat })
})

// Update Chat Route
app.put('/chats/:id', async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id, 
        {msg: newMsg},
        { runValidatiors: true, new: true}
    )
    res.redirect("/chats")
// console.log(updatedChat)
});

// DELETE Route
app.delete('/chats/:id', async (req, res) => {
    let { id } = req.params;
    let deletedchat = await Chat.findByIdAndDelete(id)
    console.log(deletedchat)
    res.redirect("/chats")
})

app.get('/', (req, res) => {
    res.send("Root is Working")
})

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`)
})