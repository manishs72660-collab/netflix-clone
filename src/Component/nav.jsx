import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-12 py-4 bg-black text-white">

      {/* Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className="w-32 cursor-pointer"
        alt="Netflix"
      />

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Search Button */}
        <Link to="/searchpage">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Search Movies
          </button>
        </Link>

        {/* My List Icon */}
        <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
          <FaPlus />
          My List
        </button>

        {/* Sign Out */}
        <button className="bg-red-600 px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition">
          Sign Out
        </button>

      </div>
    </div>
  );
};

export default Navbar;