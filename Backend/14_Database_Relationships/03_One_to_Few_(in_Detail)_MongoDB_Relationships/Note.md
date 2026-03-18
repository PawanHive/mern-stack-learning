# MongoDB Relationships (One-to-Few)

## 1. What is a Relationship in MongoDB?

In MongoDB, relationships are handled differently than SQL.

Instead of always using separate tables:
- MongoDB prefers **embedding (storing data together)**
- Or **referencing (linking documents using IDs)**

---

## 2. One-to-Few Relationship

### Definition

A **one-to-few relationship** means:

> One document is related to a small number of other documents

---

## 3. Real-Life Example

### Example: User & Addresses

- One user can have **a few addresses** (like 2–5)
- Not hundreds or thousands

### Similarly: 

- One **User** -> Few **Addresses**
- One **Post** -> Few **Comments**
- One **Product** -> Few **Reviews**

---

## 4. Best Way to Model → Embedding (Most Recommended)

In MongoDB, for one-to-few, we usually use **embedding**

### Example: User with few addresses
~~~js
{
  _id: ObjectId("user1"),
  name: "Pawan",
  addresses: [
    {
      street: "Street 1",
      city: "Varanasi"
    },
    {
      street: "Street 2",
      city: "Delhi"
    }
  ]
}
~~~

---

## 5. Why Embedding is Best Here?

### ✅ Advantages

1. Fast Read (Single Query)
- Everything comes in one query
```js
db.users.find({ name: "Pawan" })
```

2. No Joins Required
- MongoDB avoids joins (unlike SQL)

3. Simple Structure
- Easy to understand & maintain

4. Atomic Updates
- Entire document updates safely
---

## 6. When to Use One-to-Few (Embedding)

Use embedding when:

- Number of related items(data) is **small and limited**
- Data is **frequently accessed together**
- No need to query child data independently

---

## 7. Advantages

- 🚀 Fast performance (single query)
- 📦 All data in one place
- 🔁 Easy to read/update

---

## 8. Limitations

- Document size limit: **16MB**
- Not good if data grows large
- Harder to update individual nested items in complex cases

---

## 9. Alternative: Referencing (Less Common Here)
If embedding is not suitable, use references.
~~~js
// user collection
{
  _id: ObjectId("user1"),
  name: "Pawan",
  address_ids: [ObjectId("a1"), ObjectId("a2")]
}

// addresses collection
{
  _id: ObjectId("a1"),
  street: "Street 1",
  city: "Varanasi"
}
~~~

- Used if data grows or needs separate access

---

## 10. Embedding vs Referencing

| Feature        | Embedding          | Referencing        |
|---------------|-------------------|--------------------|
| Performance   | Fast (no join)     | Slower (needs lookup) |
| Data size     | Small              | Large/Scalable     |
| Complexity    | Simple             | More complex       |

---

## 11. Key Rule (Very Important)

> If data is small and always used together → **Embed**  
> If data is large or grows → **Reference**

---

## Summary

- One-to-Few = small number of related data  
- Best approach → **Embedding**  
- Improves performance and simplicity  
- Avoid if data becomes large 🚀