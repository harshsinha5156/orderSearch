// routes/orderRoutes.js
const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Create Order
router.post("/", async (req, res) => {
  console.log(req.body);
  console.log("Creating order with data:", req.body);
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json(newOrder);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// Search Orders
router.get("/search", async (req, res) => {
  const { q } = req.query;

  try {
    const results = await Order.aggregate([
      {
        $lookup: {
          from: "customers", // collection name in MongoDB
          localField: "customer_id", // from orders
          foreignField: "customer_id", // from customers
          as: "customer_info"
        }
      },
      {
        $unwind: "$customer_info" // flatten the joined array
      },
      {
        $match: {
          "customer_info.customer_name": { $regex: q, $options: "i" }
        }
      },
      {
        $project: {
          _id: 0,
          order_id: 1,
          product_name: 1,
          product_model: 1,
          quantity: 1,
          order_status: 1,
          payment_type: 1,
          customer_name: "$customer_info.customer_name",
          customer_contact: "$customer_info.customer_contact",
          customer_city: "$customer_info.customer_city",
          customer_state: "$customer_info.customer_state",
          customer_shipping_address: "$customer_info.customer_shipping_address"
        }
      }
    ]);

    res.json(results);
  } catch (err) {
    console.error("Search error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
