import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FAB, Surface, useTheme } from "react-native-paper";

export default function SensorBottomBar({ subscriptionTools }) {
  const [iconName, setIconName] = useState("pause");
  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const switchSensor = () => {
    if (subscriptionTools.subscription) {
      subscriptionTools.unsuscribe();
      setIconName("play");
    } else {
      subscriptionTools.subscribe();
      setIconName("pause");
    }
  };

  return (
    <Surface style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => {console.log("yes")}}>
        <Text style={styles.intervalTime}>1000 ms</Text>
      </TouchableOpacity>
      <FAB style={styles.fab} icon={iconName} onPress={switchSensor} />
    </Surface>
  );
}

const makeStyles = (colors) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 0,
      height: 40,
      width: "100%",
      backgroundColor: colors.primaryDark2,
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      justifyContent: "center",
    },
    intervalTime: {
      marginLeft: 24,
      color: colors.whiteText,
    },
    fab: {
      position: "absolute",
      right: 0,
      bottom: 0,
      margin: 16,
    },
  });
