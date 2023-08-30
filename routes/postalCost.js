const PostalCost = require("../models/PostalCost");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

// router.post("/", verifyToken, async (req, res) => {
router.post("/", async (req, res) => {
    console.log(req.body);

    const cost = new PostalCost(req.body);

    try {
        const savedCost = await cost.save();
        res.status(200).json(savedCost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET COST BY WEIGHT
router.get("/find/:weight", async (req, res) => {
    try {
        const cost = await PostalCost.find({weight: req.params.weight});
        res.status(200).json(cost);
    } catch (err) {
        res.status(500).json(err);
    }
});


//GET ALL
router.get("/", async (req, res) => {
    try {
        const cost = await PostalCost.find();
        res.status(200).json(cost);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
