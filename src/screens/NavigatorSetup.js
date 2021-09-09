import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./home/HomeScreen";
import AcceMagnitude from "./sensors/accelerometer/AcceMagnitude";
import AccePlot from "./sensors/accelerometer/AccePlot";
import SensorModeScreen from "./sensors/SensorModeScreen";
import { useTheme } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function NavigatorSetup() {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors["whiteText"],
          headerTitleStyle: {
            fontFamily: "Lato_700Bold",
          },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="SensorMode"
          component={SensorModeScreen}
          options={{ title: "Modo del sensor" }}
        />
        <Stack.Screen
          name="AcceMagnitude"
          component={AcceMagnitude}
          options={{ title: "Acelerómetro" }}
        />
        <Stack.Screen
          name="AccePlot"
          component={AccePlot}
          options={{ title: "Acelerómetro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
