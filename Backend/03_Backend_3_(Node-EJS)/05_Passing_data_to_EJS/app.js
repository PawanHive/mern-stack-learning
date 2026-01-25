/*
=================== Passing Data to EJS =======================
What is Passing Data to EJS?

1.  Passing data to EJS means:
==> sending data from your Express route (backend) to an 
EJS template (view) so it can be displayed dynamically.

----------------------------------------------------------------

2. Passing different types of data

✅ String
res.render("page", { title: "Home Page" });

✅ Number
res.render("page", { count: 10 });

✅ Array
res.render("page", { fruits: ["Apple", "Banana", "Mango"] });

<ul>
  <% fruits.forEach(fruit => { %>
    <li><%= fruit %></li>
  <% }) %>
</ul>

✅ Object
    res.render("profile", {
    user: { name: "Pawan", age: 21 }
    });

    <p>Name: <%= user.name %></p>
    <p>Age: <%= user.age %></p>

✅ Passing data from URL (dynamic)
Route param
    app.get("/user/:name", (req, res) => {
    res.render("user", { username: req.params.name });
    });

<h1>Hello <%= username %></h1>

✅ Query string
app.get("/search", (req, res) => {
  res.render("search", { q: req.query.q });
});
*/