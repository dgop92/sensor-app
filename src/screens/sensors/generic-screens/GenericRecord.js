import React, { useEffect, useState } from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import { Surface, Button, Title, Menu, Text } from "react-native-paper";
import { askMediaPermission, saveSensorData } from "../fileManagement";
import { useSensorRecord } from "../sensorUtils";

const timeIntervalOptions = [1000, 500, 100];
const numRecordsOptions = [100, 50, 10];

const closeMenu = (setMenu) => {
  setMenu(false);
};

const openMenu = (setMenu) => {
  setMenu(true);
};

export default function GenericRecord({ sensorClass, sensorKey }) {
  const [recording, setRecording] = useState(false);

  const [timeInterval, setTimeInterval] = useState(1000);
  const [numRecords, setNumRecords] = useState(10);
  const [intervalMenu, setIntervalMenu] = useState(false);
  const [numRecordsMenu, setNumRecordsMenu] = useState(false);

  const onFinish = async (records) => {
    setRecording(false);
    const isSuccessful = await saveSensorData(records, sensorKey);
    if (isSuccessful) {
      ToastAndroid.show("Datos guardados exitosamente", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(
        "Hubo un error al intentar guardar los datos ",
        ToastAndroid.SHORT
      );
    }
  };

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

  const aksPermission = async () => {
    const permissionGranted = await askMediaPermission();
    if (!permissionGranted) {
      ToastAndroid.show(
        "Recuerda que es necesario activar el permiso para poder guardar datos",
        ToastAndroid.LONG
      );
    }
  };

  useEffect(() => {
    aksPermission();
  }, []);

  return (
    <View style={styles.container}>
      {recording ? (
        <RecordCard
          sensorClass={sensorClass}
          setRecording={setRecording}
          numRecords={numRecords}
          timeInterval={timeInterval}
          onFinish={onFinish}
        />
      ) : (
        <InitCard configItems={configItems} setRecording={setRecording} />
      )}
    </View>
  );
}

function InitCard({ configItems, setRecording }) {
  return (
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
          <Text style={styles.configItemText}>{configItem.currentOption}</Text>
        </View>
      ))}

      <View style={styles.recordButtonContainer}>
        <Button onPress={() => setRecording(true)} mode="text">
          Empezar
        </Button>
      </View>
    </Surface>
  );
}

function RecordCard({
  sensorClass,
  setRecording,
  numRecords,
  timeInterval,
  onFinish,
}) {
  const { records, setRecords } = useSensorRecord({
    sensorClass: sensorClass,
    maxRecord: numRecords,
    onFinish: onFinish,
  });

  useEffect(() => {
    sensorClass.setUpdateInterval(timeInterval);
    sensorClass.addListener((sensorData) =>
      setRecords((oldRecords) => [...oldRecords, sensorData])
    );
    return () => {
      sensorClass.removeAllListeners();
    };
  }, [sensorClass, setRecords, timeInterval]);

  return (
    <Surface style={styles.cardContainer}>
      <Title style={styles.title}>Grabando</Title>
      <Text style={styles.recordsTexts}>
        Registros {records.length} / {numRecords}
      </Text>
      <View style={styles.recordButtonContainer}>
        <Button onPress={() => setRecording(false)} mode="text">
          Detener
        </Button>
      </View>
    </Surface>
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
  recordsTexts: {
    paddingLeft: 12,
  },
});
