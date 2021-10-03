import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./home/HomeScreen";
import SensorModeScreen from "./sensors/SensorModeScreen";
import { useTheme } from "react-native-paper";
import acceScreens from "./sensors/accelerometer";
import magneScreens from "./sensors/magnetometer";
import gyroScreens from "./sensors/gyroscope";

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

        {acceScreens.map((screenData, index) => (
          <Stack.Screen
            key={index}
            name={screenData.name}
            component={screenData.component}
            options={{ title: "Acelerómetro" }}
          />
        ))}
        {magneScreens.map((screenData, index) => (
          <Stack.Screen
            key={index}
            name={screenData.name}
            component={screenData.component}
            options={{ title: "Magnetómetro" }}
          />
        ))}
        {gyroScreens.map((screenData, index) => (
          <Stack.Screen
            key={index}
            name={screenData.name}
            component={screenData.component}
            options={{ title: "Giroscopio" }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
