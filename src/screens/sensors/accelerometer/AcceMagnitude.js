import React from "react";
import { sensorsClasess, sensorKeys } from "../sensorData";
import GenericMagnitude from "../generic-screens/GenericMagnitude";

export default function AcceMagnitude() {
  const sensorClass = sensorsClasess[sensorKeys.ACCELEROMETER];

  return (
    <GenericMagnitude sensorSymbol="a" sensorClass={sensorClass} units="G" />
  );
}
