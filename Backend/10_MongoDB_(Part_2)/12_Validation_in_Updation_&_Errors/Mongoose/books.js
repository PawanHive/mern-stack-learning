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
    min: [10, "Price is too low for Amazon selling"],                               // price cannot be less than 10. and custom error message ("Price is too low for Amazon selling") if price is less than 10.
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

// --------------------- Validation in Updation & Errors -------------------------

// Example: custom error message for validation error during updation
Book.findByIdAndUpdate('6981da2fc9e1dee8658d2756', { price: -100 }, { runValidators: true })
.then((res) => {
  console.log(res);
})
.catch((err) => {
  // console.log(err.errors.price);
  console.log(err.errors.price.message);
})

// // Now it will throw validation error because we set 'runValidators: true' in options, so it will work during updation also.
Book.findByIdAndUpdate('6981da2fc9e1dee8658d2756', { price: -100 }, { runValidators: true })
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})

// // Issues: we defined constraint 'min: 10' for 'price' field, even after that data UPDATED with price (-500)
// Book.findByIdAndUpdate('6981da2fc9e1dee8658d2756', { price: -500 })
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })


/*
  Note: 
  Rules which we defined in the Shema only works during insertion(INSERT).
  not during updation(UPDATE).

  so to solve these issues we have to set 'runValidators: true' 
  in options of update method, then only it will work during 
  updation also.
*/