import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import SensorItem from "./SensorItem";
import { sensorsData } from "../sensors/sensorRouteData";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.homePage}>
        <View style={styles.sensorContainer}>
          {sensorsData.map((sensorItemData, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              onPress={() =>
                navigation.navigate("SensorMode", sensorItemData.params)
              }
            >
              <SensorItem
                name={sensorItemData.name}
                path={sensorItemData.path}
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
