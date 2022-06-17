import axios from "axios";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { API_URL } from "../app/api";
import ThemedSuspense from "../components/ThemedSuspense";
import Layout from "../containers/Layout";
import { setLabels } from "../features/labels/labelsSlice";
import routes from "../routes";
import Main from "./Main";

function Collect() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAllLabels() {
      await axios
        .get(API_URL + "/category/")
        .then((res) => {
          const allLabels = res.data;
          dispatch(setLabels(allLabels));
        })
        .catch((err) => console.error(err));
    };
    getAllLabels();
  }, [dispatch])

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
