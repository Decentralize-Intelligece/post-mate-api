const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    firstName: { type: String, required: false },
    lastName:  { type: String, required: false },
    nearByPostOffice: { type: String, required: false },
    domainName:  { type: String, required: false },
    nationalIdNumber:  { type: String, required: false },
    permanentAddress:  { type: String, required: false },
    currentAddress:  { type: String, required: false },
    thirdPartyAddress:  { type: String, required: false },
    hasLetter: {type: Boolean, default: false},
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
