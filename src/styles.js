import { configureFonts, DefaultTheme } from "react-native-paper";

const fontStack = {
  regular: {
    fontFamily: "Lato_400Regular",
    fontWeight: "normal",
  },
  medium: {
    fontFamily: "Lato_700Bold",
    fontWeight: "normal",
  },
  light: {
    fontFamily: "Lato_300Light",
    fontWeight: "normal",
  },
  thin: {
    fontFamily: "Lato_100Thin",
    fontWeight: "normal",
  },
};

const fontConfig = {
  web: fontStack,
  ios: fontStack,
  android: fontStack,
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#283747",
    primaryLight1: "#5E82A6",
    primaryLight2: "#7F9CB8",
    primaryDark1: "#2D4052",
    primaryDark2: "#263645",
    background: "F8FAFB",
    accent: "#3B4664",
    dividerColor: "#BDBDBD",
    
    text: "#333333",
    secondaryText: "757575",
    whiteText: "#fff",
    
    notification: "2D4052",

    fonts: configureFonts(fontConfig)
  },
};

export { theme };