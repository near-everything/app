import {
  IonBackButton,
  IonButtons, IonContent,
  IonHeader, IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { useParams } from "react-router-dom";

import Store from "../../store";
import { getHomeItems } from "../../store/selectors";
import Post from "../Post";

const PostDetail = () => {
  const posts = Store.useState(getHomeItems);
  const params = useParams();
  const { postId } = params;
  const loadedPost = posts.find((p) => p.id === postId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/feed" />
          </IonButtons>
          <IonTitle>{loadedPost.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Post {...loadedPost} />
      </IonContent>
    </IonPage>
  );
};

export default PostDetail;
