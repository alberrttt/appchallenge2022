import { Invite } from "./types";

export const Lists = [];
export interface database_invite {
	title: string;
	owner_name: string;
}
export const Invites: (Invite & database_invite)[] = [
	{
		title: "",
		owner_name: "",
		id: "",
	},
];
