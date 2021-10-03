import React from "react";
import { sensorsClasess, sensorKeys } from "../sensorData";
import GenericMagnitude from "../generic-screens/GenericMagnitude";

export default function MagneMagnitude() {
  const sensorClass = sensorsClasess[sensorKeys.MAGNETOMETER];

  return <GenericMagnitude sensorClass={sensorClass} units="uT" />;
}
