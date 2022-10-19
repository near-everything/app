import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonNav,
  IonNavLink,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Avatar from "../Avatar";
import Things from "./Things";

const Profile = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="flex flex-col items-center justify-between h-64 mt-24">
          <Avatar color="#0f76ca" size={24} />
          <div>
            <IonRouterLink
              routerLink={`/tabs/profile/things`}
              routerDirection="forward"
            >
              <IonButton>Things</IonButton>
            </IonRouterLink>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
