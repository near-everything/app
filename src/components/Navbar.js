import Link from "next/link";
import React from "react";
import {
  faSquarePlus,
  faShop,
  faUser,
  faGlobe,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div className="btm-nav bg-black">
      <Link href="/">
        <div className="flex justify-center items-center">
          <button className="btn btn-ghost hover:text-primary">
            <FontAwesomeIcon size="xl" icon={faGlobe} />
          </button>
        </div>
      </Link>
      <div className="flex justify-center items-center">
        <button className="btn btn-ghost hover:text-primary">
          <FontAwesomeIcon size="xl" icon={faMagnifyingGlass} />
        </button>
      </div>
      <Link href="/create/thing">
        <div className="dropdown dropdown-top flex justify-center items-center">
          <label tabIndex="0" className="btn btn-ghost hover:text-primary">
            <FontAwesomeIcon size="xl" icon={faSquarePlus} />
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu menu-horizontal p-2 shadow bg-base-100 rounded-box w-auto items-center"
          >
            <li>
              <Link href="/create/thing">
                <a>THING</a>
              </Link>
            </li>
            <li>
              <Link href="/create/request">
                <a>REQUEST</a>
              </Link>
            </li>
          </ul>
        </div>
      </Link>
      <Link href="/marketplace">
        <div className="flex justify-center items-center">
          <button className="btn btn-ghost hover:text-primary">
            <FontAwesomeIcon size="xl" icon={faShop} />
          </button>
        </div>
      </Link>
      <Link href="/profile">
        <div className="flex justify-center items-center">
          <button className="btn btn-ghost hover:text-primary">
            <FontAwesomeIcon size="xl" icon={faUser} />
          </button>
        </div>
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
