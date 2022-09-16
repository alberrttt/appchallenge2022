import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { View } from "../components/view";
import { Text } from "../components/text";
export function TestScreen() {
  const scheme = useColorScheme();
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}
