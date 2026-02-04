## `index.js` Code Snippet Explained

```js
// ======================= Imports & Setup =======================
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");

// ======================= Server Config =======================
let port = 1000;

// ======================= View Engine Setup =======================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ======================= Database Connection =======================
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    // Connect to MongoDB (whatsapp database)
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// ======================= Routes =======================
app.get('/', (req, res) => {
    res.send("Root is Working");
});

// ======================= Server Start =======================
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});

```