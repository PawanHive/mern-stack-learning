const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test"); // connecting database called 'test'
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);




// #findById() - find user by 'id'--(MOST COMMON)
User.findById('69806c3e18393e032e3257d7')
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err)
})

// // #findOne() - (find user by id)
User.findOne({_id: '69806c3e18393e032e3257d9'})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err)
})

// #findOne() - (find only one matches)
User.findOne({age: {$gt: 47}})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err)
})

// #FIND (all matches)
User.find({})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


// #FIND (find name of user whose age is greater than 48)
User.find({age: {$gt: 48}})
  .then((res) => {
    console.log(res[0]);                        // print 0th item
    console.log(res[0].name);                        // print 'name' of user
  })
  .catch((err) => {
    console.log(err);
  });



// // #INSERT many data
// User.insertMany([
//   {name: "Tony", email: "tony@gmail.com", age: 50},
//   {name: "Peter", email: "peter@gmail.com", age: 30},
//   {name: "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then((res) => {
//   console.log(res);
// });

// #INSERT user1 data
// const user1 = new User({
//   name: "Adam",
//   email: "adam@yahoo.in",
//   age: 48,
// });

// user1.save()                // now 'user1' data will stored in database   // .save() is async method which also 'return' promise

// #INSERT user2 data
// const user2 = new User({
//   name: "eve",
//   email: "eve@yahoo.in",
//   age: 48,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
