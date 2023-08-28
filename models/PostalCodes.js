const mongoose = require("mongoose");
const { post } = require("../routes/user");

const PostalCodesSchema = new mongoose.Schema(
    {postalCodesArray : [

        {
            postalCode: { type: String },
            postOffice: { type: String },
            district: { type: String },
            province: { type: String },
        },
    ]},
    { timestamps: true }
);

module.exports = mongoose.model("PostalCodes", PostalCodesSchema);
