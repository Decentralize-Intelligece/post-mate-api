const mongoose = require("mongoose");

const CustomerRequestSchema = new mongoose.Schema(
    {
        userName: {type: String, required: true},
        senderAddress: {type: String, required: true},
        message: {type: String, required: true},
        requestAccepted: {type: String, default: false},  // accepted, rejected, pending
        requestReplied: {type: Boolean, default: false},
        recievedDate: {type: Date, default: Date.now},
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now},
    },
    {timestamps: true}
);

module.exports = mongoose.model("CustomerRequest", CustomerRequestSchema);
