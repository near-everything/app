import React, { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import ThemedSuspense from "../components/ThemedSuspense";
import Main from "../pages/Main";
import routes from "../routes";

function Layout() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main className="h-full overflow-y-auto px-6">
            <Suspense fallback={<ThemedSuspense />}>
              <Outlet />
            </Suspense>
        </main>
      </div>
    </div>
  );
}

export default Layout;
