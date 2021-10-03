import React from "react";
import { sensorsClasess, sensorKeys } from "../sensorData";
import GenericMagnitude from "../generic-screens/GenericMagnitude";

export default function GyroMagnitude() {
  const sensorClass = sensorsClasess[sensorKeys.GYROSCOPE];

  return <GenericMagnitude sensorClass={sensorClass} units="rad/s" />;
}
