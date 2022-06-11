import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ThemedSuspense from "../components/ThemedSuspense";

function Layout() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-black text-black dark:text-white">
      <div className="flex flex-col flex-1 w-full">
        <main className="container mx-auto h-full overflow-y-auto">
          <Suspense fallback={<ThemedSuspense />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default Layout;
