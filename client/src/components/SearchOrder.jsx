import React, { useState } from "react";
import axios from "axios";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  let ans = results[0];

  const handleSearch = async () => {
    const res = await axios.get(`http://localhost:5000/api/orders/search?q=${query}`);
    setResults(res.data);
    console.log(res.data);
    
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Search Orders</h2>
      <input
        className="border w-full p-2"
        placeholder="Search by name or product"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSearch}>
        Search
      </button>

      <ul className="mt-4 space-y-2">
        {results.map((order) => (
          <li key={order._id} className="border p-2 rounded">
            <div><strong>Name:</strong> {ans.customerName}</div>
            <div><strong>Product:</strong> {order.product}</div>
            <div><strong>Quantity:</strong> {order.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
