import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-full px-2 overflow-y-scroll">
      <div className="flex flex-1 flex-col relative mb-16 rounded-b-3xl">
        {children}
        <Navbar />
      </div>
    </div>
  );
}

export default Layout;
