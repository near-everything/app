import React, { Suspense } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
import App from "./App";
import { store } from "./app/store";
import * as serviceWorker from "./serviceWorker";
import ThemedSuspense from "./components/ThemedSuspense";
import { SidebarProvider } from "./context/SidebarContext";
import { ThemeProvider } from "./context/ThemeContext";
import DarkModeProvider from "./components/DarkMode";

const persistor = persistStore(store);
const queryClient = new QueryClient();

ReactDom.render(
  <React.StrictMode>
    <DarkModeProvider>
      <SidebarProvider>
        <ThemeProvider>
          <Provider store={store}>
            <PersistGate loading={<ThemedSuspense />} persistor={persistor}>
              <Suspense fallback={<ThemedSuspense />}>
                <QueryClientProvider client={queryClient}>
                  <App />
                </QueryClientProvider>
              </Suspense>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </SidebarProvider>
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
