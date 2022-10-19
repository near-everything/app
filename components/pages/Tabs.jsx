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
import { lazy, Suspense } from "react";
import { Redirect, Route } from "react-router-dom";

const Home = lazy(() => import("./Feed"));
const Lists = lazy(() => import("./Lists"));
const PostDetail = lazy(() => import("./PostDetail"));
const Posts = lazy(() => import("./Posts"));
const Profile = lazy(() => import("./Profile"));
const Things = lazy(() => import("./Things"));

const Tabs = () => {
  return (
    <IonTabs>
        <IonRouterOutlet>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/tabs/feed" render={() => <Home />} exact={true} />
          <Route
            path="/tabs/feed/:postId"
            render={() => <PostDetail />}
            exact={true}
          />
          <Route path="/tabs/create" render={() => <Lists />} exact={true} />
          <Route path="/tabs/profile" render={() => <Profile />} exact={true} />
          <Route
            path="/tabs/profile/things"
            render={() => <Things />}
            exact={true}
          />
          <Route
            path="/tabs/profile/posts"
            render={() => <Posts />}
            exact={true}
          />
          <Route
            path="/tabs"
            render={() => <Redirect to="/tabs/feed" />}
            exact={true}
          />
          </Suspense>
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
