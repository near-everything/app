import { faGlobe, faSquarePlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Navbar() {
  return (
    <div className="btm-nav text-gray-200">
      <NavbarItem href="/" icon={faGlobe} color={"text-green-600"} />
      <NavbarItem
        href="/create/thing"
        icon={faSquarePlus}
        color={"text-green-600"}
      />
      <NavbarItem href="/profile" icon={faUser} color={"text-green-600"} />
    </div>
  );
}

function NavbarItem({href, icon, color}) {
  const router = useRouter()
  return (
    <>
      <Link href={href}>
        <div className="flex justify-center items-center">
          <div className={`${router.pathname === href ? color : ""}`}>
            <FontAwesomeIcon size="xl" icon={icon} />
          </div>
        </div>
      </Link>
    </>
  );
}

export default Navbar;
