import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Title } from "react-native-paper";

export default function SensorItem({ name, path }) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>{name}</Title>
      <Image style={styles.image} source={path} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,

    borderRadius: 16,
    padding: 16,

    width: 180,
    margin: 4,
  },
  title: {
    paddingBottom: 8,
  },
  image: {
    width: 64,
    height: 64,
  },
  cardContainer: {
    minWidth: 128,
    height: 128,
  },
});
