export const USER_LOOGED_IN = "USER_LOOGED_IN";

const AuthReducer = (state, action) => {
	if (action.type === USER_LOOGED_IN) {
		const { name, lastname, email, token } = action.payload;
		const tempState = {
			...state,
			useLoggedIn: true,
			user: { name, lastname, email },
		};
		localStorage.setItem("token", JSON.stringify(token));
		return tempState;
	}

	return state;
};

export default AuthReducer;
