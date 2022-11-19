import React, { useContext, useReducer } from "react";
import reducer, {
	CLOSE_MODAL,
	FIND_ITEM,
	OPEN_MODAL,
	TOGGLE_FULLSCREEN,
	UPDATE_MODAL,
	UPDATE_PARENT,
	APPEND_CHILD,
	CURRENTY_OPEN_FILE,
	UPDATE_TOBEDELETED,
	UPDATE_CURRENT_FILE,
	ADD_NEW_TAG,
	UPDATE_TAG_VALUE,
	CLEAR_TAG_INPUT,
	TOGGLE_TAG,
} from "../Reducers/EditorReducer";
import { UPDATE_CODE } from "../Reducers/EditorReducer";
import { v4 as uuidv4 } from "uuid";
import {
	addToParent,
	renameItem,
	deleteItem,
	selectFile,
	unselectAll,
	// findItem,
} from "../helpers";
import { toast } from "react-toastify";

const EditorContext = React.createContext();

const initialStates = {
	code: "",
	isModalOpen: false,
	files: {
		id: 1,
		name: "Folders",
		isFolder: true,
		isOpen: false,
		items: [],
	},
	toBeDeleted: null,
	fullscreen: "",
	modalMode: "",
	newFolderName: "",
	parent: null,
	modalValue: "",
	currentlyOpenFile: 3,
	documents: [{ id: 3, content: "### Title" }],
	tags: [
		{ selected: false, name: "Blue", color: "#2676ff" },
		{ selected: false, name: "Green", color: "green" },
		{ selected: false, name: "Grey", color: "grey" },
		{ selected: false, name: "Important", color: "red" },
		{ selected: false, name: "Orange", color: "orange" },
		{ selected: false, name: "Purple", color: "purple" },
		{ selected: false, name: "Work", color: "yellow" },
		{ selected: false, name: "Development", color: "dodgerblue" },
	],
	tagInput: "",
};

const EditorProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialStates);

	const updateCode = (value) => {
		dispatch({ type: UPDATE_CODE, payload: value });
	};

	const openModal = (id, mode, type) => {
		if (mode === "create") {
			dispatch({ type: OPEN_MODAL, payload: type });
		}
		if (mode === "edit") {
			dispatch({ type: FIND_ITEM, payload: { id: id.id, name: id.name } });
			dispatch({ type: OPEN_MODAL, payload: type });
		}
		if (mode === "delete") {
			dispatch({ type: UPDATE_TOBEDELETED, payload: id });
			dispatch({ type: OPEN_MODAL, payload: type });
		}
	};

	const closeModal = () => {
		dispatch({ type: CLOSE_MODAL });
	};

	const createFolder = () => {
		const tempFiles = state.files;
		const newId = uuidv4();
		const newValue = state.modalValue.trim();

		if (newValue) {
			const newFolder = {
				id: newId,
				name: newValue,
				isFolder: true,
				isOpen: false,
				items: [],
			};

			tempFiles.items.unshift(newFolder);
			dispatch({ type: UPDATE_PARENT, payload: newId });
			dispatch({ type: APPEND_CHILD, payload: tempFiles });
			dispatch({ type: CLOSE_MODAL });
			toast.success(`Folder "${newValue}" was created`);
		} else {
			toast.error("Please enter a folder name");
		}
	};

	const createFile = () => {
		const tempFiles = state.files;
		const newId = uuidv4();
		const newValue = state.modalValue.trim();

		if (newValue) {
			const newFile = {
				id: newId,
				name: newValue,
				isFolder: false,
				isOpen: false,
				content: "### Title",
				isSelected: true,
				items: [],
				tags: [],
			};

			unselectAll(tempFiles.items);
			addToParent(tempFiles.items, state.parent, newFile);
			dispatch({ type: APPEND_CHILD, payload: tempFiles });
			dispatch({ type: CLOSE_MODAL });
			dispatch({ type: CURRENTY_OPEN_FILE, payload: newId });
			toast.success(`File "${newValue}" was created`);
		} else {
			toast.warn("Please enter a file name");
		}
	};

	const toggleFullscreen = (viewName) => {
		dispatch({ type: TOGGLE_FULLSCREEN, payload: viewName });
	};

	const updateModalValue = (e) => {
		dispatch({ type: UPDATE_MODAL, payload: e.target.value });
	};

	const rename = () => {
		const tempFiles = state.files;
		const newValue = state.modalValue.trim();
		if (newValue) {
			renameItem(tempFiles.items, state.parent, state.modalValue);
			dispatch({ type: APPEND_CHILD, payload: tempFiles });
			dispatch({ type: CLOSE_MODAL });
			toast.success(`Name changed to "${newValue}"`);
		} else {
			toast.warn("Please enter a name");
		}
	};

	const handleDelete = () => {
		const tempFiles = state.files;
		deleteItem(tempFiles.items, state.toBeDeleted);
		dispatch({ type: APPEND_CHILD, payload: tempFiles });
		dispatch({ type: CLOSE_MODAL });
		toast.success(`Item deleted`);
	};

	const handleSelectFile = (id) => {
		const tempFiles = state.files;
		unselectAll(tempFiles.items);
		selectFile(tempFiles.items, id);
		dispatch({ type: UPDATE_CURRENT_FILE, id });
		dispatch({ type: APPEND_CHILD, payload: tempFiles });
	};

	const assignCode = () => {
		// const tempFiles = state.files;
		// const item = findItem(tempFiles.items, state.currentlyOpenFile);
		// console.log(item);
		// dispatch({ type: ASSIGN_CODE, payload: item });
	};

	const selectParent = (id) => {
		dispatch({ type: UPDATE_PARENT, payload: id });
	};

	const updateTagInput = (e) => {
		const value = e.target.value;
		dispatch({ type: UPDATE_TAG_VALUE, payload: value });
	};

	const addNewTag = (color) => {
		const value = state.tagInput;

		if (value === "") {
			toast.error(`Please add a tag name`);
		} else {
			const item = state.tags.find((item) => item.name === value);
			if (item) {
				toast.warn(`A tag exists with the name "${value}"`);
			} else {
				const tag = { name: value, color };
				dispatch({ type: ADD_NEW_TAG, payload: tag });
				clearTagInput();
			}
		}
	};

	const clearTagInput = () => {
		dispatch({ type: CLEAR_TAG_INPUT });
	};

	const toggleTags = (tagName) => {
		dispatch({ type: TOGGLE_TAG, payload: tagName });
	};

	return (
		<EditorContext.Provider
			value={{
				...state,
				updateCode,
				openModal,
				closeModal,
				createFolder,
				createFile,
				toggleFullscreen,
				updateModalValue,
				rename,
				handleDelete,
				handleSelectFile,
				assignCode,
				addNewTag,
				updateTagInput,
				clearTagInput,
				toggleTags,
				selectParent,
			}}
		>
			{children}
		</EditorContext.Provider>
	);
};

const useEditorContext = () => {
	return useContext(EditorContext);
};

export { EditorProvider, useEditorContext };
