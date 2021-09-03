import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export default function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
