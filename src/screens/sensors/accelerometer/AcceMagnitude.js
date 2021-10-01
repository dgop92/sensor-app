import { Accelerometer } from "expo-sensors";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SensorBottomBar from "../components/SensorBottomBar";
import MagnitudeCard from "../components/MagnitudeCard";
import { useVectorialSensor } from "../sensorUtils";
import SensorIntervalDialog from "../components/SensorIntervalDialog";

export default function AcceMagnitude() {
  const { sensorData, setSensorData, changeTimeInterval, timeInterval } =
    useVectorialSensor({
      sensorClass: Accelerometer,
    });
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const onSensorData = (data) => {
    setSensorData(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <MagnitudeCard name="X" value={sensorData.x} units="G" />
        <MagnitudeCard name="Y" value={sensorData.y} units="G" />
        <MagnitudeCard name="Z" value={sensorData.z} units="G" />
      </ScrollView>
      <SensorIntervalDialog
        dialogVisible={visible}
        setDialogVisible={setVisible}
        timeInterval={timeInterval}
        changeTimeInterval={changeTimeInterval}
      />
      <SensorBottomBar
        onIntervaTimeText={showDialog}
        timeInterval={timeInterval}
        sensorClass={Accelerometer}
        onSensorData={onSensorData}
      />
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
