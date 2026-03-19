# MongoDB Relationships


## #1: `Approach (One-to-Few): Embedding (Child stored inside Parent)`
**Note:** 
Store the child document inside parent
```js
// Example: User & Addresses (One-to-Few)
// Approach: Embedding (Child stored inside Parent)
// ============================================

// SCHEMA DEFINITION

// USER SCHEMA → (Parent / One side)
const userSchema = new Schema({
  username: String,  // username of user

  // addresses are embedded directly inside user document
  addresses: [
    {
      _id: false,     // disables automatic _id for each address object (cleaner data)
      location: String, // street / house info
      city: String,     // city name
    },
  ],
});

// MODEL (COLLECTION)

// creating User model → collection: 'users'
const User = mongoose.model("User", userSchema);

```
### Important to note this: 
**Here:**  
In this approach *(One-to-Few)* implemented using **Embedding**  
**means:**  
here `addresses` are embedded directly inside the `user` document.

---


##  #2: `Approach (One-to-Many): Referencing (Parent stores child IDs) `
**Note:**
Store a reference of the child document inside parent

```js
// Example: Customer & their Orders (One-to-Many)
// Approach: Referencing (Parent stores child IDs)
// ============================================

// SCHEMA DEFINITIONS

// ORDER SCHEMA → (Child / Many side)
const orderSchema = new Schema({
  item: String,   // item name
  price: Number,  // item price
});


// CUSTOMER SCHEMA → (Parent / One side)
const customerSchema = new Schema({
  name: String,   // customer name

  // `orders` array will store references (ObjectIds) of `Order` documents
  orders: [
    {
      type: Schema.Types.ObjectId, // stores _id of Order document
      ref: "Order", // tells mongoose: this ID belongs to "Order" model
    },
  ],
});

// MODELS (COLLECTIONS)

// create Order model → collection: 'orders'
const Order = mongoose.model("Order", orderSchema);

// create Customer model → collection: 'customers'
const Customer = mongoose.model("Customer", customerSchema);
```
### Important to note this:
**Here:**  
In this appraoch *(One-to-Many)* implemented using **Referencing**  
**means:**  
here **reference(ObjectId) stored in Parent (Customer)** & `orders` field in customerSchema means `orders` array will store reference (ObjectId) of `Order` document inside the `Customer` document. 
**Important line:**   
`ref: "Order";` means *"These ObjectIds belongs to Order collection"*

---


## #3: `Approach (One-to-Squillions): Referencing (Child stores Parent ID)`
**Note:**
 Store a reference(ObjectId) of the parent document inside child

**Example:** 
 ```js
// Example: User & their Posts (One-to-Squillions)
// Approach: Referencing (Child stores Parent ID)
// ============================================

// SCHEMA DEFINITIONS

// USER SCHEMA → (Parent / One side)
const userSchema = new Schema({
  username: String, // username
  email: String,    // email
});


// POST SCHEMA → (Child / Many side)
const postSchema = new Schema({
  content: String, // post content
  likes: Number,   // number of likes

  // `user` object will store references (ObjectIds) of `User` document
  user: {
    type: Schema.Types.ObjectId, // stores User _id
    ref: "User", // tells mongoose this ID belongs to User model
  },
});

// MODELS

// create User model → collection: 'users'
const User = mongoose.model("User", userSchema);

// create Post model → collection: 'posts'
const Post = mongoose.model("Post", postSchema);
 ```
 ### Important to note this:
 **Here:**  
In this approach *(One-to-Squillion)*, things are totally opposite **Reference(ObjectId) stored inside (Child)** document  
**where as**  
In Approach *(One-to-Many)* **Reference(ObjectId) stored inside (Parent)** document


---
---

# # `Documentation`:  Database Denormalization Rules of Thumb (MongoDB Guide)

A practical guide to help you decide **when to embed vs reference** in MongoDB.

---

## 🌈 Core Rules of Thumb

### 1️⃣ Favor Embedding by Default
- Always **prefer embedding** data inside documents  
- Only avoid it if there is a **strong reason**

✅ Reason: Faster reads (single query, no joins)

---

### 2️⃣ Access Independently? Don’t Embed
- If a data object needs to be **queried on its own**, avoid embedding

❌ Example:
- Orders that need separate queries  
- Posts that are accessed independently  

👉 Use **referencing instead**

---

### 3️⃣ Avoid Unbounded Arrays 🚫
- Arrays should **not grow infinitely**

📌 Guidelines:
- Few (1–100) → ✅ Embed  
- Hundreds → ⚠️ Avoid embedding  
- Thousands+ → ❌ Never embed  

Also:
- Too many ObjectId references in arrays = ❌ bad design  

👉 High-cardinality = **use separate collection**

**Here:**  
*cardinality* = N = Many

Example: **1:N**  
equivalent to (One-to-Few),  
equivalent to (One-to-Many),  
equivalent to (One-to-Squillions)

---

### 4️⃣ Application-Level Joins Are OK
- Don’t fear joins in MongoDB

👉 If:
- Proper **indexes** are used  
- Proper **projection** is used  

✔ Then performance is close to SQL joins

---

### 5️⃣ Read vs Write Ratio Matters ⚖️
- If data is:
  - **Read frequently** → ✅ Denormalize (duplicate data)
  - **Updated frequently** → ❌ Avoid denormalization

📌 Why?
- Updating duplicated data everywhere = expensive

---

### 6️⃣ Model Based on Access Patterns 🧠
- There is **no fixed rule**
- Everything depends on:
  - How your app **reads data**
  - How your app **writes data**

👉 Always design schema based on:
> "How will my application use this data?"

---

## 🔥 Quick Summary Table

| Scenario | Best Approach |
|--------|-------------|
| Small related data | ✅ Embedding |
| Frequently queried separately | ✅ Referencing |
| Large datasets (1000s+) | ✅ Child Referencing |
| Read-heavy data | ✅ Denormalization |
| Write-heavy data | ❌ Avoid duplication |

---

## 💡 Final Insight

> MongoDB schema design is **query-driven, not structure-driven**

✔ Think about:
- What queries you will run  
- How often data changes  

👉 Then choose:
- **Embedding**
- **Referencing**
- **Denormalization**

---

## 🚀 Golden Rule

> “Design your schema for how your application actually uses data — not how it looks logically.”