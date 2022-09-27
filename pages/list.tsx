import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyledView } from "../components/view";
import { StyledText } from "../components/text";
import { TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackParams } from "../App";
export function List({
	navigation,
}: NativeStackScreenProps<NativeStackParams, "Home">) {
	const insets = useSafeAreaInsets();
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
				<View>
					<StyledText>Back</StyledText>
				</View>
			</TouchableOpacity>
			<StyledText
				style={{
					fontSize: 36,
				}}
			>
				Your list
			</StyledText>
			<StyledView
				style={{
					flex: 1,
					flexDirection: "row",
				}}
			></StyledView>
		</StyledView>
	);
}
