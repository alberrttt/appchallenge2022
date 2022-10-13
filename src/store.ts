import create from "zustand";
import { List, list } from "./client";
interface State {
	lists: List[];
	append_list: (list: List) => void;
	remove_list: (index: number) => void;
}
export const useListStore = create<State>((set) => {
	return {
		lists: [list()()] as List[],
		append_list: (list: List) =>
			set((state) => ({
				lists: [...state.lists, list],
			})),
		remove_list: (index: number) =>
			set((state) => ({
				lists: [...state.lists.filter((_, index) => index)],
			})),
	} as const;
});
