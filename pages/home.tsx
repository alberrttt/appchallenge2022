import {
	NavigationProp,
	PrivateValueStore,
	useNavigation,
} from "@react-navigation/native";
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, {
	FC,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import {
	Animated,
	Easing,
	StyleSheet,
	useWindowDimensions,
	View,
	Image,
	Text,
	Pressable,
} from "react-native";
import { Button } from "react-native";
import {
	SafeAreaView,
	useSafeAreaInsets,
} from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyledText } from "../components/text";
import { StyledView } from "../components/view";
import colors from "../src/colors";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackParams } from "../src/types";
import { random_images } from "../src/images";
import { LinearGradient } from "expo-linear-gradient";
import { AppContext, List } from "../src/client";
export const HomeScreen = ({
	navigation,
}: NativeStackScreenProps<NativeStackParams, "Home">) => {
	const insets = useSafeAreaInsets();
	const navigator = useNavigation();
	const context = useContext(AppContext);
	return (
		<StyledView
			style={{
				...styles.home,
				paddingTop: insets.top + 96,
				paddingHorizontal: 32,
			}}
		>
			<StyledText style={styles.title_1}>Welcome, Albert</StyledText>
			<StyledText
				style={{
					alignSelf: "flex-start",
					paddingTop: 8,
				}}
			>
				You are participating in:
			</StyledText>

			<View
				style={{
					paddingVertical: 12,
					flexDirection: "column",
					alignSelf: "flex-start",
					width: "100%",
				}}
			>
				<ScrollView
					style={{
						maxHeight: 256,
						borderRadius: 8,
					}}
				>
					{context.client.fetch_lists().map((list, key) => {
						console.log(list, key);
						return (
							<ListButton
								navigation={navigation}
								index={key}
								list={list}
								key={key}
							/>
						);
					})}
				</ScrollView>
			</View>
			<StyledText
				style={{
					fontSize: 36,
					alignSelf: "flex-start",
				}}
			>
				Invitations
			</StyledText>
			<View
				style={{
					alignSelf: "flex-start",
					width: "100%",
					flex: 1,
					flexDirection: "column",
				}}
			>
				<InvitationButton navigation={navigation} index={0} />
			</View>
		</StyledView>
	);
};
export const InvitationButton: FC<{
	navigation: NativeStackNavigationProp<NativeStackParams, "Home", undefined>;
	index: number;
	owner_name?: string;
	title?: string;
}> = ({
	navigation,
	index,
	owner_name = "Albert",
	title = "Taking care of my brother",
}) => {
	const intoAnim = useRef(new Animated.Value(15 + 25 * index)).current;
	const navi = useNavigation();
	useEffect(() => {
		navigation.addListener("focus", () => {
			intoAnim.setValue(15 + 25 * index);
			Animated.timing(intoAnim, {
				toValue: 0,
				duration: 500,
				useNativeDriver: false,
				easing: Easing.bounce,
			}).start();
		});
	}, []);
	const [options, setOptions] = useState(false);
	return (
		<Animated.View
			style={{
				top: intoAnim,
				opacity: intoAnim.interpolate({
					inputRange: [0, 150],
					outputRange: [1, 0],
				}),
			}}
		>
			<View
				style={{
					marginTop: 8,
					borderRadius: 4,
					backgroundColor: colors.Jet,
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 12,
					width: "100%",
				}}
			>
				<View
					style={{
						flexDirection: "column",
					}}
				>
					<StyledText
						style={{
							fontSize: 16,
							fontWeight: "bold",
						}}
					>
						{title}
					</StyledText>

					<StyledText
						style={{
							color: `${colors["Sonic Silver"]}`,
						}}
					>
						Created by {owner_name}
					</StyledText>
				</View>

				<View
					style={{
						flexDirection: "column",
						alignItems: "flex-end",
					}}
				>
					<Pressable
						onPress={() => {
							setOptions(!options);
						}}
					>
						<AntDesign name="ellipsis1" color={"white"} size={16} />
					</Pressable>
					{options ? <Option option={options} /> : undefined}
				</View>
			</View>
		</Animated.View>
	);
};
export const Option = ({ option }: { option: boolean }) => {
	const animated = useRef(new Animated.Value(50)).current;
	useEffect(() => {
		animated.setValue(0);
		Animated.timing(animated, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
	}, [option]);
	return (
		<Animated.View
			style={{
				flexDirection: "row",
			}}
		>
			<View>
				<AntDesign name="close" size={18} color={"white"} />

				<AntDesign name="check" size={18} color={"white"} />
			</View>
		</Animated.View>
	);
};
export const ListButton: FC<{
	navigation: NativeStackNavigationProp<NativeStackParams, "Home", undefined>;
	index: number;
	list: List;
}> = ({ navigation, index, list }) => {
	const intoAnim = useRef(new Animated.Value(15 + 25 * index)).current;
	const navi = useNavigation();
	const image = useMemo(() => random_images(), []);
	const { name, owner_name } = list;
	useEffect(() => {
		navigation.addListener("focus", () => {
			intoAnim.setValue(15 + 25 * index);
			Animated.timing(intoAnim, {
				toValue: 0,
				duration: 500,
				useNativeDriver: false,
				easing: Easing.bounce,
			}).start();
		});
	}, []);
	return (
		<Animated.View
			style={{
				marginTop: 16 * (index / index || index),
				top: intoAnim,
				opacity: intoAnim.interpolate({
					inputRange: [0, 150],
					outputRange: [1, 0],
				}),
				flexDirection: "column",
			}}
		>
			<LinearGradient
				style={{
					borderRadius: 12,
					backgroundColor: colors.Jet,
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 12,
					borderBottomStartRadius: 0,
					borderBottomEndRadius: 0,
				}}
				colors={["#90B573", "#73B573"]}
				start={{
					x: 0.4,
					y: 0.2,
				}}
			>
				<View
					style={{
						flexDirection: "column",
					}}
				>
					<StyledText
						style={{
							fontSize: 28,
							marginTop: -2,
							fontWeight: "bold",
							alignItems: "flex-end",
						}}
					>
						{name}
					</StyledText>

					<StyledText style={{}}>Created by {owner_name}</StyledText>
				</View>

				<View
					style={{
						flexDirection: "row",
						alignSelf: "flex-start",
					}}
				>
					<TouchableOpacity
						onPress={() => {
							navigation.push("List", {
								list_id: list.id,
							});
						}}
					>
						<Ionicons name="open" color={"white"} size={16} />
					</TouchableOpacity>
				</View>
			</LinearGradient>

			<View
				style={{
					flexGrow: 1,
				}}
			>
				<Image
					source={image}
					style={{
						height: 120,

						width: "100%",
						borderBottomLeftRadius: 12,
						borderBottomRightRadius: 12,
					}}
				/>
			</View>
		</Animated.View>
	);
};
const styles = StyleSheet.create({
	title_1: {
		fontSize: 36,
		alignSelf: "flex-start",
	},
	home: {
		flexDirection: "column",
		alignItems: "center",
		flex: 1,
	},
});
