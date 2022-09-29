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
import { NativeStackParams, Stack } from "../App";
import { StyledText } from "../components/text";
import { StyledView } from "../components/view";
import colors from "../src/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
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
					<ListButton navigation={navigation} />
					<ListButton navigation={navigation} />
					<ListButton navigation={navigation} />
				</View>
			</View>
		</StyledView>
	);
};
export const ListButton: FC<{
	navigation: NativeStackNavigationProp<NativeStackParams, "Home", undefined>;
}> = ({ navigation }) => {
	const intoAnim = useRef(new Animated.Value(200)).current;
	const navi = useNavigation();
	useEffect(() => {
		navigation.addListener("focus", () => {
			console.log("AHA");
			intoAnim.setValue(200);
			Animated.timing(intoAnim, {
				toValue: 0,
				duration: 1000,
				useNativeDriver: false,
				easing: Easing.cubic(),
			}).start();
		});
	}, []);
	return (
		<Animated.View
			style={{
				marginTop: intoAnim,
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
					<StyledText>Taking care of my brother</StyledText>

					<StyledText
						style={{
							color: `${colors["Sonic Silver"]}`,
						}}
					>
						Created by Albert
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
							navigation.push("List");
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
