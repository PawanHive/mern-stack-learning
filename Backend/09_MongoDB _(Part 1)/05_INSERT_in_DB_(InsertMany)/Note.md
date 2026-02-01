## `insertMany()`
Inserts multiple documents into a collection.

Syntax:
```js
`db.collection.insertMany([ {}, {} ])`
```

Example:

```js
db.student.insertMany( [ {name: "catlyn", marks: 64, city: "Delhi" }, { name: "donald", marks: 58, city: "Mumbai"} ])
```
output:

```js
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('697f46eaa77b159fbb628ca2'),
    '1': ObjectId('697f46eaa77b159fbb628ca3')
  }
}
```
Automatically add `_id` to each one
