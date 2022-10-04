import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyledView } from "../components/view";
import { StyledText } from "../components/text";
import { Button, TouchableOpacity, View, ImageBackground } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackParams } from "../src/types";
import colors from "../src/colors";
import { FC, useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { random_images } from "../src/images";
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
			<ImageBackground
				source={a}
				style={{
					marginVertical: 8,
					flex: 1 / 5,
					marginHorizontal: -16,
				}}
			></ImageBackground>
			<View
				style={{
					padding: 2,
					flexDirection: "column",
				}}
			>
				<Participant />
				<Participant date="1 Week: Sept 7 - Aug 14" name="Vincent" />
			</View>
			<View
				style={{
					padding: 4,
					alignContent: "flex-start",
				}}
			>
				<View>
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
