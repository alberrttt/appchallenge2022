import { StyleSheet } from "react-native";
import colors from "./colors";

export const styles = StyleSheet.create({
	light_container: {
		flex: 1,
		backgroundColor: "#d0d0c0",
		alignItems: "center",
		justifyContent: "center",
	},
	dark_container: {
		flex: 1,
		backgroundColor: colors["Smoky Black"],
		alignItems: "center",
		justifyContent: "center",
	},
	light_ext: {
		color: "#242c40",
	},
	darkThemeText: {
		color: "#d0d0c0",
	},
});
