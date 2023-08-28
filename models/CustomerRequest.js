const mongoose = require("mongoose");
const date = new Date();
let currentDate = date.toJSON();

const CustomerRequestSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    senderAddress: { type: String, required: true},
    message: { type: String, required: true },
    requestStatus: {
      type: String
    },
    replyStatus: {
      type: String
    },
    replyMessage:{type: String},
    recievedDate:{type: Date,
    default:currentDate
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("CustomerRequest", CustomerRequestSchema);
