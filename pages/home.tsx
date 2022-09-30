import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { FC, useEffect, useRef } from "react";
import {
	Animated,
	Easing,
	StyleSheet,
	useWindowDimensions,
	View,
} from "react-native";
import { Button } from "react-native";
import {
	SafeAreaView,
	useSafeAreaInsets,
} from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "../App";
import { StyledText } from "../components/text";
import { StyledView } from "../components/view";
import colors from "../src/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackParams } from "../src/types";
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
				<View
					style={{
						flex: 1,
						flexDirection: "column",
					}}
				>
					<ListButton
						navigation={navigation}
						title={"Walking the dog"}
						index={1}
					/>
					<ListButton
						navigation={navigation}
						title={"Watering the plants"}
						index={2}
					/>
				</View>
			</View>
		</StyledView>
	);
};
export const ListButton: FC<{
	navigation: NativeStackNavigationProp<NativeStackParams, "Home", undefined>;
	index: number;
	owner_name?: string;
	title?: string;
}> = ({
	navigation,
	index,
	owner_name = "Albert",
	title = "Taking care of my brother",
}) => {
	const intoAnim = useRef(new Animated.Value(15 + 25 * index)).current;
	const navi = useNavigation();

	useEffect(() => {
		navigation.addListener("focus", () => {
			intoAnim.setValue(15 + 25 * index);
			Animated.timing(intoAnim, {
				toValue: 0,
				duration: 500,
				useNativeDriver: false,
				easing: Easing.bounce,
			}).start();
		});
	}, []);
	return (
		<Animated.View
			style={{
				top: intoAnim,
				opacity: intoAnim.interpolate({
					inputRange: [0, 150],
					outputRange: [1, 0],
				}),
			}}
		>
			<View
				style={{
					marginTop: 8,
					padding: 12,
					borderRadius: 4,
					backgroundColor: colors.Jet,
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<View
					style={{
						flexDirection: "column",
					}}
				>
					<StyledText
						style={{
							fontSize: 16,
							fontWeight: "bold",
						}}
					>
						{title}
					</StyledText>

					<StyledText
						style={{
							color: `${colors["Sonic Silver"]}`,
						}}
					>
						Created by {owner_name}
					</StyledText>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignSelf: "flex-start",
					}}
				>
					<TouchableOpacity
						onPress={() => {
							navigation.push("List", {
								owner_name: owner_name,
								title,
							});
						}}
					>
						<Ionicons name="open" color={"white"} size={16} />
					</TouchableOpacity>
				</View>
			</View>
		</Animated.View>
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
