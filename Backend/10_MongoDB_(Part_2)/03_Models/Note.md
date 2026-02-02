# 📦 What is a Model in Mongoose?

A **Model** is a **JavaScript class** created from a **Schema**.

### A model:
- 👉 Represents a **MongoDB collection**
- 👉 Lets you **create, read, update, delete (CRUD)** documents
- 👉 Enforces **rules defined in the schema**

---

## 📝 One-line Definition

A model is the interface through which your **Node.js application** talks to a **MongoDB collection**.

---

## 🔗 Relationship: Schema vs Model

Schema  → defines structure & rules  
Model   → uses schema to interact with the database

---

## 🧠 Key Terminology

| Thing     | Purpose       |
|----------|---------------|
| Schema   | Blueprint     |
| Model    | Worker(who create document(row))        |
| Document | Actual data   |

---

## 🧠 What a Model Actually Does

A model can:
- Create documents
- Validate data
- Query the database
- Update records
- Delete records
- Run middleware (hooks)
- Handle relationships between collections

👉 **Without a model, you cannot interact with MongoDB using Mongoose**

---

## 🏗️ Creating a Model (Step-by-Step)

### STEP 1: Create a Schema
```js
    const userSchema = new mongoose.Schema({
      name: String,
      age: Number,
      email: String
    });
```
---

### STEP 2: Create the Model
```js
    const User = mongoose.model("User", userSchema);
```
**here:**   
const `User` --> this `User` is Model Instance
mongoose.model(`"User"`, userSchema) --> this `"User"` is collection_name

**Note:**  
`"User"` --> will automatically turns into `users` as collection name

## 📌 MongoDB Collection Created
```bash
    users
```
- Mongoose automatically **pluralizes** the model name
- The collection is created **only when data is inserted**


### Rules to Create Schema

1. Use `camelCase` for schema name
userSchema

2. Define schema **before creating model**

3. Clearly define **field data types**
`String`, `Number`, `Boolean`, `Date`, `ObjectId`, `Array`

4. Use **validation** with objects
`required`, `unique`, `min`, `max`

5. Mark important fields as **required**

6. Use **timestamps** when needed
`createdAt`, `updatedAt`

7. Keep **one schema for one entity**

8. Use **ObjectId + ref** for relationships

9. Schema = **structure & validation only**
(no business logic)


### Rule to Create Model:

0. **Model_name & Collection_name should be exactly same**

1. **Model name must be singular & capitalized****  
`User`, `Post`, `Product`

2. **One model per schema**  
One schema → one model

3. **Model name must be unique**  
Define once, reuse everywhere

4. **Do not pluralize model name**  
Mongoose auto-creates plural collection
`User` → `users`

5. **Create model after defining schema**  
Schema first, model second

6. **Create model only once (not inside functions)**  
Put it in `/models` folder

7. **Export the model**  
So it can be used in `routes/controllers`

8. **Use `nouns` for model names**  
Represent real entities like `User` not `creatUser`

---


---

## 🏁 Final Summary

Schema   → Structure & rules  
Model    → Database operations  
Document → Stored data  

Models are the **core bridge** between Node.js and MongoDB when using Mongoose.

## `index.js` Code Snippet Explained
```js
// ====================== IMPORT MONGOOSE ======================
const mongoose = require("mongoose");


// ====================== DATABASE CONNECTION ======================
main()
  .then(() => {
    console.log("connection successful"); // runs if DB connects successfully
  })
  .catch((err) => console.log(err)); // runs if connection fails

async function main() {
  // Connect Node.js application to MongoDB database named "test"
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


// ====================== SCHEMA DEFINITION ======================
const userSchema = new mongoose.Schema({
  name: String,   // user's name
  email: String,  // user's email
  age: Number,    // user's age
});


// ====================== MODEL CREATION ======================
const User = mongoose.model("User", userSchema); 
// Creates "User" model → stores data in "users" collection


// ====================== OPTIONAL MODEL ======================
// const Employee = mongoose.model("Employee", userSchema);
// Would create another model → "employees" collection
```