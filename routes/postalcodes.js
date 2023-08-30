const PostalCodes = require("../models/PostalCodes");

const router = require("express").Router();

//CREATE
router.post("/", async (req, res) => {
    const newPostalCodes = new PostalCodes(req.body);

    try {
        const savedPostalCodes = await newPostalCodes.save();
        res.status(200).json(savedPostalCodes);
    } catch (err) {
        res.status(500).json(err);
    }
});

//READ BY CODE
router.get("/find/:code", async (req, res) => {
    try {
        const postalCodes = await PostalCodes.find({code: req.params.code});
        res.status(200).json(postalCodes);
    } catch (err) {
        res.status(500).json(err);
    }
});

//READ BY CITY
router.get("/find/:city", async (req, res) => {
    try {
        const postalCodes = await PostalCodes.find({city: req.params.city});
        res.status(200).json(postalCodes);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updatedPostalCodes = await PostalCodes.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedPostalCodes);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;