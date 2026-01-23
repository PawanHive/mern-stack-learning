/*
====================== app.use ==========================

## Main Express file location: \Backend\02_Backend_2_(Node-Express)\02_Getting_started_with_Express\Express>

1. What does app.use() do?

==> app.use() is used to apply middleware in an Express 
application.

📌 Middleware = a function that runs between request and 
response.

----------------------------------------------------------

2. Simple Meaning

    -> app.use() tells Express:
    “Run this function for incoming requests.”

----------------------------------------------------------

3. Request–Response Flow
Client Request → middleware → route → response

Middleware can:

    - read request
    - modify request
    - send response
    - pass control to next step

----------------------------------------------------------------
4. Basic Example

app.use((req, res, next) => {
  console.log("Request received");
  next(); // move to next middleware / route
});
*/