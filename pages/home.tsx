import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { FC, useEffect, useRef, useState } from "react";
import {
	Animated,
	Easing,
	StyleSheet,
	useWindowDimensions,
	View,
	Image,
	Pressable,
} from "react-native";
import { Button } from "react-native";
import {
	SafeAreaView,
	useSafeAreaInsets,
} from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Stack } from "../App";
import { StyledText } from "../components/text";
import { StyledView } from "../components/view";
import colors from "../src/colors";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackParams } from "../src/types";
import { random_images } from "../src/images";
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
				You are participating in:
			</StyledText>

			<View
				style={{
					paddingVertical: 12,
					flexDirection: "column",
					alignSelf: "flex-start",
					width: "100%",
				}}
			>
				<ListButton
					navigation={navigation}
					index={2}
					title={"Groceries"}
				/>
			</View>
			<StyledText
				style={{
					fontSize: 36,
					alignSelf: "flex-start",
				}}
			>
				Invitations
			</StyledText>
			<View
				style={{
					alignSelf: "flex-start",
					width: "100%",
					flex: 1,
					flexDirection: "column",
				}}
			>
				<InvitationButton navigation={navigation} index={0} />
			</View>
		</StyledView>
	);
};
export const InvitationButton: FC<{
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
	const [options, setOptions] = useState(false);
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
					borderRadius: 4,
					backgroundColor: colors.Jet,
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 12,
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
					}}
				>
					<Pressable
						onPress={() => {
							setOptions(!options);
						}}
					>
						<AntDesign name="ellipsis1" color={"white"} size={16} />
					</Pressable>
				</View>
			</View>
			{options ? (
				<View
					style={{
						marginTop: 4,
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<View
						style={{
							padding: 4,
							borderRadius: 4,
							width: "50%",
							marginRight: 2,
							backgroundColor: colors["Carmine Pink"],
						}}
					>
						<StyledText>Hi</StyledText>
					</View>
					<View
						style={{
							padding: 4,
							width: "50%",
							borderRadius: 4,
							backgroundColor: colors["Carmine Pink"],
						}}
					>
						<StyledText>Hi</StyledText>
					</View>
				</View>
			) : null}
		</Animated.View>
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
					borderRadius: 4,
					backgroundColor: colors.Jet,
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 12,
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
