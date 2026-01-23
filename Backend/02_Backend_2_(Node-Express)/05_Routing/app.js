/*
======================= Routing ==============================

## Main Express file location: \Backend\02_Backend_2_(Node-Express)\02_Getting_started_with_Express\Express>

==> It is process of selecting a path for traffic in a 
network or between or across mulitple networks.

1.  What is app.get() ?
==> app.get() is used to handle GET requests.

👉 A GET request is when the client wants to READ / FETCH 
data from the server.

Syntax
    app.get(path, callback)

Example
    app.get("/", (req, res) => {
        res.send("Hello from GET request");
    });

---------------------------------------------------------------

2.  What is app.post() ?

==> app.post() is used to handle POST requests.

👉 A POST request is when the client wants to SEND data 
to the server.

Syntax
    app.post(path, callback)

Example
    app.post("/", (req, res) => {
        res.send("Data received via POST request");
    });

--------------------------------------------------------------

3.  Simple One-Line Memory Trick 🧠

GET = Give me data
POST = Please take my data
*/