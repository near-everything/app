import React from "react";

function Header({ title, pageNumber }) {
  return (
    <header className="z-40">
      <div className="flex items-center justify-between py-4 px-8 cursor-pointer">
        <span className="font-semibold">{title}</span>
        <span className="font-semibold">{pageNumber} / 3</span>
      </div>
    </header>
  );
}

export default Header;
