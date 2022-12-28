// Reducer types
export const UPDATE_CODE = "UPDATE_CODE";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TOGGLE_FOLDER_TREE = "TOGGLE_FOLDER_TREE";
export const TOGGLE_FULLSCREEN = "TOGGLE_FULLSCREEN";
export const FIND_ITEM = "FIND_ITEM";
export const UPDATE_PARENT = "UPDATE_PARENT";
export const UPDATE_MODAL = "UPDATE_MODAL";
export const APPEND_CHILD = "APPEND_CHILD";
export const CURRENTY_OPEN_FILE = "CURRENTLY_OPEN_FILE";
export const UPDATE_TOBEDELETED = "UPDATE_TOBEDELETED";
export const ASSIGN_CODE = "ASSIGN_CODE";
export const UPDATE_CURRENT_FILE = "UPDATE_CURRENT_FILE";
export const ADD_NEW_TAG = "ADD_NEW_TAG";
export const UPDATE_TAG_VALUE = "UPDATE_TAG_VALUE";
export const CLEAR_TAG_INPUT = "CLEAR_TAG_INPUT";
export const TOGGLE_TAG = "TOGGLE_TAG";
export const UPDATE_TAG = "UPDATE_TAG";
export const GET_AMOUNT = "GET_AMOUNT";
export const CLOSE_SHORCUTS_MODAL = "CLOSE_SHORCUTS_MODAL";
export const OPEN_SHORCUTS_MODAL = "OPEN_SHORCUTS_MODAL";
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const TOGGLE_AVATAR_DROPDOWN = "TOGGLE_AVATAR_DROPDOWN";
export const SET_DATA = "SET_DATA";
export const CODE_LOADING = "CODE_LOADING";
export const CLEAR_STATE = "CLEAR_STATE";
export const RESET_SNAPSHOT = "RESET_SNAPSHOT";
export const SET_UPDATED = "SET_UPDATED";
export const REMOVE_TAG = "REMOVE_TAG";

const editorReducer = (state, action) => {
	if (action.type === ASSIGN_CODE) {
		const newState = {
			...state,
			code: action.payload,
			codeSnapshot: action.payload,
		};
		return newState;
	}

	if (action.type === OPEN_MODAL) {
		const newState = {
			...state,
			isModalOpen: true,
			isShortcutsOpen: false,
			modalMode: action.payload,
			modalValue: state.modalValue ? state.modalValue : "Untitled",
		};
		return newState;
	}

	if (action.type === CLOSE_MODAL) {
		const newState = {
			...state,
			isModalOpen: false,
			modalMode: "",
			modalValue: "",
		};
		return newState;
	}

	if (action.type === TOGGLE_FULLSCREEN) {
		const tempVal = state.fullscreen === action.payload ? "" : action.payload;
		const newState = { ...state, fullscreen: tempVal };
		return newState;
	}

	if (action.type === UPDATE_PARENT) {
		const newState = {
			...state,
			parent: action.payload,
			currentlySelectedTag: null,
		};
		return newState;
	}

	if (action.type === UPDATE_TAG) {
		const newState = {
			...state,
			currentlySelectedTag: action.payload,
			parent: null,
		};
		return newState;
	}

	if (action.type === APPEND_CHILD) {
		return action.payload;
	}

	if (action.type === UPDATE_MODAL) {
		const newState = { ...state, modalValue: action.payload };
		return newState;
	}

	if (action.type === FIND_ITEM) {
		const parent = state.files.items.find((item) => item.id === state.parent);
		const newState = { ...state, modalValue: parent.name };
		return newState;
	}

	if (action.type === UPDATE_TOBEDELETED) {
		const id = action.payload;
		const newState = { ...state, toBeDeleted: id };
		return newState;
	}

	if (action.type === UPDATE_CODE) {
		const newState = {
			...state,
			code: { ...state.code, code: action.payload },
		};
		return newState;
	}

	if (action.type === GET_AMOUNT) {
		const amount = state.files.items.reduce((total, current) => {
			total += current.items.length;
			return total;
		}, 0);
		const newState = { ...state, totalAmount: amount };
		return newState;
	}

	if (action.type === UPDATE_CURRENT_FILE) {
		const newState = { ...state, currentlySelectedFile: action.payload };
		return newState;
	}

	if (action.type === UPDATE_TAG_VALUE) {
		const newState = { ...state, tagInput: action.payload };
		return newState;
	}

	if (action.type === SET_UPDATED) {
		const newState = { ...state, filesUpdated: state.filesUpdated + 1 };
		return newState;
	}

	if (action.type === ADD_NEW_TAG) {
		const tagArray = [...state.tags, action.payload];
		const newState = { ...state, tags: tagArray };
		return newState;
	}

	if (action.type === CLEAR_TAG_INPUT) {
		const newState = { ...state, tagInput: "" };
		return newState;
	}

	if (action.type === CURRENTY_OPEN_FILE) {
		const newState = { ...state, currentlySelectedFile: action.payload };
		return newState;
	}

	if (action.type === CLOSE_SHORCUTS_MODAL) {
		const newState = { ...state, isShortcutsOpen: false };
		return newState;
	}

	if (action.type === OPEN_SHORCUTS_MODAL) {
		const newState = { ...state, isShortcutsOpen: true };
		return newState;
	}

	if (action.type === TOGGLE_SIDEBAR) {
		const newState = { ...state, isSidebarVisible: !state.isSidebarVisible };
		return newState;
	}

	if (action.type === CODE_LOADING) {
		const newState = { ...state, isCodeLoading: action.payload };
		return newState;
	}

	if (action.type === REMOVE_TAG) {
		const tempCode = [...state.code.tags];
		const newList = tempCode.filter((code) => code !== action.payload);
		const newState = { ...state, code: { ...state.code, tags: newList } };
		return newState;
	}

	if (action.type === RESET_SNAPSHOT) {
		console.log(state.code);
		const newState = { ...state, codeSnapshot: state.code };
		return newState;
	}

	if (action.type === TOGGLE_AVATAR_DROPDOWN) {
		const newState = {
			...state,
			showAvatarDropdown: action.payload,
		};
		return newState;
	}

	if (action.type === SET_DATA) {
		const { totalAmount, files, tags } = action.payload;
		const newState = {
			...state,
			totalAmount,
			files,
			tags,
		};
		return newState;
	}

	if (action.type === TOGGLE_TAG) {
		const code = { ...state.code };
		const id = action.payload;
		code.tags = [...code.tags, id];
		const newState = { ...state, code };

		return newState;
	}

	return state;
};

export default editorReducer;
