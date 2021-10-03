import React from "react";
import { sensorKeys, sensorsClasess } from "../sensorData";
import GenericRecord from "../generic-screens/GenericRecord";

export default function GyroRecord() {
  const sensorClass = sensorsClasess[sensorKeys.GYROSCOPE];

  return (
    <GenericRecord sensorClass={sensorClass} sensorKey={sensorKeys.GYROSCOPE} />
  );
}
