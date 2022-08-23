import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="btm-nav">
      <Link href="/collect">
        <span className="text-primary hover:border-accent hover:border-t-2 font-bold">
          collect
        </span>
      </Link>
      <Link href="/request">
        <span className="text-primary hover:border-accent hover:border-t-2 font-bold">
          request
        </span>
      </Link>
      <Link href="/">
        <span className="text-primary hover:border-accent hover:border-t-2 font-bold">
          home
        </span>
      </Link>
      <Link href="/organize">
        <span className="text-primary hover:border-accent hover:border-t-2 font-bold">
          organize
        </span>
      </Link>
      <Link href="/explore">
        <span className="text-primary hover:border-accent hover:border-t-2 font-bold">
          explore
        </span>
      </Link>
    </nav>
  );
}

export default Navbar;
