const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true},
    senderAddress: { type: String },
    isReply: {type:Boolean, default: false},
    hasLetter: {type: Boolean, default: false},
    message: {type: String},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
