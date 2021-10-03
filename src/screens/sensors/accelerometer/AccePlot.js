import React from "react";
import { sensorKeys, sensorsClasess } from "../sensorData";
import GenericPlot from "../generic-screens/GenericPlot";

export default function AccePlot() {
  const sensorClass = sensorsClasess[sensorKeys.ACCELEROMETER];

  return <GenericPlot sensorClass={sensorClass} units="G" />;
}
