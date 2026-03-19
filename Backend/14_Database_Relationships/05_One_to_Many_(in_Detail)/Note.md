# MongoDB Relationships (One-to-Many using Referencing)

## 1. What is One-to-Many?

A **one-to-many relationship** means:

> One document is related to many other documents

---

## 2. Why Referencing (Not Embedding)?

In MongoDB, we use **referencing** instead of embedding when:

- Data is **large or unbounded**
- Child documents can grow **a lot (100s, 1000s)**
- Need to **query child data independently**

---

## 3. Real-Life Example

### Example: User & Posts

- One user can create **many posts**
- Posts can grow infinitely

👉 So we use **referencing**

---

## 4. Data Structure (Referencing)

### Users Collection

```js
{
  _id: ObjectId("user1"),
  name: "Pawan",
  email: "pawan@example.com"
}
```

### Posts Collection

```js
{
  _id: ObjectId("post1"),
  title: "My First Post",
  content: "Hello world",
  user_id: ObjectId("user1")   // reference to user
}
```

---

## 5. Key Idea

- `user_id` in posts is a **reference (like foreign key in SQL)**
- One user → many posts
- Each post → one user

---

## 6. Querying Data

### Get all posts of a user

```js
db.posts.find({ user_id: ObjectId("user1") });
```

---

### Join-like Operation using `$lookup`

```js
db.users.aggregate([
  {
    $lookup: {
      from: "posts",
      localField: "_id",
      foreignField: "user_id",
      as: "user_posts",
    },
  },
]);
```

- `$lookup` works like a **JOIN in SQL**

---

## 7. Alternative Design (Parent Referencing Children)

```js
// users
{
  _id: ObjectId("user1"),
  name: "Pawan",
  post_ids: [ObjectId("p1"), ObjectId("p2")]
}
```

- Less common for large data
- Array can grow too big ❌

---

## 8. Why Child Referencing is Better?

✔ Scalable (no array limit issues)  
✔ Better for large datasets  
✔ Easier to query posts independently

---

## 9. When to Use Referencing (1:N)

Use referencing when:

- Data is **large or growing**
- Need **flexibility in queries**
- Child documents are **accessed separately**

---

## 10. Embedding vs Referencing (Quick View)

| Feature     | Embedding    | Referencing  |
| ----------- | ------------ | ------------ |
| Data size   | Small        | Large        |
| Performance | Faster reads | Needs lookup |
| Flexibility | Low          | High         |
| Scalability | Limited      | High         |

---

## 11. Visual Representation

```text
users              posts
------             ---------
_id (PK)   ◄────── user_id (reference)
name               title
                   content
```

---

## Summary

- One-to-Many = One → Many documents
- Use **referencing for large data**
- Store reference in **child collection (best practice)**
- Use `$lookup` for join-like queries 🚀

---

---

# MongoDB One-to-Many (Embedding vs Referencing)

## 1. Problem Statement

In MongoDB, One-to-Many can be implemented in **two ways**:

- Embedding
- Referencing

👉 The confusion is: **Which one should you use?**

---

## 2. One-to-Many Recap

> One document is related to many other documents

Example:

- One user → many posts
- One product → many reviews

---

# --------------------------------------------

## 3. Approach 1: Embedding

### Structure

```js
{
  _id: ObjectId("user1"),
  name: "Pawan",
  posts: [
    { title: "Post 1", content: "..." },
    { title: "Post 2", content: "..." }
  ]
}
```

---

### When to Use Embedding?

Use embedding when:

- Data is **small and limited**
- Child data is **always accessed with parent**
- No need to query child documents separately

---

### Advantages

- 🚀 Very fast (single query)
- 📦 Everything in one place
- ❌ No need for `$lookup`

---

### Disadvantages

- ❌ Not scalable (array can grow large)
- ❌ 16MB document limit
- ❌ Hard to update large nested arrays

---

# --------------------------------------------

## 4. Approach 2: Referencing

### Structure

```js
// users
{
  _id: ObjectId("user1"),
  name: "Pawan"
}

// posts
{
  _id: ObjectId("post1"),
  title: "Post 1",
  content: "...",
  user_id: ObjectId("user1")
}
```

---

### When to Use Referencing?

Use referencing when:

- Data is **large or unbounded**
- Child documents grow **a lot**
- Need to **query child data separately**

---

### Advantages

- 📈 Highly scalable
- 🔍 Flexible queries
- 🧩 Better for complex apps

---

### Disadvantages

- ❌ Requires multiple queries or `$lookup`
- ❌ Slightly slower than embedding

---

# --------------------------------------------

## 5. Golden Rule (VERY IMPORTANT)

> If data is **small + bounded** → **Embedding**  
> If data is **large + growing** → **Referencing**

---

## 6. Real-World Decision Examples

### Example 1: User & Posts

- Posts can grow infinitely ❌  
  👉 Use **Referencing**

---

### Example 2: User & Addresses

- Few addresses (2–5) ✅  
  👉 Use **Embedding**

---

### Example 3: Blog & Comments

- Few comments → Embedding
- Thousands of comments → Referencing

---

# --------------------------------------------

## 7. Hybrid Approach (Advanced)

Sometimes you use **both**:

```js
{
  _id: ObjectId("post1"),
  title: "Post",
  comments: [
    { text: "Nice!", user: "A" }   // recent comments embedded
  ]
}
```

- Store **recent/small data embedded**
- Store full data in separate collection

---

## 8. Quick Comparison

| Feature     | Embedding | Referencing |
| ----------- | --------- | ----------- |
| Performance | Fast      | Slower      |
| Scalability | Low       | High        |
| Complexity  | Simple    | Complex     |
| Data Size   | Small     | Large       |

---

## 9. Visual Idea

```text
Embedding:
User → [Posts inside document]

Referencing:
User → Posts (separate collection via user_id)
```

---

## Summary

- MongoDB gives **flexibility (embedding + referencing)**
- Choose based on **data size and usage**
- Follow the **Golden Rule** 🚀
