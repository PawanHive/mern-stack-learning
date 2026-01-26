## Handling POST Request

👉 It means:

- Receiving data sent by the client
- Reading that data from the request body `req.body`
- Processing it (save to DB, validate, login, etc.)
- Sending a response back

### 2. Enable Body Parsing (MOST IMPORTANT)

`req.body` does NOT work automatically.
Without this, `req.body` will be undefined.
We must use middleware 👇
```js
app.use(express.urlencoded({ extended: true })); // for form data (urlencoded data)
app.use(express.json()); // make express understand JSON data ... suppose we pass (Raw body request) from hoppscotch.
```

### 3. What is `req.body`?

👉 `req.body` is an object that contains data sent by the client to the server in a POST / PUT / PATCH request.

In simple words:
req.body = data coming from the client

### 4. Basic Syntax
```js
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});
```