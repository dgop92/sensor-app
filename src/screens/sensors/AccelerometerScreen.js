import { Accelerometer } from "expo-sensors";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SensorBottomBar from "./components/SensorBottomBar";
import SensorNotAvailable from "./SensorNotAvailable";
// import { useVectorialSensor } from "./sensorUtils";

export default function AccelerometerScreen() {
  const isSensorAvaliable = async () => {
    try {
      const isAvailable = await Accelerometer.isAvailableAsync();
      console.log(typeof isAvailable);
      return isAvailable;
    } catch (error) {
      return false;
    }
  };

  if (isSensorAvaliable()) {
    return <AccelerometerView />;
  } else {
    return <SensorNotAvailable sensorName="Acelerometro" />;
  }
}

function AccelerometerView() {
  /* const { sensorData, unsubscribe } = useVectorialSensor({
    sensorClass: Accelerometer,
  }); */

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.testContainer}></View>
        <View style={styles.testContainer}></View>
        <View style={styles.testContainer}></View>
      </ScrollView>
      <SensorBottomBar></SensorBottomBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  testContainer: {
    margin: 8,
    height: 200,
    backgroundColor: "#66F5D2",
  },
  scroll: {
    paddingBottom: 0
  }
});

/* <Paragraph>{sensorData.intervalValues.toString()}</Paragraph>
      <Paragraph>
        {sensorData.sensorComponents.map((v) => `(${v.x}, ${v.y}) `).toString()}
      </Paragraph>
      <Button onPress={() => unsubscribe()}>Desus</Button> */
