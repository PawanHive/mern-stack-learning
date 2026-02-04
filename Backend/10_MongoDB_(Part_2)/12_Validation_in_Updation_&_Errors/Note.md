# 📘 Mongoose – Validation in Updation & Errors

These notes explain **how schema validations behave during UPDATE operations** in Mongoose and how to use **custom error messages**.

---

## 🔹 Problem Statement

Schema validations in Mongoose:
- Work **by default during INSERT**
- ❌ Do **NOT work during UPDATE**

This can cause invalid data to be saved during updates.

---

## 🔹 Schema with Validation + Custom Error Message

Purpose:
- Define validation rules
- Add **custom error message** for better debugging

Code:
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
    min: [10, "Price is too low for Amazon selling"],
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

---

## 🔹 Custom Error Message (min)

Explanation:
- If `price < 10`
- Validation fails
- Custom message shown:

**"Price is too low for Amazon selling"**

Syntax pattern:
```JS
min: [value, "custom error message"]
```
---

## 🔹 Creating the Model

Purpose:
- Model is used to perform database operations

Code:
```JS
const Book = mongoose.model("Book", bookSchema);
```
---

## 🔹 Validation During UPDATE (Important Concept)

### ❌ Default Behavior (Problem)

By default:
- Mongoose **does NOT run schema validations during update**
- Invalid data can be saved

Example:
price updated to -500  
Even though min = 10 → ❌ still saved

Reason:
- Update methods skip validation

---

## 🔹 Solution: runValidators: true

To enable validation during update:
- Pass `{ runValidators: true }` as option

This forces Mongoose to:
- Apply schema rules during update also

---

## 🔹 CASE 3: Example: Validation Error During Update

Code:
```JS
Book.findByIdAndUpdate(
  "6981da2fc9e1dee8658d2756",
  { price: -100 },
  { runValidators: true }
)
```
Explanation:
- price = -100
- Violates min: 10
- Validation error occurs
- Update is blocked

---

## 🔹 CASE 2: Example: Accessing Custom Error Message

Code:
```JS
Book.findByIdAndUpdate('6981da2fc9e1dee8658d2756', { price: -100 }, { runValidators: true })
.then((res) => {
  console.log(res);
})
.catch((err) => {
  // console.log(err.errors.price);
  console.log(err.errors.price.message);
})
```
console.log(err.errors.price.message);

Output:
```text
"Price is too low for Amazon selling"
```

Why useful:
- Clean error handling
- User-friendly messages
- Better debugging

---

## 🔹 CASE 1: Example: Without runValidators (Issue)

Code:
```js
Book.findByIdAndUpdate(
  "6981da2fc9e1dee8658d2756",
  { price: -500 }
)
```

Result:
- ❌ Validation NOT applied
- Invalid data saved

---

## 🔹 Key Takeaways

- Schema validations work:
  - ✅ During INSERT
  - ❌ NOT during UPDATE (by default)

- To enable validation in updates:
  - Use `{ runValidators: true }` as **options**

- Custom error messages:
  - Improve readability
  - Help in debugging
  - Useful for production apps

---

## 🧠 One-Line Summary

To enforce schema validation during UPDATE operations in Mongoose, you **must use `runValidators: true`**, otherwise invalid data can be saved.
