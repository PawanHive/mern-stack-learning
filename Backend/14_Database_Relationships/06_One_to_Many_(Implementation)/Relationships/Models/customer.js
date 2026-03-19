// ============================================
// Example: Customer & their Orders (One-to-Many)
// Approach: Referencing (Parent stores child IDs)
// ============================================

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo"); // DatabaseName = 'relationDemo'
}

// defining order Schema (Child)-(Many)
const orderSchema = new Schema({
  item: String,
  price: Number,
});

// defining customer Schema (Parent)-(One)
const customerSchema = new Schema({
  name: String,
  orders: [   // Note: reference stored in (Parent)
    {
      type: Schema.Types.ObjectId, // (-id) reference
      ref: "Order", // means reference: refering to "Order" collection
    },
  ],
});

// Orders Model
const Order = mongoose.model("Order", orderSchema); // collectionName = 'orders'

// Customer Model
const Customer = mongoose.model("Customer", customerSchema); // collectionName = 'customers'

// add customer data to database
const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Rahul Kumar",
  });

  // extracting order-data from database
  let order1 = await Order.findOne({ item: "Chips" }); // return whole Object not just (_id)
  let order2 = await Order.findOne({ item: "Chocolate" }); // return whole Object not just (_id)

  // now here we are pushing extracted order-data object customer schema
  cust1.orders.push(order1);
  cust1.orders.push(order2);
  let result = await cust1.save();
  console.log(result);
};

addCustomer();

// I comment below useful code because this order-data already added to database now i have to add customer-data, so that i can't duplicate
// add Orders Data to database
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
  console.log(res);
};

addOrders();

//this function can find all customer data and print in node console
const findCustomer = async () => {
  let result = await Customer.find({});
  console.log(result);
};

findCustomer();
