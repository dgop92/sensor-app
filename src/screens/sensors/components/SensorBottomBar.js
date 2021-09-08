import React from "react";
import { View, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

export default function SensorBottomBar() {
  return (
    <FAB
      style={styles.fab}
      icon="play"
      onPress={() => console.log("Pressed")}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: 35,
    width: "100%",
    backgroundColor: "#C7E5C5",
  },
  fabContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -32,
    width: "100%",
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16,
  },
});
