const CustomerInquery = require("../models/CustomerInquery");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", async (req, res) => {

    const newCustomerInquery = new CustomerInquery(req.body);

    try {
        const savedCustomerInquery = await newCustomerInquery.save();
        res.status(200).json(savedCustomerInquery);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TOTAL NUMBER OF INQUERY
router.get("/count", async (req, res) => {
    try {
        const totalInquery = await CustomerInquery.find().count();
        res.status(200).json(totalInquery);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/", async (req, res) => {
    try {
        const customerInquery = await CustomerInquery.find();
        res.status(200).json(customerInquery);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
