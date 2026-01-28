## what is REST:
REST is an architectural style that defines a set of constraints(rules) to be used for creating web services.

## Why do we use REST?

We use REST because it makes communication between client and server simple, fast, and scalable.

## Important Links: 

[Best practices for REST API design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/) -- Learn whole documentation in free time (Very Important)

## What is CRUD?
**CRUD** stands for:
- **C**reate
- **R**ead
- **U**pdate
- **D**elete  

These are the **basic operations** used to manage data in applications and databases.

- `GET` - retrieves resources.
- `POST` - submits new data to the server
- `PUT` - updates existing data
- `PATCH` - update existing data partially
- `DELETE` - removes data

## Basic Layout of API for (Quora Post Project)

| Method | Route | Operation |
|----------|--------|-------|
| GET | `/posts` | to get data for all posts (index/main file)|
| POST | `/posts` | to add a new post |
| GET | `/posts/:id` | to get one post (using id) |
| PATCH | `/posts/:id` | to update specific post |
| DELETE | `/posts/:id` | to delete specific post

## What is res.redirect()?
`res.redirect()` is an **Express response method** used to redirect the browser to another URL.

👉 It sends an HTTP redirect response (usually 302).
```js
res.redirect("/posts");
```

 Browser makes a new GET request to /posts

It tells the client to make a **new request** to a different route.

### Example
```js
    app.post("/posts", (req, res) => {
    posts.push(req.body);      // save form data
    res.redirect("/posts");   // redirect to posts page
});
```
## Steps to Use UUID in Node.js

### Step:1.  Install UUID package
```bash
npm install uuid
```
### Step:2.  Import UUID in your file
```js
const { v4: uuidv4 } = require("uuid");
```

### Step:3.  Generate a UUID
```js
const id = uuidv4();
```
### Step:4.  Example use UUID as an ID
```js
posts.push({
    id: uuidv4(),
    username,
    content
});

```
Learn more about it on npmjs.com: https://www.npmjs.com/package/uuid

## What is UUID?

**UUID** stands for **Universally Unique Identifier**.

👉 It is a **unique ID** used to identify data (users, posts, orders, etc.)  
👉 The chance of two UUIDs being the same is **almost zero**.

---

## What does a UUID look like?

Example: `550e8400-e29b-41d4-a716-446655440000`

---

## Steps to Use `method-override` in Express

### 1. Install method-override package
```bash
npm install method-override
```
### 2. Import method-override in your app
```js
const methodOverride = require("method-override");
```
### 3. Use method-override middleware
```js
app.use(methodOverride("_method"));
```
This tells Express to look for _method in the request.

### 4. Create a form using POST (HTML supports only GET & POST)
```html
<form method="post" action="/resource?_method=PATCH">
    <textarea name="content"></textarea>
    <button>Update</button>
</form>
```
### 5. Create PATCH route in Express
```js
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    res.send("PATCH request working");
});
```

# Why We Use method-override

We use **`method-override`** because **HTML forms are limited** 😤  
They can send **only two HTTP methods**:

- `GET`
- `POST`

But in **RESTful applications**, we also need:
- `PUT` → update data  
- `PATCH` → partial update  
- `DELETE` → delete data  

👉 **That’s where `method-override` comes in.**


### HTML Form Limitation

HTML does **NOT** support these HTTP methods directly:

- `PUT`
- `PATCH`
- `DELETE`

So this will **not work**:

```html
<form method="DELETE">
```

### for more info
refer: https://www.npmjs.com/package/method-override