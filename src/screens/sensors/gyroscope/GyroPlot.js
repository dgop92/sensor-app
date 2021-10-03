import React from "react";
import { sensorsClasess, sensorKeys } from "../sensorData";
import GenericPlot from "../generic-screens/GenericPlot";

export default function GyroPlot() {
  const sensorClass = sensorsClasess[sensorKeys.GYROSCOPE];

  return <GenericPlot sensorClass={sensorClass} units="rad/s" />;
}
