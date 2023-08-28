const mongoose = require("mongoose");

const CustomerInquerySchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    address: { type: String, required: true},
    phoneNumber: { type: String },
    message: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("CustomerInquery", CustomerInquerySchema);
