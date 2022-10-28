import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-full">
      {children}
      <Navbar />
    </div>
  );
}

export default Layout;
