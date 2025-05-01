import React from "react";
import { useState } from "react";
import axios from "axios";

const SearchBar = ({ searchQuery, setSearchQuery, searchBy, setSearchBy, onSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  let ans = results[0];
  console.log("ans", ans);

  const handleSearch = async () => {
    const res = await axios.get(`https://ordersearch-backend.onrender.com/api/orders/search?q=${query}`);
    setResults(res.data);
  };

  return (
    <>
    <div className="p-4 bg-white shadow rounded flex flex-col md:flex-row items-center gap-4 justify-center">
      <div className="flex items-center gap-4 mb-4 md:mb-0 border-2 py-3 px-5 rounded-md border-black"> 
      <div className="flex gap-4">
        {["Order Id", "Mobile", "Name", "Email"].map((type) => (
          <label key={type} className="text-sm">
            <input
              type="radio"
              name="searchBy"
              value={type}
              checked={searchBy === type}
              onChange={(e) => setSearchBy(e.target.value)}
              className="mr-1"
            />
            {type}
          </label>
        ))}
      </div>
      <input
        type="text"
        placeholder="Enter your query"
        className="border p-2 rounded w-full md:w-64"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Search Order
      </button>
      </div>
    </div>
    {
      results.length > 0 && (
        <div style={{ backgroundColor: 'white', margin: '20px auto', padding: '20px', maxWidth: '800px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <strong>Order Date</strong><br />
            30-08-2017<br />
            03:29:17 AM
          </div>
          <div>
            <a href="#" style={{ color: '#0066cc' }}>78369274</a><br />
            <span style={{ backgroundColor: '#ffcc99', padding: '2px 5px', borderRadius: '3px' }}>cod</span>
          </div>
          <div>
            <strong>Buyer Details:</strong><br />
            {ans.customerName}<br />
            {ans.customerPlace}<br />
            Email: {ans.customerEmail}<br />
            Phone: {ans.customerPhone}<br />
            Pincode: {ans.customerPincode}<br />
          </div>
          <div>
            <strong>Total:</strong> 799
          </div>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button style={{ backgroundColor: 'gray', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>TRACK</button>
          <a href="#" style={{ color: '#0000ee' }}>Generate invoice</a>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
          <img src="https://via.placeholder.com/70x70.png?text=Card" alt="product" />
          <div>
            <a href="#" style={{ color: '#0000ee' }}>{ans.ProductName}</a><br />
            Model: {ans.ProductModel}<br />
            Price: Rs. {ans.TotalPrice}<br />
            Date: 0000-00-00 00:00:00<br />
            Discount:<br />
            Qty: {ans.ProductQty}<br />
            Delivery Charge: 0<br />
            Status: {ans.ProductStatus}<br />
          </div>
        </div>
      </div>
      )}
    
    </>
  );
};

export default SearchBar;
