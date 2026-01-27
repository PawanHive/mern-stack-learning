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

## Why do we use UUID?

- To generate **unique IDs automatically**
- No need to manually manage IDs (`1`, `2`, `3`)
- Safe for **large & distributed systems**
- Prevents ID collision
