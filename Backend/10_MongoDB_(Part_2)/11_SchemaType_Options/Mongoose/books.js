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
    maxLength: 20,                         // title cannot be more than 20 characters      
  },      
  author: {
    type: String
  },
  price: {
    type: Number,
    min: 10,                                // price cannot be less than 10.
  },
  discount: {
    type: Number,
    default: 0                                   // if user doesn't provide 'discount' field, it will be set to 0 by default
  },
  category: {
    type: String,
    enum: ['fiction', 'non-fiction']                // only these two values are allowed
  },  
  genre: [String]                                   // array of strings
});

const Book = mongoose.model("Book", bookSchema);

// ---------------------- schemaType Options Examples --------------------------------

// Example: 'genre' field is an array of strings
let book11 = new Book({
  title: "Marvel Comics v2",
  price: 600,
  genre: ["comic", "superhero", "fiction"]
});

book11
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  })

// // Example: 'category' field value is not in enum, so it will throw validation error
// let book10 = new Book({
//   title: "Marvel Comics",
//   price: 500,
//   category: 'comic',
// });

// book10
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   })


// // Valid data: 'category' field value is in enum, so it will be saved
// let book9 = new Book({
//   title: "Marvel Comics",
//   price: 500,
//   category: 'fiction',
// });

// book9
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   })


// // Example: 'price' is less than minimum value 10, so it will throw valication error
// let book8 = new Book({
//   title: "Marvel Comics",
//   price: -9,
// });

// book8
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   })

// // Example: 'title' length exceeds maxLength 20 characters, so it will throw validation error
// let book7 = new Book({
//   title: "Gone Girl aaaaaaaaaaaaaaaaaaaaaaaaa",
//   price: 299,
// });

// book7
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   })


// // Example: 'discount' field is not provided by user, so it will be set to default value 0
// let book6 = new Book({
//   title: "Gone Girl",
//   price: 299,
// });

// book6
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   })


// ---------------------- Schema with validation Examples ----------------------------------

// // Valid data : Even 'price' is string it will be converted to number and saved
// let book5 = new Book({
//   title: "How to kill a Mockingbird",
//   author: "Harper Lee",
//   price: "299",
// });

// book5
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   })


// // Throw CastError: 'price' is not a number
// let book4 = new Book({
//   title: "How to kill a Mockingbird",
//   author: "Harper Lee",
//   price: abcd,
// });

// book4
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