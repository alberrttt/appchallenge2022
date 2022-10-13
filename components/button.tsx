import React from "react";
import { View, ViewProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GenericTouchableProps } from "react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable";

export const StyledButton = (
	props: GenericTouchableProps & {
		view?: Partial<ViewProps>;
	}
) => {
	let { children, ...aaa } = props;
	let { view, ..._props } = aaa;
	return (
		<TouchableOpacity {..._props}>
			<View {...view}>{children}</View>
		</TouchableOpacity>
	);
};
