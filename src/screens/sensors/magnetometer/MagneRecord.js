import React from "react";
import { sensorKeys, sensorsClasess } from "../sensorData";
import GenericRecord from "../generic-screens/GenericRecord";

export default function MagneRecord() {
  const sensorClass = sensorsClasess[sensorKeys.MAGNETOMETER];

  return (
    <GenericRecord
      sensorClass={sensorClass}
      sensorKey={sensorKeys.MAGNETOMETER}
    />
  );
}
