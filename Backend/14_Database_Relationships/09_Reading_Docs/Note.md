# Important Links: 

**Database relationship rules of thumb** [https://www.mongodb.com/company/blog/mongodb/6-rules-of-thumb-for-mongodb-schema-design](https://www.mongodb.com/company/blog/mongodb/6-rules-of-thumb-for-mongodb-schema-design)


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