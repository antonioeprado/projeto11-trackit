import { createContext } from "react";

export const LoginContext = createContext({
	id: null,
	name: "",
	image: "",
	password: "",
	token: "",
});
