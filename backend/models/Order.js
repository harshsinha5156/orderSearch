// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  product: String,
  quantity: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
