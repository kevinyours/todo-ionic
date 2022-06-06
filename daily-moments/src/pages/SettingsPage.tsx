import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRouterLink,
} from "@ionic/react";
import React from "react";

const SettingsPage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Go to <IonRouterLink routerLink="/home">Home</IonRouterLink>
      </IonContent>
    </IonApp>
  );
};

export default SettingsPage;
