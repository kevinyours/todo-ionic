import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { ENTRIES } from "../models";

const HomePage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {ENTRIES.map((entry) => (
            <IonItem button key={entry.id} routerLink={`/entries/${entry.id}`}>
              {entry.title}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonApp>
  );
};

export default HomePage;
