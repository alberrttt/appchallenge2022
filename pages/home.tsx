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
	Modal,
	Alert,
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
import colors, { colors500 } from "../src/colors";
import {
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native-gesture-handler";
import { Invite, NativeStackParams } from "../src/types";
import { random_images } from "../src/images";
import { LinearGradient } from "expo-linear-gradient";
import { useInvitesStore, useListStore } from "../src/store";
import { appearance, list } from "../src/utility";
import { EnrolledList } from "../src/types";
import { useAssignmentState } from "./list";
export const HomeScreen = ({
	navigation,
}: NativeStackScreenProps<NativeStackParams, "Home">) => {
	const insets = useSafeAreaInsets();
	const navigator = useNavigation();
	const [create_page, set_create_page] = useState(false);

	const [color, set_color] = useState("blue");
	const [hide, set_hide] = useState(false);
	const state = useListStore((state) => state);
	const modal_title = useState("title");
	const invites = useInvitesStore();
	const assignment = useAssignmentState();
	return (
		<>
			<Modal
				visible={create_page}
				animationType="slide"
				style={{}}
				transparent={true}
				onRequestClose={() => {
					set_create_page(false);
				}}
			>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						marginTop: 22,
					}}
				>
					<View
						style={{
							backgroundColor: "#1f1d1d",
							elevation: 2,
							width: "90%",
							height: "40%",
							padding: 14,

							borderRadius: 16,
						}}
					>
						<View
							style={{
								marginTop: 12,
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<StyledText
								style={{
									fontWeight: "bold",
								}}
							>
								Create a new participation page
							</StyledText>
							<Pressable
								onPress={() => {
									set_create_page(!create_page);
									set_hide(!hide);
								}}
							>
								<View
									style={{
										padding: 4,
										alignItems: "center",
									}}
								>
									<AntDesign
										size={16}
										name="close"
										color={"white"}
									/>
								</View>
							</Pressable>
						</View>
						<View
							style={{
								flexDirection: "column",
							}}
						>
							<View>
								<View
									style={{
										flexDirection: "column",
										borderBottomWidth: 1,

										borderBottomColor: "white",
									}}
								>
									<TextInput
										onChangeText={(text) =>
											modal_title[1](text)
										}
										maxLength={32}
										style={{
											paddingVertical: 1,
											color: "white",
											fontSize: 18,
										}}
										placeholder="type in here"
									/>
								</View>
								<StyledText
									style={{
										marginTop: 1,
										fontSize: 18,
										color: "#A1A1A1",
									}}
								>
									Title
								</StyledText>
							</View>
							<View>
								<View
									style={{
										flexDirection: "column",
										borderBottomWidth: 1,

										borderBottomColor: "white",
									}}
								>
									<TextInput
										maxLength={64}
										style={{
											color: "white",
											fontSize: 18,
											paddingVertical: 1,
										}}
										placeholder="type in here"
									/>
								</View>
								<StyledText
									style={{
										marginTop: 1,
										color: "#A1A1A1",
										fontSize: 18,
									}}
								>
									Description (Optional)
								</StyledText>
							</View>
						</View>
						<LinearGradient
							style={{
								flex: 1,
								margin: -14,
								marginTop: 32,
								borderBottomLeftRadius: 16,
								borderBottomRightRadius: 16,
								padding: 14,
								flexDirection: "column",
								justifyContent: "flex-end",
							}}
							colors={["#e04a68", "#192f6a"]}
							start={{
								x: 0.1,
								y: 0.2,
							}}
						>
							<View
								style={{
									justifyContent: "flex-start",
									flex: 1,
								}}
							>
								<View
									style={{
										alignSelf: "flex-start",
										padding: 8,
										borderRadius: 4,
										width: "100%",

										backgroundColor: colors.Jet,
									}}
								>
									<StyledText
										style={{
											fontSize: 16,
										}}
									>
										Appearance
									</StyledText>
									<View
										style={{
											flexDirection: "row",
											marginTop: 2,
											padding: 2,
										}}
									>
										{Object.entries(colors500).map(
											([key, value], index) => {
												return React.createElement(
													() => (
														<TouchableOpacity
															key={index}
															onPress={() => {
																set_color(key);
															}}
														>
															<View
																style={{
																	width: 32,
																	height: 32,
																	borderRadius: 64,
																	borderColor:
																		"white",
																	borderWidth:
																		color ==
																		key
																			? 2
																			: 0,
																	marginRight: 4,
																	backgroundColor:
																		value,
																}}
															/>
														</TouchableOpacity>
													)
												);
											}
										)}
									</View>
								</View>
							</View>
							<TouchableOpacity
								onPress={() => {
									if (modal_title[0].length > 0) {
										state.append_list(
											list()({
												name: modal_title[0],
												id: state.lists.length.toString(),
												owner_name: "Albert",
												appearance: appearance()({
													color: colors500[
														color as keyof typeof colors500
													],
												}),
											})
										);

										assignment.assigned.set(
											state.lists.length.toString(),
											[]
										);

										set_hide(false);
										set_create_page(false);

										modal_title[1]("title");
									}
								}}
							>
								<View
									style={{
										padding: 8,
										backgroundColor: "#1F1F1F",
										borderRadius: 8,
										alignSelf: "flex-end",
									}}
								>
									<StyledText>Create</StyledText>
								</View>
							</TouchableOpacity>
						</LinearGradient>
					</View>
				</View>
			</Modal>
			{hide ? (
				<View
					style={{
						backgroundColor: colors["Smoky Black"],
						height: "100%",
					}}
				/>
			) : (
				<StyledView
					style={{
						...styles.home,
						paddingTop: insets.top + 96,
						paddingHorizontal: 32,
						flex: 1,
					}}
				>
					<StyledText style={styles.title_1}>
						Welcome, Albert
					</StyledText>
					<View
						style={{
							paddingTop: 4,

							justifyContent: "space-between",
							alignItems: "flex-start",
							flexDirection: "row",
							width: "100%",
						}}
					>
						{state.lists.length > 0 ? (
							<StyledText style={{}}>
								You are participating in:
							</StyledText>
						) : (
							<StyledText
								style={{
									maxWidth: 256,
								}}
							>
								You aren't currently participating in anything,
								create or ask to be invited!
							</StyledText>
						)}
						<TouchableOpacity
							onPress={() => {
								set_create_page(true);
								set_hide(true);
							}}
						>
							<AntDesign
								name="pluscircle"
								color={"white"}
								size={32}
								style={{}}
							/>
						</TouchableOpacity>
					</View>

					<View
						style={{
							paddingVertical: 8,
							flexDirection: "column",
							alignSelf: "flex-start",
							width: "100%",
						}}
					>
						<ScrollView
							style={{
								maxHeight: 200,
								borderRadius: 8,
							}}
							scrollIndicatorInsets={{
								left: 4,
								right: 4,
							}}
						>
							{state.lists.map((list, key) => {
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
						{invites.invites.map((invite, index) => {
							return <InvitationButton index={index} />;
						})}
					</View>
				</StyledView>
			)}
		</>
	);
};
export const InvitationButton: FC<{
	index: number;
}> = ({ index }) => {
	const intoAnim = useRef(new Animated.Value(15 + 25 * index)).current;
	const navi = useNavigation();

	const { invites, remove_invite } = useInvitesStore();
	const list_state = useListStore();
	const { id, owner_name, title }: Invite = invites[index] ?? {
		id: "",
		owner_name: "",
		title: "",
	};
	const [options, setOptions] = useState(false);
	const assignments = useAssignmentState();
	return invites[index] ? (
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
							Alert.alert("Accept invite?", "", [
								{
									style: "default",
									text: "Accept",
									onPress: () => {
										list_state.append_list(
											list()({
												id: list_state.lists.length.toString(),
												name: title,
												owner_name,
											})
										);
										assignments.assigned.set(
											list_state.lists.length.toString(),
											[]
										);
										remove_invite(id);
									},
								},
								{
									style: "destructive",
									text: "Decline",
									onPress: () => remove_invite(id),
								},
							]);
						}}
					>
						<AntDesign name="ellipsis1" color={"white"} size={16} />
					</Pressable>
				</View>
			</View>
		</Animated.View>
	) : null;
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
	list: EnrolledList;
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
		<View
			style={{
				marginVertical: 8,
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
				colors={[list.appearance.color, list.appearance.color]}
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
							fontSize: 24,
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
								id: list.id,
								index,
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
		</View>
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
	},
});
