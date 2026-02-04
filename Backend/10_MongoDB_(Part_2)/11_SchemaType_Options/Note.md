# 📘 Mongoose SchemaType Options – Notes

These notes explain **SchemaType Options in Mongoose** with examples.
SchemaType options are used to **add rules, limits, defaults, and constraints** to schema fields.

---

## 🔹 What are SchemaType Options?

SchemaType options define **how a field behaves** in a schema.

They help you:
- Restrict values
- Set minimum / maximum limits
- Provide default values
- Allow only specific values
- Define array types

They work **during document validation**.

---

## 🔹 Schema with SchemaType Options

Purpose:
- Define structure + validation + behavior of fields

Code:
```js
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  author: {
    type: String
  },
  price: {
    type: Number,
    min: 10,
  },
  discount: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ['fiction', 'non-fiction']
  },
  genre: [String]
});
```
---

## 🔹 Explanation of Each SchemaType Option

### 1️⃣ `required`

Field must be present.

title:
- Required
- Missing title → validation error

---

### 2️⃣ `maxLength`

Limits string length.

title:
- Maximum 20 characters
- More than 20 → validation error

---

### 3️⃣ `min`

Sets minimum numeric value.

price:
- Must be ≥ 10
- Less than 10 → validation error

---

### 4️⃣ `default`

Automatically sets value if user does not provide it.

discount:
- Default value = `0`
- If discount not provided → saved as `0`

---

### 5️⃣ `enum`

Restricts values to a fixed list.

category:
- Allowed values: `fiction`, `non-fiction`
- Any other value → validation error

---

### 6️⃣ `Array Type`

Defines array of values of specific type.

genre:
- Array of strings
- Example: `["comic", "superhero", "fiction"]`

---

## 🔹 Creating Model

Purpose:
- Model is used to interact with MongoDB collection

Code:
```js
const Book = mongoose.model("Book", bookSchema);
```
---

## 🔹 CASE 6: Valid Example: Array Field

Code:
```js
let book11 = new Book({
  title: "Marvel Comics v2",
  price: 600,
  genre: ["comic", "superhero", "fiction"]
});
```
Explanation:
- `genre` is an array of strings
- Valid data
- Saved successfully

---

## 🔹 CASE 5: Invalid Example: enum violation
code:

```js
let book10 = new Book({
  title: "Marvel Comics",
  price: 500,
  category: 'comic',
});
```
category: 'comic'

Explanation:
- 'comic' is not in enum list
- Validation error occurs
- Document NOT saved

---

## 🔹 CASE 4: Valid Example: enum value allowed
code:

```js
let book9 = new Book({
  title: "Marvel Comics",
  price: 500,
  category: 'fiction',
});
```
category: 'fiction'

Explanation:
- '`fiction`' is allowed
- Data saved successfully

---

## 🔹 CASE 3: Invalid Example: min validation
code:

```js
let book8 = new Book({
  title: "Marvel Comics",
  price: -9,
});
```
price: -9

Explanation:
- price < 10
- Violates min rule
- Validation error occurs

---

## 🔹 CASE 2: Invalid Example: maxLength validation
code:

```js
let book7 = new Book({
  title: "Gone Girl aaaaaaaaaaaaaaaaaaaaaaaaa",
  price: 299,
});
```
title: "Gone Girl aaaaaaaaaaaaaaaaaaaaaaaaa"

Explanation:
- Title length exceeds 20
- Validation error occurs

---

## 🔹 CASE 1: Default Value Example
code:

```js
let book6 = new Book({
  title: "Gone Girl",
  price: 299,
});
```
discount not provided by user

Explanation:
- discount automatically set to 0
- Data saved successfully

---

## 🔹 Key Takeaways

- SchemaType options control **field behavior**
- Validation runs before `.save()`
- enum restricts values
- min / maxLength enforce limits
- default provides automatic values
- Arrays can be defined easily

---

## 🧠 One-Line Summary

SchemaType Options = **Rules that control how schema fields accept and store data**
