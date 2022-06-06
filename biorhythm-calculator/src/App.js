import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from "@ionic/react";
import React, { useState } from "react";
import BiorhythmCard from "./components/BiorhythmCard";
import { useLocalStorage } from "./hooks";

function App() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useLocalStorage("birthDate", "");
  const [targetDate, setTargetDate] = useLocalStorage(new Date().toISOString());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <IonItem>
          <IonLabel position="stacked">Name:</IonLabel>
          <IonInput
            value={name}
            type="text"
            placeholder="Your Name"
            onIonChange={(event) => setName(event.detail.value)}
          />
        </IonItem> */}
        {birthDate && targetDate && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        )}
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="YYYY MM DD"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Target Date:</IonLabel>
          <IonDatetime
            displayFormat="YYYY MM DD"
            value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
