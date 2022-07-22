import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThemedSuspense from "../components/ThemedSuspense";

function Layout() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1 w-full justify-between">
        <main className="container mx-auto h-full overflow-y-auto">
          <Suspense fallback={<ThemedSuspense />}>
            <Outlet />
          </Suspense>
        </main>
        <Navbar />
      </div>
    </div>
  );
}

export default Layout;
