import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

const appDir = FileSystem.documentDirectory + "sensorData/";
const getFileUri = (sensorName, randomKey) =>
  appDir + `senorApp_${sensorName}_${randomKey}.txt`;

function getDateName() {
  const mill = Date.now();
  const dateInfo = new Date().toLocaleDateString().split("/");
  return dateInfo.join("-") + "-" + mill;
}

function getCVSRepresentationFromRecord(records) {
  const reducer = (previusRow, record) => {
    const row = `${record.x},${record.y},${record.z};\n`;
    return previusRow + row;
  };
  return records.reduce(reducer, "");
}

async function ensureDirExists() {
  const dirInfo = await FileSystem.getInfoAsync(appDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(appDir, { intermediates: true });
  }
}

export async function askMediaPermission() {
  const perm = await MediaLibrary.requestPermissionsAsync();
  if (perm.status != "granted") {
    return false;
  }
  return true;
}

async function writeSensorFile(fileName, conent) {
  const perm = await MediaLibrary.getPermissionsAsync();
  let errorMessage = "Sin Error";
  let isSuccessful = true;
  if (perm.status === "granted") {
    await ensureDirExists();
    const fileUri = getFileUri(fileName, getDateName());
    try {
      await FileSystem.writeAsStringAsync(fileUri, conent);
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      const album = await MediaLibrary.getAlbumAsync("SensorApp");
      if (album == null) {
        await MediaLibrary.createAlbumAsync("SensorApp", asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }
    } catch (error) {
      errorMessage = "Hubo un error al intentar guardar los datos";
      isSuccessful = false;
    }
  } else {
    errorMessage = "El permiso para escribir y leer no se ha otorgado";
    isSuccessful = false;
  }
  return { isSuccessful, errorMessage };
}

export async function saveSensorData(records, sensorName) {
  const content = getCVSRepresentationFromRecord(records);
  return await writeSensorFile(sensorName, content);
}
