// Reducer types
export const UPDATE_CODE = "UPDATE_CODE";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TOGGLE_FOLDER_TREE = "TOGGLE_FOLDER_TREE";
export const TOGGLE_FULLSCREEN = "TOGGLE_FULLSCREEN";
export const UPDATE_NEW_FOLDER_PARENT = "UPDATE_NEW_FOLDER_PARENT";

const editorReducer = (state, action) => {
	if (action.type === UPDATE_CODE) {
		const tempState = { ...state, code: action.payload };
		return tempState;
	}

	if (action.type === OPEN_MODAL) {
		const tempState = { ...state, isModalOpen: true };
		return tempState;
	}

	if (action.type === CLOSE_MODAL) {
		const tempState = { ...state, isModalOpen: false };
		return tempState;
	}

	if (action.type === TOGGLE_FOLDER_TREE) {
		const files = action.payload;
		const tempState = { ...state, files };

		return tempState;
	}

	if (action.type === TOGGLE_FULLSCREEN) {
		const tempVal = state.fullscreen === action.payload ? "" : action.payload;
		console.log(tempVal);
		const tempState = { ...state, fullscreen: tempVal };
		return tempState;
	}

	return state;
};

export default editorReducer;
