## `index.js` code snippet explained

```js
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override"); // allows PUT / DELETE via forms

const Chat = require("./models/chat.js");

let port = 9000;

/* ===================== APP CONFIG ===================== */

// set EJS as view engine
app.set("view engine", "ejs");

// tell express where views folder exists
app.set("views", path.join(__dirname, "views"));

// serve static files (CSS, images, JS) from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

// enable method override (?_method=PUT or DELETE)
app.use(methodOverride("_method"));

/* ===================== DB CONNECTION ===================== */

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

/* ===================== ROUTES ===================== */

// INDEX ROUTE → show all chats
app.get('/chats', async (req, res) => {
    let chats = await Chat.find(); // fetch all chats from DB
    res.render("index.ejs", { chats });
});

// NEW CHAT FORM ROUTE
app.get('/chats/new', (req, res) => {
    res.render("new.ejs");
});

// CREATE NEW CHAT (POST)
app.post('/chats', (req, res) => {
    let { from, to, msg } = req.body; // data from form

    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(), // timestamp
    });

    newChat
        .save()
        .then(() => {
            console.log("Data saved successfully");
        })
        .catch((err) => {
            console.log(err);
        });

    res.redirect("/chats");
});

// EDIT CHAT FORM ROUTE
app.get('/chats/:id/edit', async (req, res) => {
    let { id } = req.params;          // get id from URL
    let chat = await Chat.findById(id); // fetch chat from DB
    res.render("edit.ejs", { chat });
});

/* =========================================================
   UPDATE CHAT ROUTE (PUT)
   ========================================================= */

/*
 WHY PUT?
 ----------
 - PUT is used to UPDATE existing data
 - REST rule:
     POST   → create
     GET    → read
     PUT    → update
     DELETE → delete

 WHY method-override?
 --------------------
 - HTML forms support only GET and POST
 - method-override converts POST into PUT using:
     ?_method=PUT
*/

app.put('/chats/:id', async (req, res) => {

    // extract chat id from URL
    let { id } = req.params;

    // rename msg → newMsg (clean & readable)
    let { msg: newMsg } = req.body;

    /*
      findByIdAndUpdate() does THREE things:
      1️⃣ finds document by _id
      2️⃣ updates given field(s)
      3️⃣ saves it back to DB
    */

    let updatedChat = await Chat.findByIdAndUpdate(
        id,                    // which document to update
        { msg: newMsg.trim() },// updated value (trim removes \n spaces)
        {
            runValidators: true, // run schema validations (IMPORTANT)
            new: true            // return updated document, not old one
        }
    );

    /*
      runValidators: true
      -------------------
      - ensures schema rules apply on update
      - otherwise mongoose skips validations on update

      new: true
      ---------
      - false → returns OLD document
      - true  → returns UPDATED document
    */

    // console.log(updatedChat); // useful for debugging

    // redirect back to index page
    res.redirect("/chats");
});

// ROOT CHECK
app.get('/', (req, res) => {
    res.send("Root is Working");
});

// SERVER START
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});

```
---

## `./views/edit.ejs` code snippet explained

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- Makes page responsive on mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit your message</title>
</head>
<body>

    <!-- Showing chat id just for reference/debugging -->
    <p>
        Edit your message: 
        <b><%= chat._id %></b>
    </p>

    <!-- Showing sender and receiver (read-only info) -->
    <p>
        This chat was sent from 
        <b><%= chat.from %></b> 
        to 
        <b><%= chat.to %></b>
    </p>

    <!-- 
        FORM DETAILS:
        -------------
        method="POST"
        - HTML forms only support GET & POST

        action="/chats/<id>?_method=PUT"
        - method-override converts POST → PUT
        - this hits app.put('/chats/:id')
    -->
    <form method="POST" action="/chats/<%= chat._id %>?_method=PUT">

        <!-- 
            textarea name="msg"
            --------------------
            - name MUST match req.body.msg
            - rows & cols control textarea size

            ⚠ IMPORTANT NOTE:
            -----------------
            You used placeholder="<%= chat.msg %>"

            placeholder:
            - shows text as a hint
            - does NOT submit value automatically

            If user submits without typing:
            → msg will be EMPTY
        -->
        <textarea 
            name="msg" 
            rows="6" 
            cols="50" 
            placeholder="<%= chat.msg %>">
        </textarea>

        <br>

        <!-- Submits form → PUT /chats/:id -->
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