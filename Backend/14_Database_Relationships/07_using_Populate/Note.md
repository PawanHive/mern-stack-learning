# Using Populate 
**Populate Mongoose:** [https://mongoosejs.com/docs/populate.html](https://mongoosejs.com/docs/populate.html)

## Observe console output: finding one-to-many kind of data from database using (Populate)

### Find data (without Populate)
```js
//finding customer data (without using populate) - means only give ObjectId
const findCustomer = async () => {
  let result = await Customer.find({});
  console.log("find data without populate")
  console.log(result);                                                                                                                            
};

findCustomer();
```
```terminal
find data without populate
[
  {
    _id: new ObjectId('69bb85f7e6ff9bf6f6d4b2f2'),
    name: 'Rahul Kumar',
    orders: [
      new ObjectId('69bb7ca29b34136689d991cd'),
      new ObjectId('69bb7ca29b34136689d991ce')
    ],
    __v: 0
  }
]
```
`new ObjectId('69bb7ca29b34136689d991cd')` - it is a referenced ObjectId     
`new ObjectId('69bb7ca29b34136689d991ce')` - it is also a referenced ObjectId   
when we use `populate` then it will Replace referenced ObjectId with actual document data


### Find data (with Populate)
```js
//finding customer data (using populate) - means give whole Object not just (_Id)
const findCustomerPopulate = async () => {
  let result = await Customer.find({}).populate('orders'); // here 'orders' is not collectionName it is a fieldName defined in customerSchema
  console.log("find data with populate")
  console.log(result[0]);                                                                                                                            
};

findCustomerPopulate();
```
```terminal
find data with populate
{
  _id: new ObjectId('69bb85f7e6ff9bf6f6d4b2f2'),
  name: 'Rahul Kumar',
  orders: [
    {
      _id: new ObjectId('69bb7ca29b34136689d991cd'),
      item: 'Chips',
      price: 10,
      __v: 0
    },
    {
      _id: new ObjectId('69bb7ca29b34136689d991ce'),
      item: 'Chocolate',
      price: 40,
      __v: 0
    }
  ],
  __v: 0
}
```
---
# #`customer.js` code snippet Explained with comment:

```js
// import mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose; // extract Schema constructor from mongoose

// connect to MongoDB database
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() { // async function to connect DB
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo"); // connecting to local MongoDB database named 'relationDemo'
}


// =======================
// ORDER SCHEMA (Child)-(Many)
// =======================

// defining Order schema (this will create 'orders' collection)
const orderSchema = new Schema({
  item: String,   // name of item
  price: Number,  // price of item
});


// =======================
// CUSTOMER SCHEMA (Parent)-(One)
// =======================

// defining Customer schema (this will create 'customers' collection)
const customerSchema = new Schema({
  name: String,   // customer name
  orders: [  // 'orders' field will store multiple ObjectIds (reference to Order documents)
    {
      type: Schema.Types.ObjectId, // stores MongoDB ObjectId
      ref: "Order", // reference to Order model (collection)
    },
  ],
});


// =======================
// MODELS
// =======================

// creating Order model (collection = 'orders')
const Order = mongoose.model("Order", orderSchema);

// creating Customer model (collection = 'customers')
const Customer = mongoose.model("Customer", customerSchema);


// =======================
// ADD CUSTOMER FUNCTION
// =======================

const addCustomer = async () => {
  let cust1 = new Customer({  // creating a new customer
    name: "Rahul Kumar",
  });

  // fetching existing orders from database
  // NOTE: findOne() returns FULL object (not just _id)
  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocolate" });

  // pushing order objects into customer.orders array
  // Mongoose automatically extracts _id from these objects
  cust1.orders.push(order1);
  cust1.orders.push(order2);

  let result = await cust1.save(); // saving customer in database
  console.log(result);// printing saved customer document
};

addCustomer();// calling function


// =======================
// ADD ORDERS FUNCTION
// =======================

// this function inserts multiple orders into database
const addOrders = async () => {
  let res = await Order.insertMany([
    {
      item: "Samosa",
      price: 12,
    },
    {
      item: "Chips",
      price: 10,
    },
    {
      item: "Chocolate",
      price: 40,
    },
  ]);

  console.log(res);// printing inserted orders
};

addOrders();// calling function


// =======================
// FIND CUSTOMER (WITHOUT POPULATE)
// =======================

const findCustomer = async () => {
  let result = await Customer.find({});// fetch all customers
  console.log("find data without populate");
  console.log(result);// here orders will only contain ObjectIds
};

findCustomer();


// =======================
// FIND CUSTOMER (WITH POPULATE)
// =======================

const findCustomerPopulate = async () => {
  let result = await Customer.find({}).populate('orders');// populate replaces ObjectId with actual Order documents
  console.log("find data with populate");
  console.log(result[0]);// printing first customer with full order details
};

findCustomerPopulate();
```

---

# MongoDB (Mongoose) - Using `populate()`

## 1. What is `populate()`?

`populate()` is a **Mongoose method** used to:

> Replace referenced ObjectId with actual document data

👉 It works like a **JOIN in SQL**

---

## 2. Why Do We Need `populate()`?

When using referencing:

~~~js
{
  title: "Post 1",
  user: ObjectId("user1")
}
~~~

- This only stores **ID**
- But we want full user data (name, email, etc.)

👉 `populate()` solves this

---

## 3. Schema Setup (Very Important)

### User Schema

~~~js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model("User", userSchema);
~~~

---

### Post Schema (with Reference)

~~~js
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Post", postSchema);
~~~

---

## 4. Basic Usage of `populate()`

~~~js
const posts = await Post.find().populate("user");
~~~

### What Happens?

Before populate:

~~~js
{
  title: "Post 1",
  user: ObjectId("user1")
}
~~~

After populate:

~~~js
{
  title: "Post 1",
  user: {
    _id: "user1",
    name: "Pawan",
    email: "pawan@example.com"
  }
}
~~~

---

## 5. Populate Specific Fields

~~~js
Post.find().populate("user", "name email");
~~~

- Only fetch selected fields
- Improves performance

---

## 6. Multiple Populate

~~~js
Post.find()
  .populate("user")
  .populate("comments");
~~~

---

## 7. Nested Populate (Advanced)

~~~js
Post.find()
  .populate({
    path: "comments",
    populate: {
      path: "user"
    }
  });
~~~

- Populate inside another populated field

---

## 8. When to Use `populate()`

Use when:

- Using **referencing**
- Need related document data
- Want SQL-like behavior

---

## 9. Important Notes

- `populate()` makes **extra queries internally**
- Overusing it can **slow performance**
- Use only when needed

---

## 10. Alternative: Manual Query

~~~js
const post = await Post.find();
const user = await User.findById(post.user);
~~~

- Works but messy ❌  
- `populate()` is cleaner ✅  

---

## 11. Real Flow

~~~text
Without populate:
Post → user_id

With populate:
Post → user (full object)
~~~

---

## Summary

- `populate()` = MongoDB JOIN (via Mongoose)
- Replaces ObjectId with actual data
- Requires `ref` in schema
- Use wisely for performance 🚀