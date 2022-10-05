import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyledView } from "../components/view";
import { StyledText } from "../components/text";
import {
	Button,
	TouchableOpacity,
	View,
	ImageBackground,
	ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackParams } from "../src/types";
import colors from "../src/colors";
import { FC, useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";
import { random_images } from "../src/images";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
export function List({
	navigation,
	route,
}: NativeStackScreenProps<NativeStackParams, "List">) {
	const insets = useSafeAreaInsets();
	const { owner_name, title } = route.params;
	const a = useMemo(() => random_images(), []);
	return (
		<StyledView
			style={{
				flex: 1,
				paddingTop: insets.top + 12,
				paddingHorizontal: 12,
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
				{title}
			</StyledText>
			<StyledText>2 Participants</StyledText>

			<View
				style={{
					maxHeight: 156,
					flex: 1,
				}}
			>
				<ScrollView
					style={{
						marginTop: 8,
						flexDirection: "column",
						flexGrow: 1,
						flex: 1,
					}}
					snapToInterval={37}
					persistentScrollbar={true}
					showsVerticalScrollIndicator={true}
				>
					<Participant />
					<Participant
						date="1 Week: Sept 7 - Aug 14"
						name="Vincent"
					/>
				</ScrollView>
			</View>
			<View
				style={{
					alignContent: "flex-start",
				}}
			>
				<View
					style={{
						marginTop: 4,
					}}
				>
					<View
						style={{
							justifyContent: "space-between",
							flexDirection: "row",
							backgroundColor: colors.Jet,
							padding: 8,
							borderRadius: 8,
							alignSelf: "flex-start",
						}}
					>
						<StyledText
							style={{
								fontSize: 16,
							}}
						>
							Assign self
						</StyledText>
					</View>
				</View>
			</View>
		</StyledView>
	);
}
const Participant: FC<{
	date?: string;
	name?: string;
}> = ({ date = "1 Week: Sept 30 - Aug 7", name = "Albert" }) => (
	<View
		style={{
			marginTop: 6,
			width: "100%",
		}}
	>
		<View
			style={{
				justifyContent: "space-between",
				flexDirection: "row",
				borderRadius: 8,
				padding: 8,
				alignItems: "center",
				backgroundColor: colors["Eerie Black"],
			}}
		>
			<StyledText
				style={{
					marginLeft: 4,
					fontSize: 18,
				}}
			>
				{name}
			</StyledText>
			<StyledText
				style={{
					color: colors["Davys Grey"],
				}}
			>
				{date}
			</StyledText>
		</View>
	</View>
);
