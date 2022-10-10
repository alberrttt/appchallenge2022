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
import React, { useMemo } from "react";
import { AppContext, Client } from "./src/client";
import { CreateList } from "./pages/create_list";

export const Stack = createStackNavigator<NativeStackParams>();

export default function App() {
	const client = useMemo(() => {
		const client = new Client();
		return client;
	}, []);
	return (
		<AppContext.Provider
			value={{
				client,
			}}
		>
			<SafeAreaProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen name="Home" component={HomeScreen} />

						<Stack.Screen name={"List"} component={List} />
						<Stack.Screen
							name={"CreateList"}
							component={CreateList}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</AppContext.Provider>
	);
}
