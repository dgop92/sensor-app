import React from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

export default function SensorNotAvailable({ sensorName }) {
  return (
    <View style={styles.container}>
      <Title>{sensorName} no está disponible</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C7E5C5"
  },
});
