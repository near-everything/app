import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ThemedSuspense from "../components/ThemedSuspense";

function Layout() {
  return (
    <div className="flex h-full bg-gray-50 dark:bg-black text-black dark:text-white">
      <div className="flex flex-col flex-1 w-full">
        <main className="container mx-auto h-screen overflow-y-auto px-6 py-8">
          <Suspense fallback={<ThemedSuspense />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default Layout;
