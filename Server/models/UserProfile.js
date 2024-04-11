// fullName,
//       address1,
//       address2,
//       city,
//       state,
//       zipCode,
const mongoose = require("mongoose");
const userProfileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // }
});

module.exports = mongoose.model("userProfileModel", userProfileSchema);
