For more info refer: [MongoDB Documentation](https://www.mongodb.com/docs/manual/)

# #1: How to start mongoDB server

Run this command
```bash
mongod
```
Or THIS
```bash
mongod --dbpath C:\data\db
```
---
# #2: How to start mongoDB Shell

### STEP 1: START mongoDB shell

```bash
mongosh
```

### STEP 2: Verify inside mongosh
You should see something like:
```text
test>
```
---
# #3: MongoDB Shell (mongosh) – Basic Commands

This document covers the most important MongoDB shell commands every beginner should know.

---

## 1. Start MongoDB Server
```bash
mongod
```

---

## 2. Start MongoDB Shell
```bash
mongosh
```

---

## 3. Show All Databases
```bash
show dbs
```

---

## 4. Check Current Database
```bash
db
```

---

## 5. Switch / Create Database
```bash
use myDatabase
```

> If the database does not exist, MongoDB creates it automatically when you insert data.

---

## 6. Show Collections
```js
show collections
```

---

## 7. Insert One Document
```js
db.users.insertOne({
  name: "Pawan",
  age: 21,
  role: "developer"
})
```

---

## 8. Insert Multiple Documents
```js
db.users.insertMany([
  { name: "Aman", age: 22 },
  { name: "Ravi", age: 23 }
])
```

---

## 9. Find All Documents
```js
db.users.find()
```

---

## 10. Find Documents (Pretty Format)
```js
db.users.find().pretty()
```

---

## 11. Find One Document
```js
db.users.findOne({ name: "Pawan" })
```

---

## 12. Update One Document
```js
db.users.updateOne(
  { name: "Pawan" },
  { $set: { age: 22 } }
)
```

---

## 13. Update Many Documents
```js
db.users.updateMany(
  { role: "developer" },
  { $set: { active: true } }
)
```

---

## 14. Delete One Document
```js
db.users.deleteOne({ name: "Ravi" })
```

---

## 15. Delete Many Documents
```js
db.users.deleteMany({ active: false })
```

---

## 16. Drop a Collection
```js
db.users.drop()
```

---

## 17. Drop a Database
```js
db.dropDatabase()
```

---

## 18. Exit MongoDB Shell
```js
exit
```

---

## MongoDB vs SQL (quick brain map)
|  SQL   | 	MongoDB  |
|-----|----------|
Database  |	Database
Table  |	Collection
Row  |	Document
Column  |	Field
JOIN  |	Embedded / Reference