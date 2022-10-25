import create from "zustand";
import colors, { colors500 } from "./colors";
import { EnrolledList, Invite } from "./types";
import { appearance, list } from "./utility";

interface ListState {
	lists: EnrolledList[];
	append_list: (list: EnrolledList) => void;
	remove_list: (index: number) => void;
}
export const useListStore = create<ListState>((set) => {
	return {
		lists: [] as EnrolledList[],
		append_list: (list: EnrolledList) =>
			set((state) => ({
				lists: [...state.lists, list],
			})),
		remove_list: (rm_index: number) =>
			set((state) => ({
				lists: state.lists.filter((_, index) => {
					console.log(index, rm_index);
					return index != rm_index;
				}),
			})),
	} as const;
});
interface InviteState {
	invites: Invite[];
	new_invite(invite_id: string, owner_name: string, title: string): void;
	remove_invite(invite_id: string): void;
}
export const useInvitesStore = create<InviteState>((set) => {
	return {
		invites: [
			{
				id: "1",
				owner_name: "Kimberly",
				title: "Take care of Aunty Vivian",
				list: list()({
					owner_name: "Kimberly",
					name: "Take care of Aunty Vivian",
					participants: ["Kimberly", "Kyle", "Vincent"],
				}),
			},
		],
		new_invite(invite_id: string, owner_name: string, title: string) {
			set((state) => ({
				invites: [
					...state.invites,
					{
						id: state.invites.length.toString(),
						owner_name,
						title,
						list: list()({
							owner_name,
							name: title,
							id: state.invites.length.toString(),
						}),
					},
				],
			}));
		},
		remove_invite(invite_id) {
			set((state) => {
				console.log("REMOVING");
				return {
					invites: state.invites.filter((v) => {
						console.log("id is " + v.id);
					}),
				};
			});
		},
	};
});
