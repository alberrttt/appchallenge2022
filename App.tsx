import { StatusBar } from "expo-status-bar";
import { StyleSheet, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./pages/home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import colors from "./src/colors";
const Tabs = createBottomTabNavigator();
export default function App() {
	console.log(useColorScheme());
	return (
		<SafeAreaProvider>
			<HomeScreen />
			<StatusBar backgroundColor={useColorScheme()!} />
		</SafeAreaProvider>
	);
}
