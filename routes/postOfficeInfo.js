
const PostOfficeInfo = require("../models/PostOfficeInfo");
// const Customer = require("../models/CustomerRequest");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newPostOfficeInfo = new PostOfficeInfo(req.body);

  try {
    const savedPostOfficeInfo = await newPostOfficeInfo.save();
    res.status(200).json(savedPostOfficeInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //UPDATE
// router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
//   try {
//     const updatedCart = await Cart.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedCart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //DELETE
// router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
//   try {
//     await Cart.findByIdAndDelete(req.params.id);
//     res.status(200).json("Cart has been deleted...");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//GET Post office info by postal code
router.get("/findbycode/:postalCode", async (req, res) => {
  try {
    const postOfficeInfo = await PostOfficeInfo.findOne({ postalCode: req.params.postalCode });
    res.status(200).json(postOfficeInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET Post office info by name
router.get("/findbyname/:name", async (req, res) => {
  try {
    const postOfficeInfo = await PostOfficeInfo.findOne({ name: req.params.name });
    res.status(200).json(postOfficeInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL

router.get("/", async (req, res) => {
  try {
    const postOfficeInfos = await PostOfficeInfo.find();
    res.status(200).json(postOfficeInfos);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

