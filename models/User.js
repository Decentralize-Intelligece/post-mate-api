const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {
            type: Boolean,
            default: false,
        },
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        nearByPostOffice: {type: String, required: true},
        domainName: {type: String, required: true},
        nationalIdNumber: {type: String, required: true},
        permanentAddress: {type: String, required: true},
        currentAddress: {type: String, required: true},
        thirdPartyAddress: {type: String, required: true},
        hasLetter: {type: Boolean, default: true},
        img: {type: String},
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);
