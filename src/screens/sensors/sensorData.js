import { Accelerometer } from "expo-sensors";

export const sensorsRouteData = [
  {
    path: require("../../../assets/home-screen/acce-icon.png"),
    params: {
      name: "Acelerómetro",
      sensorKey: "A",
      magnitudePageName: "AcceMagnitude",
      plotPageName: "AccePlot",
    },
  },
];

export const seriesColors = {
  x: (opacity = 1) => `rgba(241,109,98,${opacity})`,
  y: (opacity = 1) => `rgba(98,241,152,${opacity})`,
  z: (opacity = 1) => `rgba(98,222,241,${opacity})`,
};

export const sensorsClasess = {
  A: Accelerometer,
};
