import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="btm-nav">
      <Link href="/">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="btm-nav-label">home</span>
        </button>
      </Link>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="btm-nav-label">explore</span>
      </button>
      <div className="dropdown dropdown-top">
        <label tabIndex="0" className="btn btn-ghost m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="">create</span>
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/create/thing">
              <a>thing</a>
            </Link>
          </li>
          <li>
            <Link href="/create/request">
              <a>request</a>
            </Link>
          </li>
        </ul>
      </div>
      <Link href="/marketplace">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="btm-nav-label">shop</span>
        </button>
      </Link>
      <Link href="/profile">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="btm-nav-label">profile</span>
        </button>
      </Link>
    </div>
    // <nav className="z-50 shadow-lg h-16 text-sm sticky bottom-0 bg-white dark:bg-black">
    //   <div className="flex justify-between h-full">
    //     <Link href="/collect">
    //       <span className="flex flex-1 justify-center items-center hover:border-white hover:border-t-2 font-bold text-green-600 cursor-pointer">
    //         collect
    //       </span>
    //     </Link>
    //     <Link href="/request">
    //       <span className="flex flex-1 justify-center items-center hover:border-white hover:border-t-2 font-bold text-red-600 cursor-pointer">
    //         request
    //       </span>
    //     </Link>
    //     <Link href="/">
    //       <span className="flex flex-1 justify-center items-center hover:border-white hover:border-t-2 font-bold text-black-600 cursor-pointer">
    //         home
    //       </span>
    //     </Link>
    //     <Link href="/organize">
    //       <span className="flex flex-1 justify-center items-center hover:border-white hover:border-t-2 font-bold text-yellow-600 cursor-pointer">
    //         organize
    //       </span>
    //     </Link>
    //     <Link href="/explore">
    //       <span className="flex flex-1 justify-center items-center hover:border-white hover:border-t-2 font-bold text-blue-600 cursor-pointer">
    //         explore
    //       </span>
    //     </Link>
    //   </div>
    // </nav>
  );
}

export default Navbar;
