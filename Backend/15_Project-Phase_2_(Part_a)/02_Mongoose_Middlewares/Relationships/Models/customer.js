// ============================================
// Example: Customer & their Orders (One-to-Many)
// Approach: Referencing (Parent stores child IDs)
// What we want to do in this code is if we delete "customer" so subsiquent order should also delete at the same time
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


customerSchema.pre("findOneAndDelete", async () => {
  console.log("PRE MIDDLEWARE");
});


customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
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
const addCust = async () => {
  let newCust = new Customer({
    name: "Karan Arjun",
  });

  let newOrder = new Order({
    item: "Burger",
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
  let data = await Customer.findByIdAndDelete('69c350a128fe2de402007f3d');
  console.log(data);
};
delCust();
