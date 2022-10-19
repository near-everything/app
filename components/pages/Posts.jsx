import {
  IonContent,
  IonHeader,
  IonPage, IonTitle,
  IonToolbar
} from "@ionic/react";

const Posts = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding"></IonContent>
    </IonPage>
  );
};

export default Posts;
