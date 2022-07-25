import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import ThemedSuspense from "../components/ThemedSuspense";

function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1 w-full justify-between">
        <main className="container mx-auto h-full overflow-y-auto">
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
