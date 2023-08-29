const CustomerInquery = require("../models/CustomerInquery");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/",async (req, res) => {
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

//GET USER inquery
router.get("/:userName", async (req, res) => {
  try {
    const customerInquery = await CustomerInquery.findOne({ userName: req.params.userName });
    res.status(200).json(customerInquery);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // //GET ALL

router.get("/",async (req, res) => {
  try {
    const customerInqueries = await CustomerInquery.find();
    res.status(200).json(customerInqueries);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
