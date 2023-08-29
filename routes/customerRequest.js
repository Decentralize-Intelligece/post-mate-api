const CustomerRequest = require("../models/CustomerRequest");
// const Customer = require("../models/CustomerRequest");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", async (req, res) => {
    const newCustomerRequest = new CustomerRequest(req.body);

    try {
        const savedCustomerRequest = await newCustomerRequest.save();
        res.status(200).json(savedCustomerRequest);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TOTAL NUMBER OF REQUEST
router.get("/count", async (req, res) => {
    try {
        const totalRequest = await CustomerRequest.find().count();
        res.status(200).json(totalRequest);
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET ALL REQUEST
router.get("/", async (req, res) => {
    try {
        const totalRequest = await CustomerRequest.find();
        res.status(200).json(totalRequest);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ACCEPT REQUEST
router.put("/accept/:id", async (req, res) => {
    // update requestAccepted to "accepted" in CustomerRequest
    try {
        const requestAccepted = await CustomerRequest.findByIdAndUpdate(
            req.params.id,
            {
                $set: {requestAccepted: "accepted"},
            },
            {new: true}
        );
        res.status(200).json(requestAccepted);
    } catch (err) {
        res.status(500).json(err);
    }
});

// REJECT REQUEST
router.put("/reject/:id", async (req, res) => {
    // update requestAccepted to "rejected" in CustomerRequest
    try {
        const requestRejected = await CustomerRequest.findByIdAndUpdate(
            req.params.id,
            {
                $set: {requestAccepted: "rejected"},
            },
            {new: true}
        );
        res.status(200).json(requestRejected);
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

//GET USER Request
router.get("/:userName", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const customerRequest = await CustomerRequest.findOne({userName: req.params.userName});
        res.status(200).json(customerRequest);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL
router.get("/", async (req, res) => {
    try {
        const requests = await CustomerRequest.find();
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
