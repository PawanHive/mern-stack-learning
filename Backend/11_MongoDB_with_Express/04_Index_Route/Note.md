## `index.js` code snippet explained

```js
// ======================= Imports & App Setup =======================
// Express is used to create the server and handle routes
const express = require("express");
const app = express();

// Mongoose is used to connect and work with MongoDB
const mongoose = require('mongoose');

// Path helps in safely working with file/folder paths
const path = require("path");

// ======================= Mongoose Model =======================
// Chat model represents chat documents in MongoDB
const Chat = require("./models/chat.js");

// ======================= Server Configuration =======================
let port = 4000;

// ======================= View Engine Setup =======================
// Set EJS as view engine for rendering dynamic HTML pages
// Define the folder where EJS files are stored
app.set("view engine", "ejs");
app.

```

## `./views/index.ejs` code snippet explained 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- ======================= Meta & Page Setup ======================= -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Whatsapp</title>

    <!-- ======================= Styles ======================= -->
    <!-- style.css is loaded from public folder via express.static -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- ======================= Page Headings ======================= -->
    <h1>Index Page</h1>
    <h3>All Chats!</h3>

    <!-- ======================= Chats Loop (EJS) ======================= -->
    <!-- Loop through chats array sent from backend -->
    <% for (let chat of chats) { %>

        <div class="chat">
            <!-- Sender name -->
            <p>From: <i><%= chat.from %></i></p>

            <!-- Message content -->
            <div class="msg">
                <!-- <%= %> outputs escaped data -->
                <p><%= chat.msg %></p>
            </div>

            <!-- Receiver name -->
            <p>Received by <i><%= chat.to %></i></p>

            <hr>
        </div>

        <br><br>

    <% } %>

</body>

</html>

```
---

## `./public/style.css` code snippet explained 

```css
/* ======================= Page Layout ======================= */
/* Add left spacing to whole page */
body {
    margin-left: 20px;
}

/* ======================= Chat Container ======================= */
/* Style for each chat box */
.chat {
    background-color: aliceblue;   /* light background for chat */
    padding: 20px;                 /* space inside chat box */
    border-radius: 16px;           /* rounded corners */
    display: inline-block;         /* shrink to content width */
}

/* ======================= Message Bubble ======================= */
/* Highlight message text */
.msg {
    background-color: dodgerblue;  /* message bubble color */
    color: white;                  /* text color */
    border-radius: 16px;           /* rounded bubble */
    padding: 5px 15px;             /* inner spacing */
}

```
---
# #Sigma Prime Note

## Chats
index Route

`GET /chats`