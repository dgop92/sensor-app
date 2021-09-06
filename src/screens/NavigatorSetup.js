import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./home/HomeScreen";
import AccelerometerScreen from "./accelerometer/AccelerometerScreen";
import { sensorsData } from "./home/homeData";
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
        {sensorsData.map((sensorItemData, index) => (
          <Stack.Screen
            key={index}
            name={sensorItemData.pageName}
            options={{ title: sensorItemData.name }}
            component={sensorItemData.screenComponent}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
