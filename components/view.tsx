import { useMemo } from "react";
import {
	StyleSheet,
	TextProps,
	useColorScheme,
	ViewProps,
	View as ReactView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles as base_styles } from "../src/styles";
export function StyledView({
	safe = false,
	...props
}: ViewProps & { safe?: boolean }) {
	let scheme = useColorScheme();
	console.log();
	scheme = scheme === "dark" ? "dark" : "light";
	const style = styles[`view_${scheme}`];
	const { children, style: style_, ...props_ } = props;
	console.log(safe);
	const View2 = safe ? SafeAreaView : ReactView;
	return (
		<View2
			{...props_}
			style={{
				...(style_ as {}),
				...style,
			}}
		>
			{children}
		</View2>
	);
}
const default_style = StyleSheet.create({
	default: {},
});
const styles = StyleSheet.create({
	view_dark: {
		...default_style.default,
		...base_styles.dark_container,
	},
	view_light: {
		...default_style.default,
		...base_styles.light_container,
	},
});
