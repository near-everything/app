import React from "react";

function Header({ title, pageNumber }) {
  return (
    <header className="z-40">
      <div className="container flex items-center justify-between h-full mx-auto">
        <span className="font-semibold">{title}</span>
        <span className="font-semibold">{pageNumber} / 5</span>
      </div>
    </header>
  );
}

export default Header;
