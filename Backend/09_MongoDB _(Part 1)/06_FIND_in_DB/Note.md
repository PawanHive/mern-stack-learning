## FIND in DB:

1. `db.collection.find()`  
Returns all documents from the collection.
Example:
```js
db.student.find()
```

2. `db.collection.find( {key: value} )`  
Returns only documents that match the condition.
Example:
```js
db.student.find({name: "pawan"})
```
3. `db.collection.findOne( {key: value} )`   
Returns only ONE matching document (the first one MongoDB finds).
Example:
```js
db.student.findOne({ name: "pawan" })
```

## #Sigma Prime Note

### FIND in DB

db.collection.find()            // returns everything

for specific queries

db.collection.find( {key: value} )

db.collection.findOne( {key: value} )