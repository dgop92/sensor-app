import React from "react";
import { StyleSheet, View } from "react-native";
import { Surface, useTheme, Text } from "react-native-paper";
import { roundTo2 } from "../../../utils";

export default function MagnitudeCard({ name, value, units }) {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  return (
    <View>
      <Surface style={styles.cardContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.value}>{`${roundTo2(value)} ${units}`}</Text>
      </Surface>
    </View>
  );
}

const makeStyles = (colors) =>
  StyleSheet.create({
    cardContainer: {
      flexDirection: "row",
      elevation: 4,
      margin: 8,
      borderRadius: 8,
    },
    nameContainer: {
      backgroundColor: colors.primaryLight1,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      width: 80,
      padding: 8,
    },
    name: {
      fontSize: 36,
      backgroundColor: colors.primaryLight1,
      color: colors.whiteText,
    },
    value: {
      fontSize: 36,
      flex: 1,
      marginRight: 16,
      textAlign: "right",
      padding: 16,
    },
    contentContainer: {
      flex: 1,
      alignItems: "flex-end",
      marginRight: 32,
    },
  });
