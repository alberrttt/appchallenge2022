import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { Button } from "react-native";
import {
	SafeAreaView,
	useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ScreenProps } from "react-native-screens";
import { NativeStackParams, Stack } from "../App";
import { StyledText } from "../components/text";
import { StyledView } from "../components/view";
import colors from "../src/colors";
export const HomeScreen = ({
	navigation,
}: NativeStackScreenProps<NativeStackParams, "Home">) => {
	const insets = useSafeAreaInsets();
	const navigator = useNavigation();
	return (
		<StyledView
			style={{
				...styles.home,
				paddingTop: insets.top + 96,
				paddingHorizontal: 32,
			}}
		>
			<StyledText style={styles.title_1}>Welcome, Albert</StyledText>
			<StyledText
				style={{
					alignSelf: "flex-start",
					paddingTop: 8,
				}}
			>
				Your lists
			</StyledText>
			<View
				style={{
					paddingTop: 12,
					flex: 1,
					flexDirection: "column",
					alignSelf: "flex-start",
					width: "100%",
				}}
			>
				<View style={{}}>
					<View
						style={{
							flex: 1,
							flexDirection: "row",

							width:
								useWindowDimensions().width < 720
									? useWindowDimensions().width < 480
										? "50%"
										: "75%"
									: "100%",
							justifyContent: "space-between",
						}}
					>
						<StyledText
							style={{
								fontSize: 24,
							}}
						>
							My funny list
						</StyledText>
						<StyledText
							style={{
								color: `${colors["Sonic Silver"]}`,
							}}
						>
							Created by Albert
						</StyledText>
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
	},
	home: {
		flexDirection: "column",
		alignItems: "center",
		flex: 1,
	},
});
