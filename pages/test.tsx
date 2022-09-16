import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

export function TestScreen() {
  const scheme = useColorScheme();
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}
