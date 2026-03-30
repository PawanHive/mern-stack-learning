# 🧩 EJS (Embedded JavaScript Templates)

## 📌 What is EJS?

EJS is a simple templating language that lets you generate HTML markup using plain JavaScript.

Install EJS:
~~~bash
npm i ejs
~~~

---

## ❓ Why do we use EJS?

Because HTML alone is **static (dumb)** 😅

HTML cannot:
- Use variables
- Use loops
- Use conditions
- Show dynamic data
- Reuse components

👉 EJS makes HTML **dynamic + smart**

---

# ⚙️ Using EJS

## 📦 Installation Steps

1. Go to your project folder

2. Initialize npm (if not already)
~~~bash
npm init -y
~~~

3. Install EJS
~~~bash
npm i ejs
~~~

4. Verify installation in `package.json`
~~~json
"dependencies": {
  "ejs": "^3.x.x"
}
~~~

5. Set EJS as view engine in Express
~~~js
app.set("view engine", "ejs");
~~~

👉 No need to `require("ejs")`

6. Create folder structure:
~~~
project/
├── views/
│   └── home.ejs
├── index.js
~~~

7. Test EJS:
~~~js
app.get("/", (req, res) => {
  res.render("home");
});
~~~

---

# 📁 Views Directory

## 📌 What is Views Directory?

The **views folder** is where all your EJS templates are stored.

👉 It contains `.ejs` files used to generate HTML

---

## 📂 Typical Structure

~~~
project/
├── views/
│   ├── home.ejs
│   ├── profile.ejs
│   └── login.ejs
├── public/
├── index.js
└── package.json
~~~

---

## ⚙️ How Express Finds Views

~~~js
app.set("views", path.join(__dirname, "views"));
~~~

👉 This tells Express where your templates are located

---

# 🔗 Interpolation in EJS

## 📌 What is Interpolation?

Interpolation means inserting **dynamic data into HTML** at runtime.

👉 Backend → Frontend connection

---

## ✨ One-Line Definition

Interpolation = inserting backend data into HTML using `<%= %>`

---

## 🏷️ EJS Tags

| Tag      | Purpose |
|----------|--------|
| `<%= %>` | Output value (escaped) |
| `<%- %>` | Output raw HTML |
| `<% %>`  | JavaScript logic (no output) |
| `<%# %>` | Comment |

---

## 📌 Examples

### 1️⃣ Output Value
~~~ejs
<h2>Hello <%= user %></h2>
~~~

---

### 2️⃣ Raw HTML (⚠ Use carefully)
~~~ejs
<%- "<strong>Bold Text</strong>" %>
~~~

---

### 3️⃣ Logic (No Output)
~~~ejs
<% if (isLoggedIn) { %>
  <h1>Welcome back</h1>
<% } %>
~~~

---

## 💡 Why Interpolation is Important?

- Makes pages dynamic
- Connects backend to frontend
- Avoids hardcoding
- Used in real-world apps

---

# 🔄 Passing Data to EJS

## 📌 What does it mean?

Sending data from Express (backend) → EJS (frontend)

---

## 📊 Examples

### ✅ String
~~~js
res.render("page", { title: "Home Page" });
~~~

---

### ✅ Number
~~~js
res.render("page", { count: 10 });
~~~

---

### ✅ Array
~~~js
res.render("page", { fruits: ["Apple", "Banana", "Mango"] });
~~~

~~~ejs
<ul>
  <% fruits.forEach(fruit => { %>
    <li><%= fruit %></li>
  <% }) %>
</ul>
~~~

---

### ✅ Object
~~~js
res.render("profile", {
  user: { name: "Pawan", age: 21 }
});
~~~

~~~ejs
<p>Name: <%= user.name %></p>
<p>Age: <%= user.age %></p>
~~~

---

### ✅ Route Parameters (Dynamic URL)
~~~js
app.get("/user/:name", (req, res) => {
  res.render("user", { username: req.params.name });
});
~~~

~~~ejs
<h1>Hello <%= username %></h1>
~~~

---

### ✅ Query Parameters
~~~js
app.get("/search", (req, res) => {
  res.render("search", { q: req.query.q });
});
~~~

---

# 🔀 Conditional Statements in EJS

## 🎯 Example: Dice Roll

👉 Roll again if value is 6

~~~ejs
<% if (dice === 6) { %>
  <h2>Roll Again!</h2>
<% } else { %>
  <h2>You got <%= dice %></h2>
<% } %>
~~~

---

# ⚡ EJS Shortcuts (VS Code Snippets)

| Shortcut  | Meaning                         | Actual EJS Code                                      |
|-----------|---------------------------------|------------------------------------------------------|
| `ejs`     | No Output (scriptlet)           | `<% %>`                                              |
| `ejsesc`  | Output Escaped                  | `<%= value %>`                                       |
| `ejsinc`  | Include                         | `<%- include("file") %>`                             |
| `ejscom`  | Comment                         | `<%# This is comment %>`                             |
| `ejseach` | ForEach loop                    | `<% array.forEach(item => { %> ... <% }) %>`         |
| `ejselif` | Else If                         | `<% } else if (condition) { %>`                      |
| `ejsfor`  | For loop                        | `<% for(let i=0; i<n; i++) { %> ... <% } %>`         |
| `ejsif`   | If statement                    | `<% if(condition) { %> ... <% } %>`                  |
| `ejslit`  | Literal (rarely used)           | `<%# or plain text / rarely used %>`                 |
| `ejsout`  | Output Value (same as escaped)  | `<%= value %>`                                       |


---

# 🚀 Final Summary

- EJS makes HTML dynamic
- Works with Express easily
- Uses `<%= %>` for output
- Uses `<% %>` for logic
- Data is passed using `res.render()`
- Views folder stores templates

---

🔥 Now you're ready to build dynamic web apps with EJS!

# 📦 Serving Static Files (Express)

## 🔹 How Express Serves Static Files

### ✅ Basic Syntax
~~~js
app.use(express.static("public"));
~~~

📌 This tells Express:

> “When the browser asks for a file, look inside the `public` folder.”

---

## 🔹 Recommended (Safe) Way

~~~js
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
~~~

👉 This ensures correct absolute path handling

---

## 📂 Folder Structure (Standard)

~~~
project/
├── app.js
├── views/
│   └── *.ejs
└── public/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── images/
        └── logo.png
~~~

---

## ⚠️ Serving a Specific Folder (NOT Recommended)

~~~js
app.use(express.static(path.join(__dirname, "public/css")));
~~~

❌ Limits access only to CSS files  
❌ Not scalable for real projects

---

## ✨ Quick Revision Note

👉 `express.static()` allows the browser to directly access:
- CSS files
- JavaScript files
- Images

from a folder like `public`

---

# 🔁 Includes in EJS

## 🔹 What is Include in EJS?

`include` lets you reuse common HTML parts like:
- Header
- Footer
- Navbar

👉 Instead of repeating code in every file

💡 Same concept as **components / partials**

---

## 🔹 Basic Syntax

~~~ejs
<%- include("filename") %>
~~~

---

## 📂 Recommended Folder Structure

~~~
views/
├── partials/
│   ├── header.ejs
│   ├── footer.ejs
│   └── navbar.ejs
├── home.ejs
├── instagram.ejs
└── error.ejs
~~~

---

## 🚀 Final Summary

- `express.static()` is used to serve static files
- Always prefer `path.join(__dirname, "public")`
- Keep assets inside the `public` folder
- Use `include` in EJS to avoid repeating code
- Store reusable components in `views/partials`

---

🔥 Now your Express + EJS setup is more structured and professional!