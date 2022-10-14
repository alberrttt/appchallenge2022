import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyledText } from "../components/text";
import { StyledView } from "../components/view";
import colors from "../src/colors";
import { NativeStackParams } from "../src/types";

export const Login = ({
	navigation,
}: NativeStackScreenProps<NativeStackParams, "Login">) => {
	const insets = useSafeAreaInsets();

	return (
		<StyledView
			style={{
				paddingTop: insets.top + 56,
				paddingHorizontal: 16 + (insets.right + insets.left) / 2,
				height: "100%",
				backgroundColor: colors["Eerie Black"],
				flexDirection: "column",
			}}
		>
            
			<View
				style={{
					padding: 4,
					backgroundColor: colors["Eerie Black"],
					borderRadius: 8,
					marginTop: 8,
				}}
			>
				<TextInput
					style={{
						paddingHorizontal: 8,
						fontSize: 26,
						backgroundColor: "transparent",
						color: colors["Sonic Silver"],
					}}
					placeholder="Username"
				/>
			</View>
			<View
				style={{
					padding: 4,
					backgroundColor: colors["Eerie Black"],
					borderRadius: 8,
					marginTop: 8,
				}}
			>
				<TextInput
					style={{
						paddingHorizontal: 8,
						fontSize: 26,
						backgroundColor: "transparent",
						color: colors["Sonic Silver"],
					}}
					placeholder="Password"
				/>
			</View>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Home");
				}}
			>
				<View
					style={{
						marginTop: 16,
						padding: 8,
						borderRadius: 8,
						backgroundColor: "#171717",
						alignSelf: "flex-end",
					}}
				>
					<StyledText
						style={{
							fontSize: 22,
						}}
					>
						Login
					</StyledText>
				</View>
			</TouchableOpacity>
		</StyledView>
	);
};
