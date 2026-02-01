# DELETE in MongoDB

MongoDB provides commands to **remove documents** from a collection.

Delete operations affect **documents**, not fields.

---

## 1: deleteOne()

`deleteOne()` removes the **first matching document**.
```js
db.student.deleteOne(
  { name: "Pawan" }
)
```
Meaning:
- Find the first document where name is "Pawan"
- Delete only that one

---

## 2: deleteMany()

`deleteMany()` removes **all matching documents**.
```js
db.student.deleteMany(
  { age: { $lt: 18 } }
)
```
Meaning:
- Delete all students whose age is less than 18

---

## Delete All Documents in a Collection
```js
db.student.deleteMany({})
```
Meaning:
- Deletes everything inside student collection
- Collection still exists

⚠️ Dangerous — use carefully

---

## Delete by _id
```js
db.student.deleteOne(
  { _id: ObjectId("65b0f3c8a1b2c3d4e5f6a789") }
)
```
Best practice when deleting a specific document.

---

## Delete with Multiple Conditions
```js
db.student.deleteMany(
  {
    age: { $gt: 20 },
    city: "Delhi"
  }
)
```
Meaning:
- Age greater than 20 AND city is Delhi

---
## Drop a Collection (Delete Collection Itself)
```js
db.student.drop()
```
Meaning:
- Deletes the collection
- Deletes all documents
- Collection name removed

---

## Drop a Database
```js
db.dropDatabase()
```
Meaning:
- Deletes the current database completely

⚠️ Very dangerous

---

## Check Before Deleting (Best Practice)

Always run find() first:
```js
db.student.find(
  { age: { $lt: 18 } }
)
```
Then run delete command.

---

## SQL vs MongoDB (DELETE)

SQL:
`DELETE FROM students WHERE age < 18;`

MongoDB:
```js
db.student.deleteMany({ age: { $lt: 18 } })
```
---

## Key Takeaways

- deleteOne → removes one document
- deleteMany → removes multiple documents
- deleteMany({}) → clears collection
- drop() → removes collection
- dropDatabase() → removes database
- Always verify with find() before deleting
