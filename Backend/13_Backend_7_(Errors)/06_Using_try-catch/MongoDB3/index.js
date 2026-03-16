const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

const Chat = require("./models/chat.js");

let port = 6060;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); // serving single static file .... which is (style.css)
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

// Index Route
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    // console.log(chats)
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});

// New Chat Route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404, "Page not found");      // here Error handling worked because this route is not async, but the same line of error will not invoke in async route
  res.render("new.ejs");
});

// POST Route of NewChat
app.post("/chats", async (req, res) => {
  try {
    let { from, to, msg } = req.body; // to parse this data we need to add this line in this code --- app.use(express.urlencoded({ extended: true }));
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

//new - Show Route
app.get("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    // if (!chat) {
    //   throw new ExpressError(404, "Chat not found");    // when the error is called asyncronously (means when error invokes in async route) then express didn't call next(), because of that app crashed, thats why we need to wrap our error handler in next(errhandler)
    // }
    if (!chat) {
      next(new ExpressError(404, "Chat not found")); // request route: http://localhost:1010/chats/69b4b00672f7e88eac1deec6        here we change last 2 letter from 5e to c6 and also removed ? mark at the end, (length) of the id should be same otherwise we will get mongoose syntax error
    }
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

// Edit Chat Route
app.get("/chats/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    console.log(chat);
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

// Update Chat Route
app.put("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg },
      { runValidatiors: true, new: true },
    );
    res.redirect("/chats");
    // console.log(updatedChat)
  } catch (err) {
    next(err);
  }
});

// DELETE Route
app.delete("/chats/:id", async (req, res) => {
  try {
  let { id } = req.params;
  let deletedchat = await Chat.findByIdAndDelete(id);
  console.log(deletedchat);
  res.redirect("/chats");
  } catch (err) {
    next (err);
  }
});

app.get("/", (req, res) => {
  res.send("Root is Working");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
