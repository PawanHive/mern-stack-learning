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
  orders: [
    // Note: reference stored in (Parent)
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

//this function can find all customer data and print in node console
const findCustomer = async () => {
  let result = await Customer.find({});
  console.log(result);
};

// findCustomer();

// function: which add customer to database
const addCust =async () => {
  let newCust = new Customer({
    name: "Karan Arjun",
  });

  let newOrder = new Order({
    item: "Pizza",
    price: 250,
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("added new customer");
};

// addCust();


// function: which delete customer from database
// here we want to delete everthing related to customer database basically his order also.
// let see what actually deleted

const delCust = async () => {
  let data = await Customer.findByIdAndDelete('69be336bcd0375fe840cee81');
  console.log(data);
}
delCust();

// conclusion of above function: this function only deleted "customer", not "orders" which related to "customer".

// so that's why we use mongoose middleware (pre and post).