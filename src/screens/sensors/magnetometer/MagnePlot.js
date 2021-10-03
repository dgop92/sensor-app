import React from "react";
import { sensorsClasess, sensorKeys } from "../sensorData";
import GenericPlot from "../generic-screens/GenericPlot";

export default function MagnePlot() {
  const sensorClass = sensorsClasess[sensorKeys.MAGNETOMETER];

  return <GenericPlot sensorClass={sensorClass} units="uT" />;
}
