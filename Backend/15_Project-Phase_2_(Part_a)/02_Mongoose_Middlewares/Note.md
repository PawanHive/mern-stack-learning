# Important Link:
Mongoose Middleware[https://mongoosejs.com/docs/middleware.html](https://mongoosejs.com/docs/middleware.html)

Mongoose (pre) Middleware[https://mongoosejs.com/docs/middleware.html#pre](https://mongoosejs.com/docs/middleware.html#pre)

Mongoose (post) Middleware[https://mongoosejs.com/docs/middleware.html#post](https://mongoosejs.com/docs/middleware.html#post)

# Sigma Notes:

## (Handling Deletion) - using Mongoose Middleware

### We can use 2 middlewares:

- Pre-run before the query is executed
- Post-run after the query is executed

# #customer.js code snippet explained

```js
// ============================================
// Example: Customer & their Orders (One-to-Many)
// Approach: Referencing (Parent stores child IDs)
// Goal: When a customer is deleted, all their orders should also be deleted
// ============================================

const mongoose = require("mongoose");
const { Schema } = mongoose;

// Connect to MongoDB
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  // connecting to local MongoDB database named "relationDemo"
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// ============================================
// ORDER SCHEMA (Child - Many)
// ============================================
const orderSchema = new Schema({
  item: String, // name of item (e.g., Burger)
  price: Number, // price of item
});

// ============================================
// CUSTOMER SCHEMA (Parent - One)
// ============================================
const customerSchema = new Schema({
  name: String, // customer name

  orders: [
    {
      type: Schema.Types.ObjectId, // storing ObjectId reference
      ref: "Order", // refers to "Order" collection
    },
  ],
});

// ============================================
// MIDDLEWARE (HOOKS)
// ============================================

// 🔹 PRE middleware (runs BEFORE deletion)
customerSchema.pre("findOneAndDelete", async () => {
  console.log("PRE MIDDLEWARE");
  // You can use this for logging or validation before deletion
});

// 🔹 POST middleware (runs AFTER deletion)
customerSchema.post("findOneAndDelete", async (customer) => {
  // 'customer' = the document that was just deleted

  // check if customer exists and has orders
  if (customer && customer.orders.length) {
    // delete all orders whose _id exists in customer.orders array
    let res = await Order.deleteMany({
      _id: { $in: customer.orders }, //This line deletes (or finds) all documents whose _id matches any value inside customer.orders array (using the $in operator).
    });

    // log result (how many orders deleted)
    console.log(res);
  }
});

// ============================================
// MODELS (Collections)
// ============================================

// creates "orders" collection
const Order = mongoose.model("Order", orderSchema);

// creates "customers" collection
const Customer = mongoose.model("Customer", customerSchema);

// ============================================
// FUNCTION: FIND ALL CUSTOMERS
// ============================================
const findCustomer = async () => {
  let result = await Customer.find({});
  console.log(result);
};

// findCustomer(); // uncomment to run

// ============================================
// FUNCTION: ADD CUSTOMER + ORDER
// ============================================
const addCust = async () => {
  // create new customer
  let newCust = new Customer({
    name: "Karan Arjun",
  });

  // create new order
  let newOrder = new Order({
    item: "Burger",
    price: 250,
  });

  newCust.orders.push(newOrder); // push order reference into customer.orders array

  await newOrder.save();  // save order first (so it gets an _id)

  await newCust.save();// save customer with order reference

  console.log("added new customer");
};

// addCust(); // uncomment to run

// ============================================
// FUNCTION: DELETE CUSTOMER
// ============================================
const delCust = async () => {
  // delete customer by ID
  // internally triggers:
  // → findOneAndDelete
  // → which triggers PRE + POST middleware
  let data = await Customer.findByIdAndDelete("69c350a128fe2de402007f3d");

  // logs deleted customer document
  console.log(data);
};

// run delete function
delCust();
```

# Mongoose Middleware (pre & post)

## 1. What is Middleware?

Middleware (hooks) in Mongoose are functions that run:

> Before (`pre`) or after (`post`) certain operations

---

## 2. Types of Middleware

### 1. Pre Middleware

> Runs **before** an operation

### 2. Post Middleware

> Runs **after** an operation

---

## 3. Basic Syntax

### Pre Middleware

```js
schema.pre("operation", function (next) {
  // logic before operation
  next();
});
```

---

### Post Middleware

```js
schema.post("operation", function (doc) {
  // logic after operation
});
```

---

## 4. Common Operations

- `save`
- `validate`
- `remove`
- `find`
- `findOne`
- `findOneAndDelete`
- `findOneAndUpdate`

---

# ------------------------------------------------------------------------------------------------------

## 5. Pre Middleware (Detailed)

### Example: Before Saving Data

```js
userSchema.pre("save", function (next) {
  console.log("Before saving user");
  next();
});
```

---

### Important Points

- Runs **before data is saved**
- Must call `next()` to continue
- Can modify data

---

### Example: Modify Data Before Save

```js
userSchema.pre("save", function (next) {
  this.name = this.name.toUpperCase();
  next();
});
```

---

## 6. Post Middleware (Detailed)

### Example: After Saving Data

```js
userSchema.post("save", function (doc) {
  console.log("User saved:", doc);
});
```

---

### Important Points

- Runs **after operation completes**
- Gets access to the result (`doc`)
- No need for `next()`

---

# --------------------------------------------

## 7. Key Differences

| Feature        | Pre Middleware    | Post Middleware |
| -------------- | ----------------- | --------------- |
| Runs           | Before operation  | After operation |
| Access         | `this` (document) | `doc` (result)  |
| Modify data    | Yes               | No              |
| Needs `next()` | Yes               | No              |

---

## 8. Real-World Examples

### Hash Password Before Save (Pre)

```js
userSchema.pre("save", function (next) {
  this.password = hashFunction(this.password);
  next();
});
```

---

### Logging After Save (Post)

```js
userSchema.post("save", function (doc) {
  console.log("Saved user:", doc._id);
});
```

---

## 9. Query Middleware vs Document Middleware

### Document Middleware

```js
user.save();
```

- `this` refers to document

---

### Query Middleware

```js
User.findOneAndUpdate();
```

- `this` refers to query object

---

## 10. Important Warning ⚠️

- `pre("save")` does NOT run on:
  - `update()`
  - `findOneAndUpdate()`

👉 Use:

```js
schema.pre("findOneAndUpdate", function () {
  // handle update case
});
```

---

## 11. Execution Flow

```text
Pre Middleware → Operation → Post Middleware
```

---

## Summary

- `pre` = before operation (can modify data)
- `post` = after operation (used for logging, cleanup)
- Always call `next()` in pre
- Very useful for automation & data control 🚀
