import React, { useState } from "react";
import axios from "axios";

export default function CreateOrder() {
  const [order, setOrder] = useState({
    order_id: '',
    product_name: '',
    product_model: '',
    price: '',
    quantity: '',
    order_status: '',
    customer_id: ''
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://ordersearch-backend.onrender.com/api/orders", order);
    alert("Order created!");
    setOrder({ customerName: "", product: "", quantity: 1 });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Create Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="block border p-2 w-full" name="order_id" placeholder="Order ID" onChange={handleChange} />
        <input className="block border p-2 w-full" name="product_name" placeholder="Product Name" onChange={handleChange} />
        <input className="block border p-2 w-full" name="product_model" placeholder="Product Model" onChange={handleChange} />
        <input className="block border p-2 w-full" name="price" placeholder="Price" onChange={handleChange} />
        <input className="block border p-2 w-full" name="quantity" placeholder="Quantity" onChange={handleChange} />
        <input className="block border p-2 w-full" name="order_status" placeholder="Order Status" onChange={handleChange} />
        <input className="block border p-2 w-full" name="customer_id" placeholder="Customer ID" onChange={handleChange} />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">Create</button>
      </form>
    </div>
  );
}
