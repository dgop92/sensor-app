import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SensorItem from "./SensorItem";

const sensorsData = [
  {
    name: "Acelerómetro",
    path: require("../../../assets/home-screen/acce-icon.png"),
  },
  {
    name: "Giroscopio",
    path: require("../../../assets/home-screen/gyros-icon.png"),
  },
  {
    name: "Magnetómetro",
    path: require("../../../assets/home-screen/magnet-icon.png"),
  },
  {
    name: "Barómetro",
    path: require("../../../assets/home-screen/bar-icon.png"),
  },
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.homePage}>
        <View style={styles.sensorContainer}>
          {sensorsData.map((sensorItemData, index) => (
            <SensorItem
              key={index}
              name={sensorItemData.name}
              path={sensorItemData.path}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  sensorContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: 512,
    width: "100%",
  },
  scroll: {
    flexGrow: 1, 
    justifyContent: 'center',
  }
});
