import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 w-full">
        <main
          id="container"
          className="flex flex-col mx-auto h-full overflow-y-auto"
        >
          {children}
        </main>
        <Navbar />
      </div>
    </div>
  );
}

export default Layout;
