import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="z-50 shadow-lg h-16">
      <div className="flex justify-between h-full">
        <Link
          to="collect"
          className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-green-600"
        >
          collect
        </Link>
        <Link
          to="request"
          className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-red-600"
        >
          request
        </Link>
        <Link
          to="organize"
          className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-yellow-600"
        >
          organize
        </Link>
        <Link
          to="profile"
          className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-black-600"
        >
          profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
