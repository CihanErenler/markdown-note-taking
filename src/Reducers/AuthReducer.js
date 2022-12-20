export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const SET_LOCALSTORAGE = "SET_LOCALSTORAGE";
export const USER_LOADING = "USER_LOADING";

const AuthReducer = (state, action) => {
	if (action.type === USER_LOGGED_IN) {
		const { name, lastname, email, token } = action.payload;
		const tempState = {
			...state,
			useLoggedIn: true,
			user: { name, lastname, email, token },
		};
		return tempState;
	}

	if (action.type === SET_LOCALSTORAGE) {
		const { name, lastname, email, token } = action.payload;
		localStorage.setItem(
			"user",
			JSON.stringify({ name, lastname, email, token })
		);
	}

	if (action.type === USER_LOADING) {
		const newState = { ...state, isUserLoading: action.payload };
		return newState;
	}

	return state;
};

export default AuthReducer;
