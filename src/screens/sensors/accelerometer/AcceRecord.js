import React from "react";
import { sensorKeys, sensorsClasess } from "../sensorData";
import GenericRecord from "../generic-screens/GenericRecord";

export default function AcceRecord() {
  const sensorClass = sensorsClasess[sensorKeys.ACCELEROMETER];

  return (
    <GenericRecord
      sensorClass={sensorClass}
      sensorKey={sensorKeys.ACCELEROMETER}
    />
  );
}
