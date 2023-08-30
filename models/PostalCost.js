const mongoose = require("mongoose");

const PostalCostSchema = new mongoose.Schema(
    {
        weight: {type: String},
        cost: {type: String},
    },
    {timestamps: true}
);

module.exports = mongoose.model("PostalCost", PostalCostSchema);