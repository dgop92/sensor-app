import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Surface, Button, Title, Menu, Text } from "react-native-paper";

const timeIntervalOptions = [1000, 500, 100];
const numRecordsOptions = [100, 50, 10];

const closeMenu = (setMenu) => {
  setMenu(false);
};

const openMenu = (setMenu) => {
  setMenu(true);
};

export default function AcceRecord() {
  const [timeInterval, setTimeInterval] = useState(1000);
  const [numRecords, setNumRecords] = useState(10);
  const [intervalMenu, setIntervalMenu] = useState(false);
  const [numRecordsMenu, setNumRecordsMenu] = useState(false);

  const configItems = [
    {
      buttonMessage: "Número de registros",
      menuState: numRecordsMenu,
      open: () => openMenu(setNumRecordsMenu),
      close: () => closeMenu(setNumRecordsMenu),
      menuOptions: numRecordsOptions,
      updateOption: (option) => {
        setNumRecords(option);
        closeMenu(setNumRecordsMenu);
      },
      currentOption: numRecords,
    },
    {
      buttonMessage: "Intervalo de tiempo",
      menuState: intervalMenu,
      open: () => openMenu(setIntervalMenu),
      close: () => closeMenu(setIntervalMenu),
      menuOptions: timeIntervalOptions,
      updateOption: (option) => {
        setTimeInterval(option);
        closeMenu(setIntervalMenu);
      },
      currentOption: timeInterval,
    },
  ];

  return (
    <View style={styles.container}>
      <Surface style={styles.cardContainer}>
        <Title style={styles.title}>Configurar grabación</Title>

        {configItems.map((configItem, index) => (
          <View key={index} style={styles.configContainer}>
            <Menu
              visible={configItem.menuState}
              onDismiss={configItem.close}
              anchor={
                <Button uppercase={false} mode="text" onPress={configItem.open}>
                  {configItem.buttonMessage}
                </Button>
              }
            >
              {configItem.menuOptions.map((opt) => (
                <Menu.Item
                  key={opt}
                  onPress={() => configItem.updateOption(opt)}
                  title={`${opt}`}
                />
              ))}
            </Menu>
            <Text style={styles.configItemText}>
              {configItem.currentOption}
            </Text>
          </View>
        ))}

        <View style={styles.recordButtonContainer}>
          <Button mode="text">Empezar</Button>
        </View>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
  },
  cardContainer: {
    flexDirection: "column",
    elevation: 4,
    margin: 8,
    padding: 8,
    borderRadius: 8,
  },
  title: {
    textAlign: "left",
    padding: 4,
    marginBottom: 16,
    paddingLeft: 12,
  },
  configContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  configItemText: {
    padding: 4,
    marginRight: 12,
  },
  recordButtonContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: 16,
  },
});
