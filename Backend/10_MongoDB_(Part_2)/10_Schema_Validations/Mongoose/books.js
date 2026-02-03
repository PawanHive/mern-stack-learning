const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon"); // connecting database called 'test'
}

// #Schema with (Validation)
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

const Book = mongoose.model("Book", bookSchema);

// // Valid data : Even 'price' is string it will be converted to number and saved
// let book1 = new Book({
//   title: "How to kill a Mockingbird",
//   author: "Harper Lee",
//   price: "299",
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   })


// // Throw CastError: 'price' is not a number
// let book1 = new Book({
//   title: "How to kill a Mockingbird",
//   author: "Harper Lee",
//   price: abcd,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   })


// // This also will be saved (because 'author' is not required field)
// let book3 = new Book({
//   title: "Mathematics VII",
//   price: 1200,
// });

// book3
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   })

// // Throw Error: 'title' is required (because user data didn't have title field)
// let book2 = new Book({
//   author: "RD Sharma",
//   price: 1200,
// });

// book2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   })

// // Valid data -- will be saved
// let book1 = new Book({
//   title: "Mathematics XII",
//   author: "RD Sharma",
//   price: 1200,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   })


// // # WAY 1: Basic Schema (No Validation)
// const bookSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   price: Number,
// });