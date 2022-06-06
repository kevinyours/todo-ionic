import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import dayjs from "dayjs";
import { calculateBiorhythms } from "../calculations";

function formatDate(isoString) {
  return dayjs(isoString).format("YYYY MM DD");
}

function BiorhythmCard({ birthDate, targetDate }) {
  const { physical, emotional, intellectual } = calculateBiorhythms(
    birthDate,
    targetDate,
  );
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Physical: {physical.toFixed(4)}</p>
        <p>Emotional: {emotional.toFixed(4)}</p>
        <p>Intellectual: {intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );
}

export default BiorhythmCard;
