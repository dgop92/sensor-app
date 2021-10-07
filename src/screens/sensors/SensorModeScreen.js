import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Paragraph, Surface, Title } from "react-native-paper";
import { sensorsClasess } from "./sensorData";
import SensorNotAvailable from "./SensorNotAvailable";

const sensorCardData = [
  {
    title: "Magnitudes",
    imageSource: require("../../../assets/sensor-mode-screen/number-blocks.png"),
    description: "Presentación de las componentes y magnitud total del sensor.",
    pageNameKey: "magnitudePageName",
  },
  {
    title: "Gráfica",
    imageSource: require("../../../assets/sensor-mode-screen/scatter.png"),
    description:
      "Representación gráfica de los valores obtenidos del sensor respecto a un intervalo de tiempo.",
    pageNameKey: "plotPageName",
  },
  {
    title: "Grabar datos",
    imageSource: require("../../../assets/sensor-mode-screen/floppy-disk.png"),
    description:
      "Almacenamiento de los datos recolectados de los sensores en formato csv.",
    pageNameKey: "recordPageName",
  },
];

export default function SensorModeScreen({ route, navigation }) {
  const [avaliable, setAvaliable] = useState(false);
  const [loading, setLoading] = useState(true);

  const params = route.params;
  const sensorClass = sensorsClasess[params.sensorKey];

  const isSensorAvaliable = useCallback(async () => {
    try {
      const isAvailable = await sensorClass.isAvailableAsync();
      setAvaliable(isAvailable);
    } catch (error) {
      setAvaliable(false);
    }
    setLoading(false);
  }, [setAvaliable, sensorClass]);

  useEffect(() => {
    isSensorAvaliable();
  }, [isSensorAvaliable]);

  if (loading) {
    return <SensorNotAvailable sensorName={params.name} loading={true} />;
  } else if (avaliable) {
    return <ModeList params={params} navigation={navigation} />;
  } else {
    return <SensorNotAvailable sensorName={params.name} />;
  }
}

function ModeList({ navigation, params }) {
  return (
    <View style={styles.sensorModePage}>
      <ScrollView>
        {sensorCardData.map((sensorCardItem, index) => (
          <SensorCard
            key={index}
            title={sensorCardItem.title}
            imageSource={sensorCardItem.imageSource}
            description={sensorCardItem.description}
            navigateTo={() =>
              navigation.navigate(params[sensorCardItem.pageNameKey])
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}

function SensorCard({ title, imageSource, description, navigateTo }) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={navigateTo}>
      <Surface style={styles.cardContainer}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
        </View>
      </Surface>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sensorModePage: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
    margin: 8,
    padding: 8,
    borderRadius: 8,
  },
  image: {
    width: 78,
    height: 78,
    marginRight: 14,
    marginLeft: 8,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    padding: 4,
  },
});
