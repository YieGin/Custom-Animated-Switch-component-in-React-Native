import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const Switch = () => {
  const [isActive, setIsActive] = useState(false);
  const colors = {
    active: "#2C2C2C",
    inactive: "#DCDCDC",
  };
  return (
    <Pressable onPress={() => setIsActive(!isActive)}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <MotiView
          transition={{
            type: "timing",
            duration: 300,
            easing: Easing.inOut(Easing.ease),
          }}
          animate={{
            backgroundColor: isActive ? colors.active : colors.inactive,
          }}
          style={{
            position: "absolute",
            width: 60 * 1.5,
            height: 60 * 0.4,
            borderRadius: 60 * 0.4,
            backgroundColor: colors.active,
          }}
        />
        <MotiView
          transition={{
            type: "timing",
            duration: 300,
            easing: Easing.inOut(Easing.ease),
          }}
          animate={{
            translateX: isActive ? (60 * 1.5) / 4 : (-60 * 1.5) / 4,
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MotiView
            transition={{
              type: "timing",
              duration: 300,
              easing: Easing.inOut(Easing.ease),
            }}
            animate={{
              width: isActive ? 0 : 60 * 0.6,
              borderColor: isActive ? colors.active : colors.inactive,
            }}
            style={{
              width: 60 * 0.6,
              height: 60 * 0.6,
              borderRadius: (60 * 0.6) / 2,
              borderWidth: 60 * 0.1,
              borderColor: colors.active,
            }}
          />
        </MotiView>
      </View>
    </Pressable>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Switch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
