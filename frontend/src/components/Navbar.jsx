import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    alert("Logout clicked (mock)");
  };

  return (
    <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">
      {/* App logo/title */}
      <div className="text-xl font-bold text-blue-600">MyApp</div>

      {/* Navigation links */}
      <div className="flex items-center space-x-6">
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition">
          Dashboard
        </Link>
        <Link to="/community" className="text-gray-700 hover:text-blue-600 transition">
          Community
        </Link>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="ml-4 py-1 px-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
