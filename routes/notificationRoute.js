const Notification = require("../models/Notification");
// const Customer = require("../models/CustomerRequest");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
// router.post("/", verifyToken, async (req, res) => {
router.post("/", async (req, res) => {
    const newNotification = new Notification(req.body);
    try {
        const savedNotification = await newNotification.save();
        res.status(200).json(savedNotification);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
