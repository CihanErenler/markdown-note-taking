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

const editorReducer = (state, action) => {
	if (action.type === UPDATE_CODE) {
		const newState = { ...state, code: action.payload };
		return newState;
	}

	if (action.type === OPEN_MODAL) {
		const newState = {
			...state,
			isModalOpen: true,
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
		const newState = { ...state, files: action.payload };
		return newState;
	}

	if (action.type === UPDATE_MODAL) {
		const newState = { ...state, modalValue: action.payload };
		return newState;
	}

	if (action.type === FIND_ITEM) {
		const { id, name } = action.payload;
		const newState = { ...state, modalValue: name, parent: id };
		return newState;
	}

	if (action.type === UPDATE_TOBEDELETED) {
		const id = action.payload;
		const newState = { ...state, toBeDeleted: id };
		return newState;
	}

	if (action.type === ASSIGN_CODE) {
		const newState = { ...state, code: action.payload.content };
		return newState;
	}

	if (action.type === UPDATE_CURRENT_FILE) {
		const newState = { ...state, currentlyOpenFile: action.payload };
		return newState;
	}

	if (action.type === UPDATE_TAG_VALUE) {
		const newState = { ...state, tagInput: action.payload };
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

	if (action.type === TOGGLE_TAG) {
		const temp = [...state.tags];
		const newTags = temp.map((tag) => {
			if (tag.name === action.payload) {
				const newTag = { ...tag, selected: !tag.selected };
				return newTag;
			}
			return tag;
		});
		console.log(newTags);
		const newState = { ...state, tags: newTags };
		return newState;
	}

	return state;
};

export default editorReducer;
