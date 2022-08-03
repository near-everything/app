import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 w-full">
        <main id="container" className="container mx-auto h-full overflow-y-auto">
          {/* <Suspense fallback={<ThemedSuspense />}> */}
          {children}
          {/* </Suspense> */}
        </main>
        <Navbar />
      </div>
      
    </div>
  );
}

export default Layout;
