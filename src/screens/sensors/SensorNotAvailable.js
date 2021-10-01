import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, useTheme } from "react-native-paper";

export default function SensorNotAvailable({ sensorName }) {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  return (
    <View style={styles.container}>
      <Title style={styles.text}>
        El {sensorName} no está disponible en este dispotivio
      </Title>
    </View>
  );
}

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
    },
    text: {
      textAlign: "center",
    },
  });
