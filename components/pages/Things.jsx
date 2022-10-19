import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import { gql, GraphQLClient } from "graphql-request";
import Avatar from "../Avatar";
import Thing from "../Thing";

const Things = () => {
  const graphqlClient = new GraphQLClient("http://localhost:4050/graphql");
  const { data, isLoading, isError } = useQuery(["thingsByOwner"], async () => {
    const {
      things: { edges },
    } = await graphqlClient.request(
      gql`
        query thingsByOwner {
          things {
            edges {
              node {
                id
                characteristics {
                  edges {
                    node {
                      attributeId
                      optionId
                    }
                  }
                }
                medias {
                  edges {
                    node {
                      mediaUrl
                    }
                  }
                }
              }
            }
          }
        }
      `
    );
    return edges;
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/profile" />
          </IonButtons>
          <IonTitle>Things</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        {isLoading || isError ? (
          <div>Hmmmm</div>
        ) : (
          <>
            {data && data.map((i, index) => <Thing {...i.node} key={index} />)}
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Things;
