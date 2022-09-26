import { StyleSheet } from "react-native";
import colors from "./colors";

export const styles = StyleSheet.create({
	light_container: {
		flex: 1,
		backgroundColor: "#FFF",
	},
	dark_container: {
		flex: 1,
		backgroundColor: colors["Smoky Black"],
	},
	light_ext: {
		color: "#242c40",
	},
	darkThemeText: {
		color: "#d0d0c0",
	},
});
