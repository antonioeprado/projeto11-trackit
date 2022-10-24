import { createContext } from "react";

export const HabitsContext = createContext({
	id: null,
	name: "",
	days: [],
});
