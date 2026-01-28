# res.redirect()

## What is res.redirect()?
`res.redirect()` is an **Express response method** used to redirect the browser to another URL.

👉 It sends an HTTP redirect response (usually 302).
```js
res.redirect("/posts");
```

 Browser makes a new GET request to /posts

It tells the client to make a **new request** to a different route.

---

## When do we use `res.redirect()`?

### Used when:
- Handling **HTML form submissions**
- Using **EJS / server-side rendering**
- After `POST`, `PUT`, or `DELETE` to navigate to another page

### Example
```js
    app.post("/posts", (req, res) => {
    posts.push(req.body);      // save form data
    res.redirect("/posts");   // redirect to posts page
});
```

## Sigma Prime Note:

Redirect:
`res.redirect(URL)`