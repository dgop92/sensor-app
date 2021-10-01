import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { Badge, Surface, Text } from "react-native-paper";
import VectorSensorChart from "../components/VectorSensorChart";
import { usePlotVectorialSensor, useVectorialSensor } from "../sensorUtils";
import { Accelerometer } from "expo-sensors";
import SensorIntervalDialog from "../components/SensorIntervalDialog";
import SensorBottomBar from "../components/SensorBottomBar";
import { seriesColors } from "../sensorData";
import { roundTo2 } from "../../../utils";

export default function AccePlot() {
  const { sensorData, setSensorData, changeTimeInterval, timeInterval } =
    useVectorialSensor({
      sensorClass: Accelerometer,
    });

  const onSensorData = (data) => {
    setSensorData(data);
  };

  const { plotData } = usePlotVectorialSensor({ sensorData, timeInterval });

  const [chartHeight, setChartHeight] = useState(200);
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const changeScreenOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  };

  const onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setChartHeight(height);
  };

  useEffect(() => {
    changeScreenOrientation();
    return () => ScreenOrientation.unlockAsync();
  }, []);

  const units = "G";

  return (
    <View style={styles.plotScreen}>
      <Surface onLayout={onLayout} style={styles.chartContainer}>
        <VectorSensorChart
          sensorComponents={plotData.sensorComponents}
          xLabels={plotData.intervalValues}
          units={units}
          chartHeight={chartHeight}
        />
      </Surface>
      <Surface style={styles.plotInfo}>
        {Object.entries(sensorData).map((pair, index) => (
          <PlotItem
            key={index}
            name={pair[0]}
            value={pair[1]}
            badgeColor={seriesColors[pair[0]]()}
            units={units}
          />
        ))}
      </Surface>
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

function PlotItem({ name, value, badgeColor, units }) {
  return (
    <View style={styles.plotItem}>
      <Badge style={[styles.badge, { backgroundColor: badgeColor }]}>
        {name}
      </Badge>
      <Text>{`${roundTo2(value)} ${units}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  plotScreen: {
    flex: 1,
    paddingBottom: 40,
  },
  chartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  plotInfo: {
    width: "100%",
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  plotItem: {
    flexDirection: "row",
    padding: 2,
    marginLeft: 16,
    marginRight: 16,
  },
  badge: {
    marginRight: 4,
    color: "#fff",
  },
});
