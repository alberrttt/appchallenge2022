export type NativeStackParams = {
	List: {
		index: number;
	};
	Home: undefined;
};
export interface ListAppearance {
	color: string;
}
export interface EnrolledList {
	id: string;
	name: string;
	owner_name: string;
	appearance: ListAppearance;
}
export interface Invite {
	id: string;
	owner_name: string;
	title: string;
}
