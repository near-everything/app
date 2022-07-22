import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ThemedSuspense from "../../components/ThemedSuspense";
import ModuleContainer from "../../containers/ModuleContainer";
import { requestRoutes } from "../../routes";

function Request() {
  return (
    <>
      <Suspense fallback={<ThemedSuspense />}>
        <Routes>
          <Route element={<ModuleContainer moduleName="request" moduleColor="red" />}>
            {requestRoutes.map((route, i) => {
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

export default Request;
