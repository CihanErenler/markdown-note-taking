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
	UPDATE_TAG,
	GET_AMOUNT,
	CLOSE_SHORCUTS_MODAL,
	OPEN_SHORCUTS_MODAL,
	TOGGLE_SIDEBAR,
	TOGGLE_AVATAR_DROPDOWN,
	SET_DATA,
} from "../Reducers/EditorReducer";
import { UPDATE_CODE } from "../Reducers/EditorReducer";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { db } from "../db/db";
import axios from "axios";

const EditorContext = React.createContext();

const initialStates = {
	code: "### Title",
	isModalOpen: false,
	isShortcutsOpen: false,
	isSidebarVisible: true,
	files: {
		id: 1,
		name: "Folders",
		items: [
			{
				id: 2,
				name: "New folder",
				items: [
					{
						id: 3,
						name: "New note",
						tags: [],
					},
				],
			},
		],
	},
	toBeDeleted: null,
	fullscreen: "",
	modalMode: "",
	newFolderName: "",
	parent: null,
	modalValue: "",
	currentlySelectedFile: null,
	currentlySelectedTag: null,
	tags: [
		{ name: "Blue", color: "#2676ff" },
		{ name: "Green", color: "green" },
		{ name: "Grey", color: "grey" },
		{ name: "Important", color: "red" },
		{ name: "Orange", color: "orange" },
		{ name: "Purple", color: "purple" },
		{ name: "Work", color: "yellow" },
		{ name: "Development", color: "dodgerblue" },
	],
	tagInput: "",
	totalAmount: 0,
	showAvatarDropdown: false,
};

const EditorProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialStates);

	const updateCode = (value) => {
		dispatch({ type: UPDATE_CODE, payload: value });
	};

	const openModal = (id, mode, type) => {
		console.log(type);
		if (mode === "create") {
			dispatch({ type: OPEN_MODAL, payload: type });
		}
		if (mode === "edit") {
			dispatch({ type: FIND_ITEM });
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
			const tempState = { ...state, files: tempFiles };
			dispatch({ type: APPEND_CHILD, payload: tempState });
			dispatch({ type: UPDATE_PARENT, payload: newId });
			dispatch({ type: CLOSE_MODAL });
			toast.success(`Folder "${newValue}" was created`);
		} else {
			toast.error("Please enter a folder name");
		}
	};

	const createFile = () => {
		const tempFiles = { ...state.files };
		const newId = uuidv4();
		const newValue = state.modalValue.trim();

		if (newValue) {
			const newFile = {
				id: newId,
				name: newValue,
				content: "### Title",
				tags: [],
			};

			const index = tempFiles.items.findIndex(
				(item) => item.id === state.parent
			);

			tempFiles.items[index].items.unshift(newFile);
			const tempState = { ...state, files: tempFiles };
			dispatch({ type: APPEND_CHILD, payload: tempState });
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
		const tempFiles = { ...state.files };
		const newValue = state.modalValue.trim();
		if (newValue) {
			tempFiles.items.forEach((item) => {
				if (item.id === state.parent) {
					item.name = newValue;
				}
			});
			const tempState = { ...state, files: tempFiles };
			dispatch({ type: APPEND_CHILD, payload: tempState });
			dispatch({ type: CLOSE_MODAL });
			toast.success(`Name changed to "${newValue}"`);
		} else {
			toast.warn("Please enter a name");
		}
	};

	const handleDelete = () => {
		let index = null;
		const tempFiles = { ...state.files };
		const parents = tempFiles.items.filter((item) => item.id !== state.parent);
		if (tempFiles.items.length > 1) {
			index = tempFiles.items.findIndex((item) => item.id === state.parent);

			if (parents.length === index) {
				index -= 1;
			}

			console.log("index ==> ", index);
		}
		tempFiles.items = parents;
		const tempState = { ...state, files: tempFiles };
		dispatch({ type: APPEND_CHILD, payload: tempState });
		dispatch({ type: CLOSE_MODAL });
		dispatch({
			type: UPDATE_PARENT,
			payload: index !== null ? parents[index].id : null,
		});
		toast.success(`Item deleted`);
	};

	const updateSelectedFile = (id) => {
		dispatch({ type: UPDATE_CURRENT_FILE, payload: id });
	};

	const assignCode = () => {
		// const tempFiles = state.files;
		// const item = findItem(tempFiles.items, state.currentlySelectedFile);
		// console.log(item);
		// dispatch({ type: ASSIGN_CODE, payload: item });
	};

	const selectParent = (id) => {
		dispatch({ type: UPDATE_PARENT, payload: id });
	};

	const selectTag = (id) => {
		dispatch({ type: UPDATE_TAG, payload: id });
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

	const getAmount = () => {
		dispatch({ type: GET_AMOUNT });
	};

	const closeShortcutsModal = () => {
		dispatch({ type: CLOSE_SHORCUTS_MODAL });
	};

	const openShortcutsModal = () => {
		dispatch({ type: OPEN_SHORCUTS_MODAL });
	};

	const toggleSidebar = () => {
		dispatch({ type: TOGGLE_SIDEBAR });
	};

	const setShowAvatarDropdown = (val) => {
		dispatch({ type: TOGGLE_AVATAR_DROPDOWN, payload: val });
	};

	const setData = (data) => {
		dispatch({ type: SET_DATA, payload: data });
	};

	const fetchData = async (user) => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_BASEURL}/editor/data`,
				{ email: user.email },
				{
					headers: {
						authorization: `bearer ${user.token}`,
					},
				}
			);
			dispatch({ type: SET_DATA, payload: response.data });
		} catch (error) {
			toast.error("Something went wrong");
		}
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
				updateSelectedFile,
				assignCode,
				addNewTag,
				updateTagInput,
				clearTagInput,
				toggleTags,
				selectParent,
				selectTag,
				getAmount,
				closeShortcutsModal,
				openShortcutsModal,
				toggleSidebar,
				setShowAvatarDropdown,
				setData,
				fetchData,
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
