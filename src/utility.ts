import { colors500 } from "./colors";
import { ListAppearance, EnrolledList } from "./types";

export function appearance() {
	return (merge?: Partial<ListAppearance>) => {
		return Object.assign<ListAppearance, any>(
			{
				color: colors500.blue,
			},
			merge ?? {}
		);
	};
}
export function list() {
	return (merge?: Partial<EnrolledList>) => {
		return Object.assign(
			{
				id: "0",
				owner_name: "Kimberly",
				name: "Aunt Vivan",
				appearance: appearance()({}),
			},
			merge ?? {}
		);
	};
}
