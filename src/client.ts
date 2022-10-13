import React from "react";
import { colors500 } from "./colors";

export class Client {
	static current_client: Client;

	constructor() {
		Client.current_client = this;
	}

	public fetch_lists() {
		return ParticipationList.fetch_all();
	}
}
export interface ListAppearance {
	color: string;
}
export interface EnrolledList {
	id: string;
	name: string;
	owner_name: string;
	appearance: ListAppearance;
}
export interface Context {
	client: Client;
}
export const AppContext = React.createContext<Context>({} as never);
export type List = EnrolledList;
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
export class ParticipationList {
	static lists = new Map<string, EnrolledList>();
	static fetch_all() {
		const enrolled_lists: EnrolledList[] = [
			list()(),
			list()({
				id: "1",
				name: "Groceries",
				owner_name: "Vincent",
				appearance: appearance()({
					color: colors500.green,
				}),
			}),
			list()({
				id: "2",
				name: "Gardening",
				owner_name: "Test",
				appearance: appearance()({
					color: colors500.yellow,
				}),
			}),
		];
		enrolled_lists.forEach((v, key) => {
			this.lists.set(v.id, v);
		});
		return enrolled_lists;
	}
}
