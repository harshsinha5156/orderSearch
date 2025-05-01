import React from "react";

const OrderDetailsCard = ({ order }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mt-4">
      <div className="flex justify-between text-sm mb-2">
        <div>
          <p><strong>Order Date:</strong> {order.date}</p>
          <p><strong>Order ID:</strong> <span className="text-blue-600 cursor-pointer">{order.id}</span></p>
          <p><span className="bg-yellow-300 px-2 py-1 rounded text-xs">COD</span></p>
        </div>
        <div className="text-right">
          <p><strong>Total:</strong> ₹{order.total}</p>
          <button className="bg-gray-300 px-3 py-1 rounded mr-2">Track</button>
          <a href="#" className="text-blue-500 underline">Generate invoice</a>
        </div>
      </div>

      <div className="border-t pt-2">
        <p><strong>Buyer Details:</strong></p>
        <p>{order.buyer.name}, {order.buyer.city}</p>
        <p>{order.buyer.email}</p>
        <p>Phone: {order.buyer.phone}</p>
        <p>Pincode: {order.buyer.pincode}</p>
      </div>

      <div className="border-t pt-2 mt-2">
        <div className="flex items-center gap-4">
          <img src={order.product.image} alt="" className="w-16 h-16 object-cover" />
          <div>
            <a href="#" className="text-blue-600 underline">{order.product.name}</a>
            <p>Model: {order.product.model}</p>
            <p>Price: ₹{order.product.price}</p>
            <p>Qty: {order.product.quantity}</p>
            <p>Delivery Charge: ₹{order.product.delivery}</p>
            <p>Status: {order.product.status || "Pending"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
