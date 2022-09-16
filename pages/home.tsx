import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "../components/text";
import { View } from "../components/view";
export function HomeScreen() {
  return (
    <View>
      <Text
        style={{
          paddingTop: 12,
        }}
      >
        Open up App.tsx to start working on your app!
      </Text>
    </View>
  );
}
