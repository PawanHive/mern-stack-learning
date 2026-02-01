
## What is Nesting?

Nesting means storing an **object inside another object**  
(or an **array of objects**) inside a MongoDB document.

This is also called:
- Embedded documents
- Nested fields

## Example of a Nested Document
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


## Accessing Nested Fields (Dot Notation)

MongoDB uses **dot notation** to access nested values.

`address.city`  
`address.state ` 

---

## Find by Nested Field

Find all students who live in Delhi:
```js
db.student.find(
  { "address.city": "Delhi" }
)
```

# #Sigma Prime Note

### Nesting

Document:
```js
{
    _id: ObjectId('697f7581a77b159fbb628ca4'),
    name: 'farah',
    performance: { marks: 88, grade: 'A' }
}
```

to find: 
```js
db.student.find( {"performance.marks": 88} )
```