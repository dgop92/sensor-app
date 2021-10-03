import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SensorBottomBar from "../components/SensorBottomBar";
import MagnitudeCard from "../components/MagnitudeCard";
import { useVectorialSensor } from "../sensorUtils";
import SensorIntervalDialog from "../components/SensorIntervalDialog";

export default function GenericMagnitude({
  sensorClass,
  units,
  extraMagnitudeCardData = [],
}) {
  const { sensorData, setSensorData, changeTimeInterval, timeInterval } =
    useVectorialSensor({
      sensorClass: sensorClass,
    });
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const onSensorData = (data) => {
    setSensorData(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <MagnitudeCard name="X" value={sensorData.x} units={units} />
        <MagnitudeCard name="Y" value={sensorData.y} units={units} />
        <MagnitudeCard name="Z" value={sensorData.z} units={units} />
        {extraMagnitudeCardData.map((data, index) => (
          <MagnitudeCard
            key={index}
            name={data.name}
            value={() => data.getValue(sensorData)}
            units={data.units}
          />
        ))}
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
        sensorClass={sensorClass}
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
