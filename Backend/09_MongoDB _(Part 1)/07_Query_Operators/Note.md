For more info refer: [MongoDB Query Operators](https://www.mongodb.com/docs/manual/reference/mql/query-predicates/comparison/)

# MongoDB Query Operators

## What are Query Operators?
Query Operators in MongoDB are **special keywords (mostly starting with `$`)** used to **filter documents** based on conditions.

---

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

## 3: Element Operators

### `$exists` — Field exists or not
```js
db.student.find({ city: { $exists: true } })
```
➡ Documents that contain city field

### `$type` — Field data type
```js
db.student.find({ age: { $type: "number" } })
```

## 4: Array Operators

### `$all` — Array must contain all values
```js
db.student.find({
  skills: { $all: ["JavaScript", "MongoDB"] }
})
```

### `$size` — Exact array length
```js
db.student.find({
  skills: { $size: 2 }
})
```

### `$elemMatch` — Match inside array
```js
db.student.find({
  skills: { $elemMatch: { $eq: "JavaScript" } }
})
```

### SQL vs MongoDB (Quick Mapping)
|SQL  Example|	MongoDB Equivalent|
|-----------|---------------------|
WHERE age > 20	|{ age: { $gt: 20 } }
AND / OR	|$and / $or
IN (20,22)	|{ $in: [20, 22] }


# #Sigma Prime Note

Query Operators

Q. Find students where marks > 75
```js
 db.student.find({marks: {$gt: 75}})
```

Q. Find students who live in Delhi or Mumbai
```js
 db.student.find({city: {$in: ["Delhi", "Mumbai"]}})
```

Q. Find students who scored > 75 or live in Delhi
```js
 db.student.find( {$or: [ {marks {$gt: 75}}, {city: "Delhi"}]})
```