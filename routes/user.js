const User = require("../models/User");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");
// const CryptoJS = require("crypto-js");

const router = require("express").Router();

//CREATE
// router.post("/", verifyTokenAndAdmin, async (req, res) => {
router.post("/",  async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
// router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
router.put("/:id",  async (req, res) => {

    // if (req.body.password) {
    //     req.body.password = CryptoJS.AES.encrypt(
    //         req.body.password,
    //         process.env.PASS_SEC
    //     ).toString();
    // }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
// router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
router.delete("/:id",  async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER
// router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
router.get("/find/:id",  async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL USER
router.get("/", async (req, res) => {
    const query = req.query.new;
    try {
        const users = query
            ? await User.find().sort({_id: -1}).limit(5)
            : await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET NUMBER OF TOTAL USERS
router.get("/count", async (req, res) => {
    try {
        const users = await User.find().count();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER STATS
// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
router.get("/stats",  async (req, res) => {

    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {
                $project: {
                    month: {$month: "$createdAt"},
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1},
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
