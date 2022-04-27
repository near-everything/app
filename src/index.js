import React, { Suspense } from "react";
import ReactDom from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { store } from "./app/store";
import DarkModeProvider from "./components/DarkMode";
import ThemedSuspense from "./components/ThemedSuspense";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import * as serviceWorker from "./serviceWorker";


const persistor = persistStore(store);
const queryClient = new QueryClient();

ReactDom.render(
  <React.StrictMode>
    <DarkModeProvider>
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
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
