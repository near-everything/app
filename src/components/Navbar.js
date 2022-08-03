import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="z-50 shadow-lg h-16 text-sm sticky bottom-0 bg-white dark:bg-black">
      <div className="flex justify-between h-full">
        <Link href="/collect">
          <span className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-green-600 cursor-pointer">
            collect
          </span>
        </Link>
        <Link href="/request">
          <span className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-red-600 cursor-pointer">
            request
          </span>
        </Link>
        <Link href="/">
          <span className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-black-600 cursor-pointer">
            home
          </span>
        </Link>
        <Link href="/organize">
          <span className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-yellow-600 cursor-pointer">
            organize
          </span>
        </Link>
        <Link href="/explore">
          <span className="flex flex-1 justify-center items-center hover:bg-gray-100 font-bold text-blue-600 cursor-pointer">
            explore
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
