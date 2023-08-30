const UserFeedback = require("../models/UserFeedback");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", async (req, res) => {
    console.log(req.body);

    const newUserFeedback = new UserFeedback(req.body);

    try {
        const savedUserFeedback = await newUserFeedback.save();
        res.status(200).json(savedUserFeedback);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TOTAL NUMBER OF INQUERY
router.get("/count", async (req, res) => {
    try {
        const totalFeedbacks = await UserFeedback.find().count();
        res.status(200).json(totalFeedbacks);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/", async (req, res) => {
    try {
        const feedbacks = await UserFeedback.find();
        res.status(200).json(feedbacks);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
