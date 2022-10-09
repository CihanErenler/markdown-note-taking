// Reducer types
export const UPDATE_CODE = "UPDATE_CODE";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TOGGLE_FOLDER_TREE = "TOGGLE_FOLDER_TREE";
export const TOGGLE_FULLSCREEN = "TOGGLE_FULLSCREEN";
export const FIND_ITEM = "FIND_ITEM";
export const UPDATE_PARENT = "UPDATE_PARENT";
export const UPDATE_MODAL = "UPDATE_MODAL";
export const CREATE_FOLDER = "CREATE_FOLDER";

const editorReducer = (state, action) => {
	if (action.type === UPDATE_CODE) {
		const newState = { ...state, code: action.payload };
		return newState;
	}

	if (action.type === OPEN_MODAL) {
		const newState = { ...state, isModalOpen: true, modalMode: action.payload };
		return newState;
	}

	if (action.type === CLOSE_MODAL) {
		const newState = {
			...state,
			isModalOpen: false,
			modalMode: "",
			modalValue: "",
			parent: null,
		};
		return newState;
	}

	if (action.type === TOGGLE_FOLDER_TREE) {
		const files = action.payload;
		const newState = { ...state, files };

		return newState;
	}

	if (action.type === TOGGLE_FULLSCREEN) {
		const tempVal = state.fullscreen === action.payload ? "" : action.payload;
		console.log(tempVal);
		const newState = { ...state, fullscreen: tempVal };
		return newState;
	}

	if (action.type === UPDATE_PARENT) {
		const newState = { ...state, parent: action.payload };
		return newState;
	}

	if (action.type === CREATE_FOLDER) {
		const newState = { ...state, files: action.payload };
		return newState;
	}

	if (action.type === UPDATE_MODAL) {
		const newState = { ...state, modalValue: action.payload };
		return newState;
	}

	return state;
};

export default editorReducer;
