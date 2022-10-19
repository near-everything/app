import { StatusBar, Style } from "@capacitor/status-bar";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";
import { Suspense } from "react";
import { Redirect, Route } from "react-router-dom";

import Tabs from "./pages/Tabs";

setupIonicReact({});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addListener(async (status) => {
    try {
      await StatusBar.setStyle({
        style: status.matches ? Style.Dark : Style.Light,
      });
    } catch {}
  });

const AppShell = () => {
  return (
    <IonApp>
        <IonReactRouter>
          <IonRouterOutlet id="main">
            <Route path="/tabs" render={() => <Tabs />} />
            <Route
              path="/"
              render={() => <Redirect to="/tabs/feed" />}
              exact={true}
            />
          </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
