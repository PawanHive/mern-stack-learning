# #1: How to start mongoDB server

Run this command
> mongod

Or THIS
> mongod --dbpath C:\data\db

---
# #2: How to start mongoDB Shell

### STEP 1: START mongoDB shell
> mongosh


### STEP 2: Verify inside mongosh
You should see something like:
> test>
now here we can run Command & even mongoDB Query.


# #3: MongoDB Shell (mongosh) – Basic Commands

This document covers the most important MongoDB shell commands every beginner should know.

---

1. `mongod`: Start MongoDB Server


---

2. `mongosh`: Start MongoDB Shell


---

3. `show dbs`: Show All Databases


---

4. `db`: Check Current Database


---

5. `use myDatabase`: Switch / Create Database

- If the database does not exist, MongoDB creates it automatically when you insert data.

---

6. `show collections`: Show Collections(= Tables)

# #4: Supports More Data Types

JSON is limited. BSON supports extra types 👇

|Type  |	Example |
|-------|-----------|
String|	"name": "Pawan"
Int32|	age: 21
Int64|	large numbers
Double|	price: 99.99
Boolean|	true
Date|	ISODate("2026-02-01")
ObjectId|	_id: ObjectId("...")
Array	|["JS", "MongoDB"]
Embedded Document|	{ address: { city: "Delhi" } }
Null|	null

# #5: SQL vs MongoDB (Quick Mapping)

| SQL          | MongoDB      |
|--------------|--------------|
| Database     | Database     |
| Table        | Collection   |
| Row          | Document     |
| Column       | Field        |
| Primary Key  | `_id`        |

# #6: Relationship Between Database, Collection, and Document

- **Database** → contains collections
- **Collection** → contains documents
- **Document** → contains fields (key–value pairs)

Structure overview:

    Database
      └── Collection
           └── Document
                └── Fields

# #7: INSERT in DB 

### 1. `insertOne()`  
Inserts a single document(row) into a collection.

Syntax: 
> db.collection.insertOne()

Exmaple:
> db.student.insertOne( {name: "bob", city: "Delhi", marks: 75} )

### 2. `insertMany()`
Inserts multiple documents into a collection.

Syntax:

>db.collection.insertMany([ {}, {} ])

Example:

> db.student.insertMany( [ {name: "catlyn", marks: 64, city: "Delhi" }, { name: "donald", marks: 58, city: "Mumbai"} ])

# #8: FIND in DB

### 1. `db.collection.find()`  
Returns all documents from the collection.  
Example:
```js
 db.student.find()
```
### 2. `db.collection.find( {key: value} )`  
Returns only documents that match the condition.  
Example:
```js
 db.student.find({name: "pawan"})
```

### 3. `db.collection.findOne( {key: value} )`   
Returns only ONE matching document (the first one MongoDB finds).  
Example:
```js
db.student.findOne({ name: "pawan" })
```

# #9: Query Operators

## 1: Comparison Operators

### `$eq` — Equal to
```js
db.student.find({ age: { $eq: 22 } })
```
➡ Finds documents where age is exactly 22  
👉 Usually we write simply:
```js
db.student.find({ age: 22 })
```

### `$ne` — Not equal to
```js
db.student.find({ age: { $ne: 22 } })
```
➡ Finds documents where age is NOT 22

### `$gt` — Greater than
```js
db.student.find({ age: { $gt: 20 } })
```
➡ age > 20

### `$gte` — Greater than or equal to
```js
db.student.find({ age: { $gte: 22 } })
```
➡ age ≥ 22

### `$lt` — Less than
```js
db.student.find({ age: { $lt: 25 } })
```
➡ age < 25

### `$lte` — Less than or equal to
```js
db.student.find({ age: { $lte: 22 } })
```
➡ age ≤ 22

### `$in` — Match any value in list
```js
db.student.find({ age: { $in: [20, 22, 24] } })
```

➡ age is 20 OR 22 OR 24

### `$nin` — Not in list
```js
db.student.find({ age: { $nin: [20, 22] } })
```
➡ age is NOT 20 and NOT 22

## 2: Logical Operators
### `$and` — All conditions must be true
```js
db.student.find({
  $and: [
    { age: { $gt: 20 } },
    { city: "Delhi" }
  ]
})
```

### `$or` — Any one condition true
```js
db.student.find({
  $or: [
    { age: 22 },
    { city: "Mumbai" }
  ]
})
```

### `$not` — Opposite condition
```js
db.student.find({
  age: { $not: { $gt: 22 } }
})
```
➡ age is NOT greater than 22

### `$nor` — None of the conditions true
```js
db.student.find({
  $nor: [
    { age: 22 },
    { city: "Delhi" }
  ]
})
```

# #10: UPDATE in DB
UPDATE in MongoDB is used to **modify existing documents** in a collection.

## 1: MongoDB Update Methods

MongoDB mainly provides these update methods:

##  1. updateOne()
Used to update **only the first matching document**.

Syntax:
```js
db.collection.updateOne(<filter>, <update>, <options>)
```

Example:
```js
db.student.updateOne(
  { name: "Pawan" },
  { $set: { age: 23 } }
)
```

##  2. updateMany()
Used to update **all matching documents**.

Syntax:
```js
db.collection.updateMany(filter, update, options)
```

Example:
```js
db.student.updateMany(
  { city: "Delhi" },
  { $set: { isActive: true } }
)
```

##  3. replaceOne()
Replaces the **entire document** except the _id.

Example:
```js
db.student.replaceOne(
  { name: "Amit" },
  { name: "sumit", age: 25, city: "Mumbai" }
)
```
⚠ Important:
- Old document fields are removed
- Only the new fields remain

---

## 3: Update Operators

### 1. $set
Used to update or add a field.
```js
db.student.updateOne(
  { name: "Neha" },
  { $set: { city: "Pune" } }
)
```
---

### 2. $unset
Used to remove a field.
```js
db.student.updateOne(
  { name: "Neha" },
  { $unset: { city: "" } }
)
```
---

### 3. $inc
Used to increase or decrease numeric values.
```js
db.student.updateOne(
  { name: "Pawan" },
  { $inc: { age: 1 } }
)
```

# #11: Nesting in DB
Nesting means storing an **object inside another object**  
(or an **array of objects**) inside a MongoDB document.

This is also called:
- Embedded documents
- Nested fields

Example
```js
{
  name: "Pawan",
  age: 22,
  address: {
    city: "Delhi",
    state: "India",
    pincode: 110001
  }
}
```
Here:
- address is a nested object
- city, state, pincode are nested fields

## Find by Nested Field
Find/access all students who live in Delhi:
```js
db.student.find(
  { "address.city": "Delhi" }
)
```

# #12: DELETE in MongoDB

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

## 2: deleteMany()
`deleteMany()` removes **all matching documents**.
```js
db.student.deleteMany(
  { age: { $lt: 18 } }
)
```

## Delete All Documents in a Collection
```js
db.student.deleteMany({})
```
⚠️ Dangerous — use carefully

---

For more info refer: [MongoDB Documentation](https://www.mongodb.com/docs/manual/)

For more info refer: [MongoDB Query Operators](https://www.mongodb.com/docs/manual/reference/mql/query-predicates/comparison/)