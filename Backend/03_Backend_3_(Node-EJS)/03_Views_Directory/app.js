/*
===================== views Direcory ======================

The views directory is a core concept when using 
Express + EJS.

-------------------------------------------------------------------------
1. What is the Views Directory?

👉 The views directory is the folder where you store 
all your template files
(like .ejs) that Express uses to generate HTML pages.

In short:
Views folder = place where EJS (HTML templates) live

-------------------------------------------------------------------------
2. Typical project structure

project/
 ├── views/
 │    ├── home.ejs
 │    ├── profile.ejs
 │    └── login.ejs
 ├── public/
 ├── index.js
 └── package.json

-------------------------------------------------------------------------

3. How Express knows about views

=> This line tells Express where the views folder is:

    app.set("views", path.join(__dirname, "views"));

Meaning:
“My EJS templates are inside this folder.”
*/