import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyledView } from "../components/view";
import { StyledText } from "../components/text";
export function List() {
	const insets = useSafeAreaInsets();
	return (
		<StyledView
			style={{
				paddingTop: insets.top + 24,
				paddingHorizontal: 8,
			}}
		>
			<StyledText>Lists</StyledText>
		</StyledView>
	);
}
