import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, useColorScheme } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./pages/home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import colors from "./src/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { List } from "./pages/list";
import { NativeStackParams } from "./src/types";
import React from "react";

export const Stack = createStackNavigator<NativeStackParams>();
export const AppContext = React.createContext({});
export default function App() {
	console.log(useColorScheme());
	return (
		<AppContext.Provider value={{}}>
			<SafeAreaProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen name="Home" component={HomeScreen} />

						<Stack.Screen name={"List"} component={List} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</AppContext.Provider>
	);
}
