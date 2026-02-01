For more info refer: [MongoDB Documentation](https://www.mongodb.com/docs/manual/)

# #1: Document (in MongoDB)

A **document** is the **basic unit of data** in MongoDB.

Think of it like:
- A **row** in SQL
- A **JSON object** in JavaScript

MongoDB stores documents internally in **BSON (Binary JSON)** format.

---

### 🧾 Example of a Document
```js
    {
      _id: ObjectId("65b0f3c8a1b2c3d4e5f6a789"),
      name: "Pawan",
      age: 22,
      skills: ["JavaScript", "Node.js", "MongoDB"],
      isActive: true
    }
```
---

### 🔑 Key Points about Documents

- Stored as **key–value pairs**
- Keys are always **strings**
- Values can be:
  - String
  - Number
  - Boolean
  - Array
  - Object (nested document)
- Every document has a **unique `_id` field**
- Documents in the same collection **do NOT need the same structure**
- MongoDB is **schema-flexible**

---

# #2: Collection (in MongoDB)

A **collection** is a **group of related documents**.

Think of it like:
- A **table** in SQL
- An **array of objects** in JavaScript

---

### 📂 Example

Database and collection:
```text
    Database: schoolDB
    Collection: students
```

Documents inside the `students` collection:
```js
    { name: "Pawan", age: 22 }
    { name: "Amit", age: 24, city: "Delhi" }
    { name: "Neha", skills: ["JS", "React"] }
```
👉 **Notice:**  
Each document has a different structure — MongoDB allows this.

---

### 🔑 Key Points about Collections

- Collections **do not enforce a schema**
- No need to define structure before inserting data
- Documents inside a collection are **logically related**
- A collection is **created automatically** when data is inserted

---

## 🧠 SQL vs MongoDB (Quick Mapping)

| SQL          | MongoDB      |
|--------------|--------------|
| Database     | Database     |
| Table        | Collection   |
| Row          | Document     |
| Column       | Field        |
| Primary Key  | `_id`        |

---

## 🧩 Relationship Between Database, Collection, and Document

- **Database** → contains collections
- **Collection** → contains documents
- **Document** → contains fields (key–value pairs)

Structure overview:

    Database
      └── Collection
           └── Document
                └── Fields

---

For more info refer: [MongoDB Documentation](https://www.mongodb.com/docs/manual/)