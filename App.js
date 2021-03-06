import {
  Lato_400Regular,
  Lato_700Bold,
  Lato_300Light,
  Lato_100Thin,
  useFonts,
} from "@expo-google-fonts/lato";

import { Provider as PaperProvider } from "react-native-paper";
import AppLoading from "expo-app-loading";
import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { theme } from "./src/styles";
import MyStatusBar from "./src/components/base/MyStatusBar";
import NavigatorSetup from "./src/screens/NavigatorSetup";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <MyStatusBar backgroundColor="#263645" barStyle="light-content" />
          <NavigatorSetup />
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
