# #Sigma Notes:

## 1: MongoDB Relationships

###  #`Approach (One-to-Many): Referencing (Parent stores child IDs) `
**Note:**  
Store a reference of the child document inside parent

```js
// Example: Customer & thier Orders (Approach / One-to-Many..100s, 1000s) 

// defining order Schema (Child / Many-side)
const orderSchema = new Schema({
  item: String,
  price: Number,
});

// defining customer Schema (Parent / One-side)     **Note: reference stored in (Parent)
const customerSchema = new Schema({
  name: String,
  orders: [                                           // Note: reference stored in (Parent)
    {
      type: Schema.Types.ObjectId,                     // (-id) reference
      ref: "Order",                                    // refering to "Order" collection (This 'ObjectId' belongs to the 'Order' collection)
    },
  ],
});
```
### Important to note this:
**Here:**  
In this appraoch *(One-to-Many)* implemented using **Referencing**  
**means:**  
here **reference(ObjectId) stored in Parent (Customer)** & `orders` field in customerSchema means `orders` array will store reference (ObjectId) of `Order` document inside the `Customer` document. 
**Important line:**   
`ref: "Order";` means *"These ObjectIds belongs to Order collection"*

---

# 2: `customer.js` code snippet explained

```js
// ============================================
// Example: Customer & their Orders (One-to-Many)
// Approach: Referencing (Parent stores child IDs)
// ============================================

// import mongoose
const mongoose = require("mongoose");

// extract Schema constructor
const { Schema } = mongoose;


// =======================
// DATABASE CONNECTION
// =======================

// calling main function
main()
  .then(() => {
    console.log("connection successful"); // runs when DB connects successfully
  })
  .catch((err) => console.log(err)); // handles connection error

// async function to connect MongoDB
async function main() {
  // connecting to local MongoDB database named 'relationDemo'
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}


// =======================
// SCHEMA DEFINITIONS
// =======================

// ORDER SCHEMA → (Child / Many side)
const orderSchema = new Schema({
  item: String,   // item name
  price: Number,  // item price
});


// CUSTOMER SCHEMA → (Parent / One side)
const customerSchema = new Schema({
  name: String,   // customer name

  // `orders` array will store references (ObjectIds) of `Order` documents
  orders: [
    {
      type: Schema.Types.ObjectId, // stores _id of Order document
      ref: "Order", // tells mongoose: this ID belongs to "Order" model
    },
  ],
});


// =======================
// MODELS (COLLECTIONS)
// =======================

// create Order model → collection: 'orders'
const Order = mongoose.model("Order", orderSchema);

// create Customer model → collection: 'customers'
const Customer = mongoose.model("Customer", customerSchema);


// =======================
// ADD CUSTOMER FUNCTION
// =======================

const addCustomer = async () => {

  // create new customer object
  let cust1 = new Customer({
    name: "Rahul Kumar",
  });

  // fetch existing orders from database
  // NOTE: findOne() returns full document (not just _id)
  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocolate" });

  // pushing order objects into orders array
  // mongoose automatically extracts only _id and stores it
  cust1.orders.push(order1);
  cust1.orders.push(order2);

  // save customer to database
  let result = await cust1.save();

  // print saved customer document
  console.log(result);
};

// calling function
addCustomer();


// =======================
// ADD ORDERS FUNCTION
// =======================

// this function inserts multiple orders into DB
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

  // print inserted orders
  console.log(res);
};

// calling function
addOrders();


// =======================
// FIND CUSTOMER FUNCTION
// =======================

// this function fetches all customers
const findCustomer = async () => {

  let result = await Customer.find({}); 
  console.log(result);                    // IMPORTANT: orders field will contain ONLY ObjectIds (no full data)
};

// calling function
findCustomer();
```