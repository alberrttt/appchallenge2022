import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyledView } from "../components/view";
import { StyledText } from "../components/text";
import {
	Button,
	TouchableOpacity,
	View,
	ImageBackground,
	ScrollView,
	Alert,
	Modal,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EnrolledList, NativeStackParams } from "../src/types";
import colors, { colors500 } from "../src/colors";
import { FC, useMemo, useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { random_images } from "../src/images";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useListStore } from "../src/store";
import { StyledButton } from "../components/button";
import { Pressable } from "react-native";
import create from "zustand";
import { TextInput } from "react-native-gesture-handler";
type id = string;
interface AssignmentState {
	selected_assignments: Map<id, string[]>;
	add(id: id, name: string): void;
	sub(id: id, name: string): void;
	reset(): void;
	assigned: Map<id, [string, string][]>;
	add_assigned(id: id, name: string, description: string): void;
	sub_assigned(id: id, name: string): void;
}

export const useAssignmentState = create<AssignmentState>((set) => {
	return {
		selected_assignments: new Map(),
		add(id, name) {
			if (!this.selected_assignments.get(id)) {
				this.selected_assignments.set(id, []);
			}
			set((state) => {
				const a = state.selected_assignments;
				const names = a.get(id)!;
				names.push(name);
				a.set(id, names);
				return {
					selected_assignments: a,
				};
			});
		},
		sub(id, name) {
			set((state) => {
				const a = state.selected_assignments;
				const array = state.selected_assignments
					.get(id)!
					.filter((value) => value != name);
				a.set(id, array);
				return {
					selected_assignments: a,
				};
			});
		},
		assigned: new Map(),
		add_assigned(id, name, description = "") {
			set((state) => {
				return {
					assigned: state.assigned.set(id, [
						...state.assigned.get(id)!,
						[name, description],
					]),
				};
			});
		},
		sub_assigned(id, name) {
			set((state) => {
				return {
					assigned: state.assigned.set(
						id,
						state.assigned
							.get(id)!
							.filter((value) => value[0] != name)
					),
				};
			});
		},
		reset() {
			set((state) => {
				state.selected_assignments.clear();
				return {
					selected_assignments: state.selected_assignments,
				};
			});
		},
	};
});
function unique_items<T extends Array<unknown>>(array: T) {
	return new Set(array).size;
}
export function List({
	navigation,
	route,
}: NativeStackScreenProps<NativeStackParams, "List">) {
	const insets = useSafeAreaInsets();
	const state = useListStore();
	const { id, index } = route.params;
	const assignments = useAssignmentState();
	const { name, owner_name } = Object.assign(
		{
			name: "awdawd",
			owner_name: "awda",
		},
		state.lists[index] || {}
	)! as EnrolledList;
	const a = useMemo(() => random_images(), []);
	const [show_assign, set_assign] = useState(false);
	const [assigned_description, set_assigned_description] = useState("");
	return (
		<>
			<Modal
				visible={show_assign}
				transparent={true}
				animationType="fade"
			>
				<View
					style={{
						justifyContent: "center",
						flexDirection: "row",
						alignItems: "flex-start",

						marginTop: 75 + insets.top,
					}}
				>
					<View
						style={{
							backgroundColor: "#1f1d1d",
							elevation: 2,
							padding: 14,
							borderRadius: 16,
							minWidth: "80%",
						}}
					>
						{/* header */}
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<StyledText
								style={{
									fontWeight: "bold",
								}}
							>
								Assignments
							</StyledText>
							<Pressable
								onPress={() => {
									set_assign(false);
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

						{/* body */}
						<View
							style={{
								flexDirection: "column",
							}}
						>
							<StyledText>Assign to</StyledText>
							<View
								style={{
									marginTop: 4,
									flexDirection: "column",
								}}
							>
								<AssignmentSelection
									id={id}
									name="Albert (Self)"
								/>
								<AssignmentSelection id={id} name="Vincent" />
								<AssignmentSelection id={id} name="Kyle" />
								<AssignmentSelection id={id} name="Kimberly" />
							</View>
							<View
								style={{
									flexDirection: "column",
								}}
							>
								<StyledText
									style={{
										marginTop: 4,
										fontSize: 16,
										fontWeight: "500",
									}}
								>
									Add a description (optional)
								</StyledText>
								<TextInput
									onChangeText={(text) =>
										set_assigned_description(text)
									}
									placeholder="Type here"
									style={{
										color: colors["Dim Gray"],
									}}
								/>
							</View>
						</View>
						<TouchableOpacity
							style={{
								alignSelf: "flex-end",
							}}
							onPress={() => {
								assignments.selected_assignments
									.get(id)!
									.forEach((name) => {
										assignments.add_assigned(
											id,
											name,
											assigned_description
										);
									});
								assignments.reset();
								set_assign(false);
							}}
						>
							<View
								style={{
									padding: 8,
									backgroundColor: colors["UFO Green"],
									borderRadius: 8,
									alignSelf: "flex-end",
								}}
							>
								<StyledText
									style={{
										alignSelf: "flex-end",
										color: colors["Eerie Black"],
									}}
								>
									Finalize
								</StyledText>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			{!show_assign ? (
				<StyledView
					style={{
						flex: 1,
						paddingTop: insets.top + 12,
						paddingHorizontal: 12,
					}}
				>
					<>
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
								<Ionicons
									name="arrow-back"
									color={"white"}
									size={16}
								/>
								<StyledText>Back</StyledText>
							</View>
						</TouchableOpacity>
						<StyledText
							style={{
								fontSize: 36,
							}}
						>
							{name}
						</StyledText>
						<StyledText>
							{unique_items(assignments.assigned.get(id)!)} Active
							Participants
						</StyledText>
						<StyledText>4 Participants</StyledText>

						<View
							style={{
								flex: 1,
								maxHeight: 157,
							}}
						>
							<ScrollView
								style={{
									marginTop: 8,
									flexDirection: "column",
									flexGrow: 1,
									flex: 1,
								}}
								snapToInterval={37}
								persistentScrollbar={true}
								showsVerticalScrollIndicator={true}
							>
								{assignments.assigned.get(id)!.map((name) => {
									console.log(name);
									return (
										<Participant
											name={name[0]}
											date={""}
											description={name[1]}
										/>
									);
								})}
							</ScrollView>
						</View>
						<View
							style={{
								alignContent: "flex-start",
							}}
						>
							<View
								style={{
									marginTop: 4,
									flexDirection: "row",
								}}
							>
								<StyledButton
									view={{
										style: {
											marginRight: 8,
											backgroundColor:
												colors["Carmine Pink"],
											padding: 8,
											borderRadius: 8,
											alignSelf: "flex-start",
										},
									}}
									onPressOut={() => {
										Alert.alert(
											"Are you sure?",
											"Press 'Yes' to leave.",
											[
												{
													text: "No",
													style: "destructive",
												},
												{
													text: "Yes",
													onPress: () => {
														state.remove_list(
															index
														);
														navigation.goBack();
													},
												},
											]
										);
									}}
								>
									<StyledText
										style={{
											fontSize: 16,
										}}
									>
										Leave
									</StyledText>
								</StyledButton>
								<View
									style={{
										flexDirection: "column",
									}}
								>
									<StyledButton
										view={{
											style: {
												marginRight: 8,
												backgroundColor: colors.Jet,
												padding: 8,
												borderRadius: 8,
												alignSelf: "flex-start",
											},
										}}
										onPress={() => set_assign(true)}
									>
										<StyledText
											style={{
												fontSize: 16,
											}}
										>
											Assign
										</StyledText>
									</StyledButton>
								</View>
							</View>
						</View>
					</>
				</StyledView>
			) : (
				<View
					style={{
						backgroundColor: colors["Smoky Black"],
						height: "100%",
					}}
				/>
			)}
		</>
	);
}
const AssignmentSelection: FC<{ id: string; name: string }> = ({
	id,
	name,
}) => {
	const state = useAssignmentState();
	const [selected, set_selected] = useState(false);
	return (
		<TouchableOpacity
			onPress={() => {
				set_selected(!selected);
				if (selected) {
					state.sub(id, name);
				} else {
					state.add(id, name);
				}
			}}
		>
			<View
				style={{
					marginTop: 8,
					backgroundColor: colors["Dim Gray"],
					padding: 4,
					borderRadius: 8,
					alignSelf: "flex-start",
					borderWidth: selected ? 2 : 0,
					borderColor: "white",
				}}
			>
				<StyledText
					style={{
						fontSize: 16,
					}}
				>
					{name}
				</StyledText>
			</View>
		</TouchableOpacity>
	);
};
const Participant: FC<{
	date?: string;
	name?: string;
	description?: string;
}> = ({
	date = "1 Week: Sept 30 - Aug 7",
	name = "Albert",
	description = "",
}) => (
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
				alignItems: "center",
				backgroundColor: colors["Eerie Black"],
			}}
		>
			<View
				style={{
					flexDirection: "column",
				}}
			>
				<StyledText
					style={{
						marginLeft: 4,
						fontSize: 18,
					}}
				>
					{name}
				</StyledText>
				<StyledText
					style={{
						marginLeft: 4,
						color: colors["Dim Gray"],
						fontSize: 16,
					}}
				>
					{description}
				</StyledText>
			</View>
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
