/*
====================== Using EJS =============================

3. How to Install EJS

1️⃣ Make sure you are inside your project folder

2️⃣ Initialize npm (if not already)
    Run: npm init -y

    This creates:
    package.json

3️⃣ Install EJS
    Run: npm i ejs

4️⃣ Verify installation
=> Check package.json:

    "dependencies": {
    "ejs": "^3.x.x"
    }

5️⃣ Set EJS as view engine in Express

    app.set("view engine", "ejs");

👉 No need to require("ejs") manually

6️⃣ Create views folder & .ejs file
    project/
    ├── views/
    │    └── home.ejs
    ├── index.js

7️⃣ Test it
app.get("/", (req, res) => {
  res.render("home");
});
*/