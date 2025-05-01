import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router >
      <div className="bg-black text-white py-4 px-6 flex justify-between items-center">

        <div className="text-xl font-bold">VPLAK</div>
            <div className="space-x-4">
                <Link to="/Create" className="hover:underline">Create</Link>
                <a href="#" className="hover:underline">PRODUCT</a>
                <a href="#" className="hover:underline">BRAND</a>
                <a href="#" className="hover:underline">CATEGORY</a>
                <a href="#" className="hover:underline">BRAND CATEGORY</a>
                <a href="#" className="hover:underline">ORDER'S PANEL</a>
                <a href="#" className="hover:underline">BAR CHART</a>
                <a href="#" className="hover:underline">BUYING GUIDE</a>
                <a href="#" className="hover:underline">EXCEL</a>
                <a href="#" className="hover:underline">SEO TEXT</a>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded">LOGOUT</button>
        </div>
    </Router> 
    
  )
}

export default Navbar;
