import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { firebase } from "./app/firebase";
import * as serviceWorker from "./serviceWorker";
import ThemedSuspense from "./components/ThemedSuspense";
import { DatabaseProvider } from "./context/DatabaseContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DatabaseProvider value={firebase}>
        <Suspense fallback={<ThemedSuspense />}>
          <App />
        </Suspense>
      </DatabaseProvider>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
