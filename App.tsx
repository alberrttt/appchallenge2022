import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { View } from "./components/view";
import { Text } from "./components/text";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./pages/home";
import { TestScreen } from "./pages/test";
const Tabs = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Test" component={TestScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
