# 📘 Mongoose Schema Validation – Notes

These notes explain **Schema Validation in Mongoose** using a real example.
Perfect for quick revision after a few days.

---

## 🔹 What is Schema Validation?

Schema validation in Mongoose ensures that:
- Only **valid data** is saved to MongoDB
- Required fields must be present
- Data types are enforced
- Errors are thrown when rules are violated

Validation happens **before `.save()` executes**.

---

## 🔹 Creating Schema with Validation

Purpose:
- Define structure of data
- Apply validation rules

Code:
```js
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String
  },
  price: {
    type: Number
  },
});
```

Explanation:
- `title`  
  - Must be a String  
  - **Required field**
- `author`  
  - String  
  - Optional
- `price`  
  - Must be a Number

---

## 🔹 Creating Model

Purpose:
- Model is used to interact with database (CRUD)

Code:
```js
const Book = mongoose.model("Book", bookSchema);
```

Explanation:
- `Book` represents `books` collection in MongoDB
- Used to create, read, update, delete documents

---

## 🔹 Case 1: Valid Data (Type Casting)

Code:
```js
let book1 = new Book({
  title: "How to kill a Mockingbird",
  author: "Harper Lee",
  price: "299",
});

book1.save();
```
Explanation:
- `price` is a string `"299"`
- Mongoose **automatically converts it to Number**
- Data is saved successfully

✅ This is called **type casting**

---

## 🔹 Case 2: Invalid Data Type (CastError)

Code:
```js
let book4 = new Book({
  title: "How to kill a Mockingbird",
  author: "Harper Lee",
  price: abcd,
});
```

Explanation:
- `abcd` is not a number
- Mongoose throws **CastError**
- Document is NOT saved

❌ Invalid type → Error

---

## 🔹 Case 3: Optional Field Missing (author)

Code:
```js
let book3 = new Book({
  title: "Mathematics VII",
  price: 1200,
});
```
Explanation:
- `author` is optional
- Data is saved successfully

✅ Allowed because `author` is not required

---

## 🔹 Case 4: Required Field Missing (title)

Code:
```js
let book2 = new Book({
  author: "RD Sharma",
  price: 1200,
});
```
Explanation:
- `title` is required
- Missing required field
- Validation Error occurs

❌ Document is NOT saved

---

## 🔹 Case 5: Fully Valid Data

Code:
```js
let book1 = new Book({
  title: "Mathematics XII",
  author: "RD Sharma",
  price: 1200,
});
```

Explanation:
- All fields valid
- Required fields present
- Correct data types

✅ Data saved successfully

---

## 🔹 Basic Schema (Without Validation)

Code:
```js
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
});
```
Explanation:
- No validation rules
- No required fields
- Less safe
- Not recommended for production

---

## 🔹 Key Takeaways

- Schema validation protects your database
- `required: true` enforces mandatory fields
- Mongoose performs **automatic type casting**
- Invalid data throws errors before saving
- Always prefer schemas **with validation**

---

## 🧠 One-Line Summary

Schema validation = **Rules that stop bad data from entering MongoDB**
