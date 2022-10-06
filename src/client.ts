import React from "react";

export class Client {
	static current_client: Client;

	constructor() {
		Client.current_client = this;
	}

	public fetch_lists() {
		return ParticipationList.fetch_all();
	}
}
export interface EnrolledList {
	id: string;
	name: string;
	owner_name: string;
}
export interface Context {
	client: Client;
}
export const AppContext = React.createContext<Context>({} as never);
export type List = EnrolledList;
export class ParticipationList {
	static lists = new Map<string, List>();
	static fetch_all() {
		const enrolled_lists: EnrolledList[] = [
			{
				id: "0",
				owner_name: "Kimberly",
				name: "Aunt Vivan",
			},
			{
				id: "1",
				name: "Groceries",
				owner_name: "Albert",
			},
			{
				id: "2",
				name: "Gardening",
				owner_name: "Test",
			},
		];

		return enrolled_lists;
	}
}
