For more info refer: [MongoDB Documentation](https://www.mongodb.com/docs/manual/crud)

## INSERT in MongoDB 

In MongoDB, insert means adding documents into a collection.

- You don’t insert into a database directly
- You always insert into a collection

If the database or collection doesn’t exist, MongoDB will create it automatically.

## 1. `insertOne()`
Inserts a single document into a collection.

Syntax: 
```bash
db.collection.insertOne()
```

Exmaple:
```bash
db.student.insertOne( {name: "bob", city: "Delhi", marks: 75} )
```
here `student` is collection name, in which we **insert** data


### Output Explained
```js
{
  acknowledged: true,
  insertedId: ObjectId("...")
}
```
- `acknowledged: true` → MongoDB accepted the insert
- `insertedId` → the` _id` of the new document


## 2. `find()`

shows all the data stored in the collection of the current database.

Syntax:
```bash
db.collection.find()
```
Example:
```bash
db.student.find()
```
shows all the data stored in the `student` collection of the current database.

## #Sigma Prime Note

### INSERT in DB
`insertOne()` 

`db.collection.insertOne() `  
Inserts a single documents into a collection.

`show collections`

`db.student.insertOne( {name: "adam", marks: 79} )`

`db.student.find()`

If a collection does not exit, MongoDB Creates the collections when you first store data for that collection.