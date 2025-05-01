import React from "react";
import CreateOrder from "./components/CreateOrder";
import SearchOrder from "./components/SearchOrder";
import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="p-8 space-y-8">
    //   <CreateOrder />
    //   <SearchOrder />
    // </div>
    <div className="min-h-screen bg-gray-100 font-sans">
      <NavBar />
      <SearchBar />
    </div>
  );
}

export default App;
