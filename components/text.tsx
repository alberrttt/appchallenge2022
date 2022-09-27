import { useMemo } from "react";
import {
	StyleSheet,
	TextProps,
	useColorScheme,
	Text as ReactText,
} from "react-native";
export function StyledText(props: TextProps) {
	let scheme = useColorScheme();
	scheme = scheme ? scheme : "dark";
	const style = styles[`text_${scheme}`];
	const { style: _style, children, ...n_props } = props;

	return (
		<ReactText
			{...n_props}
			style={{
				...style,
				...(_style as {}),
			}}
		>
			{children}
		</ReactText>
	);
}
const default_style = StyleSheet.create({
	default: {},
});
const styles = StyleSheet.create({
	text_dark: {
		...default_style.default,
		color: "#FFFF",
	},
	text_light: {
		...default_style.default,
	},
});
