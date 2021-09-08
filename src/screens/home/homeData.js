import AccelerometerScreen from "../sensors/AccelerometerScreen";
import BarometerScreen from "../sensors/BarometerScreen";
import GyroscopeScreen from "../sensors/GyroscopeScreen";
import MagnetometerScreen from "../sensors/MagnetometerScreen";

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