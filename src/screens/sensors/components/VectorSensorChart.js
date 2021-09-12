import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { seriesColors } from "../sensorData";

export default function VectorSensorChart({
  xLabels,
  sensorComponents,
  units,
  chartHeight = 200,
}) {
  const { width: screenWidth } = useWindowDimensions();

  const components = getDatasetFromSensorComponents(sensorComponents);

  if (xLabels.length < 1) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading</Text>
      </View>
    );
  }

  const data = {
    labels: xLabels,
    datasets: [
      {
        data: components.x,
        strokeWidth: 2,
        color: seriesColors.x,
      },
      {
        data: components.y,
        strokeWidth: 2,
        color: seriesColors.y,
      },
      {
        data: components.z,
        strokeWidth: 2,
        color: seriesColors.z,
      },
    ],
  };

  return (
    <LineChart
      bezier
      data={data}
      width={screenWidth - 16}
      height={chartHeight - 16}
      yAxisSuffix={units}
      yAxisInterval={1}
      chartConfig={{
        backgroundColor: "#1cc910",
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      }}
    />
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

function getDatasetFromSensorComponents(sensorComponents) {
  const components = {
    x: [],
    y: [],
    z: [],
  };
  sensorComponents.forEach((sensorComponent) => {
    components.x.push(sensorComponent.x);
    components.y.push(sensorComponent.y);
    components.z.push(sensorComponent.z);
  });
  return components;
}
