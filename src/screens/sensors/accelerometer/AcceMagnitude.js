import { Accelerometer } from "expo-sensors";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SensorBottomBar from "../components/SensorBottomBar";
import MagnitudeCard from "../components/MagnitudeCard";
import { useVectorialSensor } from "../sensorUtils";

export default function AcceMagnitude() {
  /* const { sensorData, subscriptionTools } = useVectorialSensor({
    sensorClass: Accelerometer,
  }); */
  const sensorData = {
    x: 3,
    y: 3,
    z: 3,
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <MagnitudeCard name="X" value={sensorData.x} units="G" />
        <MagnitudeCard name="Y" value={sensorData.y} units="G" />
        <MagnitudeCard name="Z" value={sensorData.z} units="G" />
        <MagnitudeCard name="X" value={sensorData.x} units="G" />
        <MagnitudeCard name="a" value={sensorData.y} units="G" />
        <MagnitudeCard name="Z" value={sensorData.z} units="G" />
        <MagnitudeCard name="X" value={sensorData.x} units="G" />
        <MagnitudeCard name="Y" value={sensorData.y} units="G" />
        <MagnitudeCard name="Z" value={sensorData.z} units="G" />
      </ScrollView>
      <SensorBottomBar subscriptionTools={sensorData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
  },
  scroll: {
    paddingBottom: 48,
  },
});
