import Card from "../ui/Card";

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { notificationsOutline } from "ionicons/icons";
import Image from "next/image";
import { useState } from "react";
import Store from "../../store";
import { getHomeItems } from "../../store/selectors";
import Notifications from "./Notifications";
import Avatar from "../Avatar";
import Post from "../Post";
import { useQuery } from "@tanstack/react-query";
import { gql, GraphQLClient } from "graphql-request";

const Feed = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-4xl">everything</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications
          open={showNotifications}
          onDidDismiss={() => setShowNotifications(false)}
        />
        {homeItems.map((i, index) => (
          <Post {...i} key={index} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Feed;
