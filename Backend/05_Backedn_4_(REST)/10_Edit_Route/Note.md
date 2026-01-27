## Sigma Prime Note:
### Create Form for Update: `PATCH/posts/:id`
Edit Route

| Method | Route | Operation |
|----------|--------|-------|
| `GET` | `/posts/:id/edit` | Serve the edit form |

---
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

### for more info
refer: https://www.npmjs.com/package/method-override