import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyledView } from "../components/view";
import { StyledText } from "../components/text";
import { TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackParams } from "../src/types";
import colors from "../src/colors";
import { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
export function List({
	navigation,
	route,
}: NativeStackScreenProps<NativeStackParams, "List">) {
	const insets = useSafeAreaInsets();
	const { owner_name, title } = route.params;
	return (
		<StyledView
			style={{
				paddingTop: insets.top + 12,
				paddingHorizontal: 12,
			}}
		>
			<TouchableOpacity
				onPress={() => {
					navigation.goBack();
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
			<StyledView
				style={{
					marginTop: 8,
					flex: 1,
					padding: 2,
					flexDirection: "column",
				}}
			>
				<Participant />
				<Participant date="1 Week: Sept 7 - Aug 14" name="Vincent" />
			</StyledView>
		</StyledView>
	);
}
const Participant: FC<{
	date?: string;
	name?: string;
}> = ({ date = "1 Week: Sept 30 - Aug 7", name = "Albert" }) => (
	<View
		style={{
			marginTop: 4,
			width: "100%",
		}}
	>
		<View
			style={{
				justifyContent: "space-between",
				flexDirection: "row",
				borderRadius: 8,
				padding: 8,
				backgroundColor: colors["Eerie Black"],
			}}
		>
			<StyledText>{name}</StyledText>
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
