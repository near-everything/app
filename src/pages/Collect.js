import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ThemedSuspense from "../components/ThemedSuspense";
import Layout from "../containers/Layout";
import routes from "../routes";
import Main from "./Main";

function Collect() {
  return (
    <>
      <Suspense fallback={<ThemedSuspense />}>
        <Routes>
          <Route index element={<Main />} />
          <Route element={<Layout />}>
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
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default Collect;
