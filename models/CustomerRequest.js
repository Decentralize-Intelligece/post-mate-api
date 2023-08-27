const mongoose = require("mongoose");

const CustomerRequestSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    senderAddress: { type: String, required: true},
    message: { type: String, required: true },
    requestStatus: {
      type: String
    },
    requestStatus: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("CustomerRequest", CustomerRequestSchema);
