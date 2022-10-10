import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyledText } from "../components/text";
import { StyledView } from "../components/view";
import colors from "../src/colors";
import { NativeStackParams } from "../src/types";

export function CreateList({
	navigation,
}: NativeStackScreenProps<NativeStackParams, "CreateList">) {
	const insets = useSafeAreaInsets();
	const [textInput, updateTI] = useState("");
	const TitleRef = useRef(undefined as never as TextInput);
	return (
		<StyledView
			style={{
				paddingTop: insets.top + 12,
				paddingHorizontal: 12,
				flex: 1,
			}}
		>
			<TouchableOpacity
				onPress={() => {
					navigation.pop();
				}}
			>
				<View
					style={{
						flexDirection: "row",
					}}
				>
					<Ionicons name="arrow-back" color={"white"} size={16} />
					<StyledText>Back</StyledText>
				</View>
			</TouchableOpacity>
			<StyledText
				style={{
					fontSize: 36,
				}}
			>
				Creating the participation page
			</StyledText>
			<View
				style={{
					borderRadius: 12,
					marginTop: 4,
					backgroundColor: colors["Eerie Black"],
				}}
			>
				<TextInput
					style={{
						marginHorizontal: 8,
						height: 35,
						fontSize: 20,
						color: "white",
					}}
					ref={TitleRef}
					placeholder={"Type in the title here"}
				></TextInput>
			</View>
			<View
				style={{
					borderRadius: 12,
					marginTop: 6,
					backgroundColor: colors["Eerie Black"],
				}}
			>
				<TextInput
					style={{
						marginHorizontal: 8,
						height: 35,
						fontSize: 20,
						color: "white",
					}}
					ref={TitleRef}
					placeholder={"Add a description"}
				></TextInput>
			</View>

			<Pressable
				style={{
					marginTop: 8,
				}}
			>
				<View>
					<View
						style={{
							backgroundColor: colors["Dim Gray"],
							width: "100%",
						}}
					>
						<StyledView>
							<StyledText style={{}}>Hi</StyledText>
						</StyledView>
					</View>
				</View>
			</Pressable>
		</StyledView>
	);
}
