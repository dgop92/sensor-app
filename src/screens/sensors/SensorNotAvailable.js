import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, useTheme } from "react-native-paper";

export default function SensorNotAvailable({ sensorName, loading = false }) {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  return (
    <View style={styles.container}>
      <Title style={styles.text}>
        {loading
          ? "Buscando disponibilidad del sensor "
          : `El ${sensorName} no está disponible en este dispotivio`}
      </Title>
    </View>
  );
}

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
    },
    text: {
      textAlign: "center",
    },
  });
