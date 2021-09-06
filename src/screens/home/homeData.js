import AccelerometerScreen from "../accelerometer/AccelerometerScreen";
import BarometerScreen from "../barometer/BarometerScreen";
import GyroscopeScreen from "../gyroscope/GyroscopeScreen";
import MagnetometerScreen from "../magnetometer/MagnetometerScreen";

export const sensorsData = [
  {
    name: "Acelerómetro",
    path: require("../../../assets/home-screen/acce-icon.png"),
    pageName: "Accelerometer",
    screenComponent: AccelerometerScreen,
  },
  {
    name: "Giroscopio",
    path: require("../../../assets/home-screen/gyros-icon.png"),
    pageName: "Gyroscope",
    screenComponent: GyroscopeScreen,
  },
  {
    name: "Magnetómetro",
    path: require("../../../assets/home-screen/magnet-icon.png"),
    pageName: "Magnetometer",
    screenComponent: MagnetometerScreen,
  },
  {
    name: "Barómetro",
    path: require("../../../assets/home-screen/bar-icon.png"),
    pageName: "Barometer",
    screenComponent: BarometerScreen,
  },
];