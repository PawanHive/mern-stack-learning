/*
================== Path Parameters ========================

## Main Express file location: \Backend\02_Backend_2_(Node-Express)\02_Getting_started_with_Express\Express>

1. req.params
==> req.params is an object provided by Express that 
stores values from the URL path when we use dynamic 
routes.

It captures path parameters defined using : in routes.

params = parameters

--------------------------------------------------------------

2. When is req.params used?

=> req.params is used when:

    Data is sent through the URL path
    The route contains dynamic values

--------------------------------------------------------------

🔹 Syntax
app.get("/:paramName", (req, res) => {
    console.log(req.params);
});

--------------------------------------------------------------

📌 Example 1: Single Path Parameter

Route
    app.get("/:username", (req, res) => {
        console.log(req.params);
    });

Request URL
    http://localhost:8080/pawan

Output
    { username: "pawan" }

--------------------------------------------------------------

📌 Example 2: Multiple Path Parameters

Route
    app.get("/:username/:id", (req, res) => {
        console.log(req.params);
    });

Request URL
    http://localhost:8080/pawan/123

Output
    {
    username: "pawan",
    id: "123"
    }
*/