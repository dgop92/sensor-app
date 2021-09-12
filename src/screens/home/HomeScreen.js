import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import SensorItem from "./SensorItem";
import { sensorsRouteData } from "../sensors/sensorData";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.homePage}>
        <View style={styles.sensorContainer}>
          {sensorsRouteData.map((sensorRoute, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              onPress={() =>
                navigation.navigate("SensorMode", sensorRoute.params)
              }
            >
              <SensorItem
                name={sensorRoute.name}
                path={sensorRoute.path}
              />
            </TouchableOpacity>
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
    justifyContent: "center",
  },
});
