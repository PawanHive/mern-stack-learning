const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

const Chat = require("./models/chat.js");

let port = 8000;

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
app.get(
  "/chats",
  wrapAsync(async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats)
    res.render("index.ejs", { chats });
  })
);

// New Chat Route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404, "Page not found");      // here Error handling worked because this route is not async, but the same line of error will not invoke in async route
  res.render("new.ejs");
});

// POST Route of NewChat -Create route
app.post(
  "/chats",
  wrapAsync(async (req, res) => {
    let { from, to, msg } = req.body; // to parse this data we need to add this line in this code --- app.use(express.urlencoded({ extended: true }));
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
  }),
);

// defining wrapAsync function

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

//new - Show Route
app.get(
  "/chats/:id",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    // if (!chat) {
    //   throw new ExpressError(404, "Chat not found");    // when the error is called asyncronously (means when error invokes in async route) then express didn't call next(), because of that app crashed, thats why we need to wrap our error handler in next(errhandler)
    // }
    if (!chat) {
      next(new ExpressError(404, "Chat not found")); // request route: http://localhost:1010/chats/69b4b00672f7e88eac1deec6        here we change last 2 letter from 5e to c6 and also removed ? mark at the end, (length) of the id should be same otherwise we will get mongoose syntax error
    }
    res.render("edit.ejs", { chat });
  }),
);

// Edit Chat Route
app.get(
  "/chats/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    console.log(chat);
    res.render("edit.ejs", { chat });
  }),
);

// Update Chat Route
app.put(
  "/chats/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg },
      { runValidatiors: true, new: true },
    );
    res.redirect("/chats");
    // console.log(updatedChat)
  }),
);

// DELETE Route
app.delete(
  "/chats/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedchat = await Chat.findByIdAndDelete(id);
    console.log(deletedchat);
    res.redirect("/chats");
  }),
);

app.get("/", (req, res) => {
  res.send("Root is Working");
});

const handleValidationErr = (err) => {
  console.log("This was a Validation error, Please follow rules");
  console.dir(err.message);
  return err;
}

// this middleware will print error name
app.use((err, req, res, next) => {
  console.log(err.name);
  // if(err.name === "ValidationError") {
  //   console.log("This was a Validation error, Please follow rules")     // specific error message for specifically validation error
  // }
  if(err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
})

// specific error handler for validation error

// Error Handling Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
