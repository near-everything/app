import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1 w-full justify-between">
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
