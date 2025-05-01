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
    const results = await Order.find({
      $or: [
        { customerName: { $regex: q, $options: "i" } },
        { product: { $regex: q, $options: "i" } },
      ],
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
