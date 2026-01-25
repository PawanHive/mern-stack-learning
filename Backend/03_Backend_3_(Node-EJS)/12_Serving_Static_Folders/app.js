/*
===================== Serving Static Files ========================

🔹 How Express serves static files
Basic syntax
    app.use(express.static("public"));


📌 This tells Express:
“When the browser asks for a file, look inside the public folder.”

🔹 Recommended (safe) way

    const path = require("path");
    app.use(express.static(path.join(__dirname, "public")));

----------------------------------------------------------------------------------

🔹 Folder structure (standard)
project/
 ├── app.js
 ├── views/
 │    └── *.ejs
 └── public/
      ├── css/
      │    └── style.css
      ├── js/
      │    └── script.js
      └── images/
           └── logo.png

----------------------------------------------------------------------------------

🔹 Serving a specific folder (NOT recommended)
app.use(express.static(path.join(__dirname, "public/css")));

----------------------------------------------------------------------------------

✅ Quick revision note (copy)
express.static() allows the browser to access CSS, JS, images directly from a folder like public.
*/