import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native";
import {
	SafeAreaView,
	useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ScreenProps } from "react-native-screens";
import { NativeStackParams, Stack } from "../App";
import { StyledText } from "../components/text";
import { StyledView } from "../components/view";
export const HomeScreen = ({
	navigation,
}: NativeStackScreenProps<NativeStackParams, "Home">) => {
	const insets = useSafeAreaInsets();
	const navigator = useNavigation();
	return (
		<StyledView
			style={{
				...styles.home,
				paddingTop: insets.top + 24,
				paddingHorizontal: 8,
			}}
		>
			<StyledText style={styles.title_1}>Welcome, Albert</StyledText>
			<View
				style={{
					alignSelf: "flex-start",
					paddingHorizontal: 8,
					paddingTop: 8,
				}}
			>
				<StyledText>Your lists:</StyledText>

				<View
					style={{
						paddingTop: 8,
					}}
				>
					<View
						style={{
							padding: 16,
							backgroundColor: "#0B0B0B",
							borderRadius: 8,
						}}
					>
						<View
							style={{
								flexDirection: "column",
							}}
						>
							<StyledText
								style={{
									fontSize: 24,
									paddingTop: 4,
								}}
							>
								List One
							</StyledText>
							<StyledText
								style={{
									paddingVertical: 8,
								}}
							>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Eos ipsum totam voluptate
								quidem harum. Quisquam placeat facere fugit
								quae? Consequatur tempore pariatur magni animi
								deserunt. Adipisci iure deleniti at sint?
							</StyledText>
							<Button
								title="Go to list"
								onPress={() => {
									navigation.push("List");
								}}
							/>
						</View>
					</View>
				</View>
			</View>
		</StyledView>
	);
};
const styles = StyleSheet.create({
	title_1: {
		fontSize: 36,
		alignSelf: "flex-start",
		paddingHorizontal: 4,
	},
	home: {
		flexDirection: "column",
		alignItems: "center",
		flex: 1,
	},
});
