const Notification = require("../models/Notification");
// const Customer = require("../models/CustomerRequest");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
    const newNotification = new Notification(req.body);

    try {
        const savedNotification = await newNotification.save();
        res.status(200).json(savedNotification);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER notifcation
router.get("/find/:userName", async (req, res) => {
    try {
        const customerNotification = await Notification.find({userName: req.params.userName});
        res.status(200).json(customerNotification);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/", async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;