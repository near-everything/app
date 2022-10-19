import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {
  addCircleOutline,
  globeOutline,
  personCircleOutline,
} from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";

import Home from "./Feed";
import Lists from "./Lists";
import PostDetail from "./PostDetail";
import Profile from "./Profile";

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/feed" render={() => <Home />} exact={true} />
        <Route
          path="/tabs/feed/:postId"
          render={() => <PostDetail />}
          exact={true}
        />
        <Route path="/tabs/create" render={() => <Lists />} exact={true} />
        <Route path="/tabs/profile" render={() => <Profile />} exact={true} />
        <Route
          path="/tabs"
          render={() => <Redirect to="/tabs/feed" />}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/feed">
          <IonIcon icon={globeOutline} />
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/create">
          <IonIcon icon={addCircleOutline} />
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/profile">
          <IonIcon icon={personCircleOutline} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
