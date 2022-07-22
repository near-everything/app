import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ThemedSuspense from "../../components/ThemedSuspense";
import ModuleContainer from "../../containers/ModuleContainer";
import { profileRoutes } from "../../routes";

function Profile() {
  return (
    <>
      <Suspense fallback={<ThemedSuspense />}>
        <Routes>
          <Route
            element={
              <ModuleContainer moduleName="profile" moduleColor="black" />
            }
          >
            {profileRoutes.map((route, i) => {
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

export default Profile;
