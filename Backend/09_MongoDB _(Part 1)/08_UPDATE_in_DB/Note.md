# UPDATE in MongoDB

## What is UPDATE?
UPDATE in MongoDB is used to **modify existing documents** in a collection.

In simple words:
👉 It changes data that is already stored in the database.

SQL comparison:
UPDATE table SET column = value WHERE condition;

MongoDB does the same thing but using **update methods**.

---

## #1: MongoDB Update Methods

MongoDB mainly provides these update methods:

- updateOne()
- updateMany()
- replaceOne()

---

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

Meaning:
- Find the first document where name is "Pawan"
- Update age to 23
- Other fields remain unchanged

---

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

Meaning:
- Find all students from Delhi
- Add or update isActive to true

---

##  3. replaceOne()

Replaces the **entire document** except the _id.

Example:
```js
db.student.replaceOne(
  { name: "Amit" },
  { name: "Amit", age: 25, city: "Mumbai" }
)
```
⚠ Important:
- Old document fields are removed
- Only the new fields remain

---

## Update Operators

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
---

## Upsert (Update + Insert)

If no matching document is found:
- MongoDB inserts a new document

Example:
```js
db.student.updateOne(
  { name: "Rahul" },
  { $set: { age: 21 } },
  { upsert: true }
)
```
---

## How to Check Update Result

After update, MongoDB returns:
- matchedCount → how many documents matched
- modifiedCount → how many documents were updated

---



## Summary

- UPDATE modifies existing data
- updateOne() → one document
- updateMany() → multiple documents
- $set is the most commonly used operator
- Always use update operators to avoid data loss



## ⚠ Important Note

The following operators are **NOT used with updateOne/updateMany**.
They are used inside **Aggregation Pipeline**.

---

# Aggregation Pipeline Operators

Aggregation is used when you want to **transform the shape of documents**.

Syntax:
```bash
db.collection.aggregate([ stage1, stage2, ... ])
```
---

## 1. $addFields

Adds new fields or modifies existing ones.
```js
db.student.aggregate([
  {
    $addFields: {
      isAdult: true
    }
  }
])
```
Meaning:
- Adds a new field called isAdult
- Existing documents remain unchanged in database

---

## 2. $project

Used to:
- Include fields
- Exclude fields
- Rename fields
- Create computed fields
```js
db.student.aggregate([
  {
    $project: {
      name: 1,
      age: 1,
      _id: 0
    }
  }
])
```
Meaning:
- Shows only name and age
- Hides _id

---

## 3. $replaceRoot

Replaces the entire document with a sub-document.
```js
db.student.aggregate([
  {
    $replaceRoot: {
      newRoot: "$address"
    }
  }
])
```
Meaning:
- address object becomes the main document

---

## 4. $replaceWith

Same as $replaceRoot but simpler syntax.
```js
db.student.aggregate([
  {
    $replaceWith: "$address"
  }
])
```
---

## $replaceRoot vs $replaceWith

- $replaceRoot → older, more verbose
- $replaceWith → newer, cleaner
- Both do the same job

---

## When to Use What?

UPDATE operators:
- Use when you want to permanently change stored data

Aggregation operators:
- Use when you want to transform data for viewing or reporting

---

## SQL Comparison

SQL:
SELECT name, age FROM students;

MongoDB:
Use $project