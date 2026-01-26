/*
### What is GET & POST Requests 

1. `GET` Requests

- Used to fetch data from the server
- Does NOT change server data
- Data sent in query strings (limited, string data &
visible in URL)

Express Example (GET)
```js
app.get("/users", (req, res) => {
  res.send("All users data");
});
```

2. `POST` Requests

- Used to send data to server
- Usually creates or updates data
- Data is sent in request body
- More secure than GET

Express Example (POST)
```js
app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("User created");
});
```

### What is an `HTTP` Request?

When a client (browser, app, Postman) talks to a server, it sends an HTTP request.

### NOTE:
1. [Frontend/index.html](Backend/04_Miscellaneous/01_GET_&_POST_Request/Frontend/index.html) this file should open via FTP(file transfer protocol) means this file should directly open in Chrome.