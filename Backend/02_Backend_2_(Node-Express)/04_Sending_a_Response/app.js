/*
====================== res.send() ==========================

## Main Express file location: \Backend\02_Backend_2_(Node-Express)\02_Getting_started_with_Express\Express>

1. res.send():
==> res.send() is used to send a response from the 
server to the client and end the request–response cycle.

📌In short:
==> It sends data back to the browser / API client.

-------------------------------------------------------------

2. Basic Example:

app.get("/", (req, res) => {
  res.send("Hello World");
});

-------------------------------------------------------------

3.  What can res.send() send?

1️⃣ String
res.send("Welcome to Express");

2️⃣ Object / Array (auto converts to JSON)
res.send({ name: "Pawan", age: 22 });

3️⃣ HTML
res.send("<h1>Hello Express</h1>");

-------------------------------------------------------------

4. What happens internally?

When you call res.send():

    - Express sets proper headers
    - Sends the response data
    - Closes the response

⚠️ After res.send(), you cannot send another response.

❌ This will cause error:
    res.send("First");
    res.send("Second"); // ❌

*/