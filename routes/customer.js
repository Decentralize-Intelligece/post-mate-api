const Customer = require("../models/Customer");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newCustomer = new Customer(req.body);

    try {
        const savedCustomer = await newCustomer.save();
        res.status(200).json(savedCustomer);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
