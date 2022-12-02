import React, { useReducer, useContext } from "react";
import reducer from "../Reducers/AuthReducer";
import { toast } from "react-toastify";
import { db } from "../db/db";
import { CREATE_USER } from "../Reducers/AuthReducer";

const AuthContext = React.createContext();

const inititalState = {
	name: "",
	lastname: "",
	email: "",
	token: "",
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, inititalState);

	const createUser = async (user) => {
		console.log(user);
		try {
			const response = await db.post("/user/register", user);
			if (response.status === 200) {
				toast.success("New user created. Time to login!");
			}
			return response;
		} catch (error) {
			toast.error(error);
		}
	};

	return (
		<AuthContext.Provider value={{ ...state, createUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
