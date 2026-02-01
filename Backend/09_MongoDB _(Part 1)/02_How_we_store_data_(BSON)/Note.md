For more info refer: [MongoDB Documentation](https://www.mongodb.com/docs/manual/)

# #1: What is BSON?

**BSON = Binary JSON**

MongoDB does not store data as plain JSON.
It stores data in BSON, which is a binary-encoded version of JSON.

👉 Think of it like this:
```
JSON (what you write)
↓
BSON (what MongoDB stores internally)
```

### Why MongoDB uses BSON (not JSON)
1. Faster Performance

BSON is binary  
Faster to read/write than text JSON

## Supports More Data Types

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