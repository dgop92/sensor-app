import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Dialog, Portal, RadioButton, Text } from "react-native-paper";

const intervalOptions = [
  {
    name: "1000 ms",
    interval: 1000,
  },
  {
    name: "500 ms",
    interval: 500,
  },
  {
    name: "100 ms",
    interval: 100,
  },
];

export default function SensorIntervalDialog({
  dialogVisible,
  setDialogVisible,
  changeTimeInterval,
  timeInterval,
}) {
  const hideDialog = () => setDialogVisible(false);
  const onIntervalChange = (newValue) => {
    changeTimeInterval(newValue);
  };

  return (
    <Portal>
      <Dialog visible={dialogVisible} onDismiss={hideDialog}>
        <Dialog.Title>Intervalo de tiempo</Dialog.Title>
        <Dialog.Content>
          <RadioButton.Group
            onValueChange={onIntervalChange}
            value={timeInterval}
          >
            {intervalOptions.map((intervalOption, index) => (
              <View style={styles.radioContainer} key={index}>
                <RadioButton value={intervalOption.interval} />
                <Text>{intervalOption.name}</Text>
              </View>
            ))}
          </RadioButton.Group>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Aceptar</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
