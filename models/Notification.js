const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    userID: { type: String},
    userName: { type: String, required: true},
    senderAddress: { type: String, required: true },
    isReply: {type:Boolean, default: false},
    message: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
