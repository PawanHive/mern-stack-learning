// ============================================
// Example: User & Addresses (One-to-Few)
// Approach: Embedding (Child stored inside Parent)
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

// defining users Schema (parent / one-side)
const userSchema = new Schema({
  username: String,                       
  addresses: [                              // (Child / many-side) - Stored directly inside (parent)
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

//  model
const User = mongoose.model("User", userSchema); //collectionName = 'users'

// add data to MongoDB Database:
const addUsers = async () => {                  // used async function because we have to use await to save() data to database.
  let user1 = new User({
    username: "Sherlockholmes",
    addresses: [
      {
        location: "221B Backer Street",         // first location
        city: "London",
      },
    ],
  });

  user1.addresses.push({                    // another location pushed here
    location: "P32 WallStreet",
    city: "London",
  });

  let result = await user1.save();
  console.log(result);                      // print what saved to database in console also
};

addUsers();


// Note:
/*
Here: OUTPUT:
MongodB by Default add (_id:) field to userSchema as well as "addresses" also 
like this Example:
    {
      username: 'Sherlockholmes',        
      addresses: [
        {
          location: '221B Backer Street',
          city: 'London',
          _id: new ObjectId('69ba9a4f7396701b2c4c190f')                                 // (_id:) generated for addresses also
        },
        {
          location: 'P32 WallStreet',
          city: 'London',
          _id: new ObjectId('69ba9a4f7396701b2c4c1910')                                 // (_id:) generated for addresses also
        }
      ],
      _id: new ObjectId('69ba9a4f7396701b2c4c190e'),
      __v: 0
    }

But if we want (_id:) should not generate for address:
then we we to mention this below line in our "userSchema" code

  _id: false;

*/