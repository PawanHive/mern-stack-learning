/*
====================== Query Selector ==========================

## Main Express file location: \Backend\02_Backend_2_(Node-Express)\02_Getting_started_with_Express\Express>

1. req.query
==> req.query is an object provided by Express that 
stores query string data sent in the URL after the ? symbol.

--------------------------------------------------------------

🔹 When is req.query used?
=> req.query is used when:

    - Data is optional
    - Data is used for filtering, searching, or sorting
    - URL path should remain the same

--------------------------------------------------------------

🔹 Syntax
app.get("/route", (req, res) => {
    console.log(req.query);
});

--------------------------------------------------------------

📌 Example 1: Single Query Parameter
Request URL
    http://localhost:8080/search?name=pawan

Code
    app.get("/search", (req, res) => {
        console.log(req.query);
    });

Output
    { name: "pawan" }

--------------------------------------------------------------

📌 Example 2: Multiple Query Parameters
Request URL
    http://localhost:8080/search?name=pawan&age=21&city=delhi

Output
    {
    name: "pawan",
    age: "21",
    city: "delhi"
    }

Note: All query values are received as strings.
*/