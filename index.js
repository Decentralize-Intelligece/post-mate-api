const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postOfficeInfoRoute = require("./routes/postOfficeInfo");
const stripeRoute = require("./routes/stripe");
const customerRoute = require("./routes/customer");
const customerInqueryRoute = require("./routes/customerInquery");
const customerRequestRoute = require("./routes/customerRequest");
const notificationRoute = require("./routes/notificationRoute");
const userFeedbackRoute = require("./routes/userFeedback");
const postalCost = require("./routes/postalCost");
const cors = require("cors");


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/postofficeinfo", postOfficeInfoRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/customers", customerRoute);
app.use("/api/inqueries", customerInqueryRoute);
app.use("/api/userfeedback", userFeedbackRoute);
app.use("/api/requests", customerRequestRoute);
app.use("/api/notifications", notificationRoute);
app.use("/api/postalcost", postalCost);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})