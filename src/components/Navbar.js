import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="z-50 shadow-lg h-16 text-sm">
      <div className="flex justify-between h-full">
        <Link href="/collect">
          <span className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-green-600">
            collect
          </span>
        </Link>
        <Link href="/request">
          <span className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-red-600">
            request
          </span>
        </Link>
        <Link href="/">
          <span className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-black-600">
            home
          </span>
        </Link>
        <Link href="/organize">
          <span className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-yellow-600">
            organize
          </span>
        </Link>
        <Link href="/explore">
          <span className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-blue-600">
            explore
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
