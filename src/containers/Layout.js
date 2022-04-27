import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import ThemedSuspense from "../components/ThemedSuspense";
import Main from "../containers/Main";
import routes from "../routes";


const Page404 = lazy(() => import("../pages/404"));

function Layout() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Routes>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/${route.path}`}
                    element={<route.component />}
                  />
                ) : null;
              })}
              <Route element={<Page404 />} />
            </Routes>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
