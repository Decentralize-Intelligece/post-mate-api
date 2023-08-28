const mongoose = require("mongoose");

const PostOfficeInfoSchema = new mongoose.Schema(
  {
    name: { type: String,required: true},
    postalCode: { type: String, required: true},
    province: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostOfficeInfo", PostOfficeInfoSchema);
