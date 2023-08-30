const mongoose = require("mongoose");

const UserFeedback = new mongoose.Schema(
    {
        userName: {type: String, required: true},
        address: {type: String},
        message: {
            type: String, required: true
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("UserFeedback", UserFeedback);
