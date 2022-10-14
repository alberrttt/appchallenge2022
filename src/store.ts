import create from "zustand";
import { colors500 } from "./colors";
import { EnrolledList, Invite } from "./types";
import { appearance, list } from "./utility";

interface ListState {
	lists: EnrolledList[];
	append_list: (list: EnrolledList) => void;
	remove_list: (index: number) => void;
}
export const useListStore = create<ListState>((set) => {
	return {
		lists: [list()()] as EnrolledList[],
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
				id: "0",
				title: "Gardening",
				owner_name: "Vincent",
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
