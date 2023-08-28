const CustomerInquery = require("../models/CustomerInquery");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (req, res) => {
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

// //GET USER CART
// router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.params.userId });
//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // //GET ALL

// router.get("/", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const carts = await Cart.find();
//     res.status(200).json(carts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
