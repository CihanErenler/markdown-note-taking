import React, { useContext, useReducer } from "react";
import reducer, {
	CLOSE_MODAL,
	FIND_ITEM,
	OPEN_MODAL,
	TOGGLE_FOLDER_TREE,
	TOGGLE_FULLSCREEN,
	UPDATE_MODAL,
	UPDATE_PARENT,
	CREATE_FOLDER,
} from "../Reducers/EditorReducer";
import { UPDATE_CODE } from "../Reducers/EditorReducer";
import { v4 as uuidv4 } from "uuid";
import { toggleFolder, addFolder } from "../helpers";

const EditorContext = React.createContext();

const initialStates = {
	code: '### Lesson notes\n---\n\n> ##### This is important\n> Do not talk with other people\n\nNow lets add some **code** example\n\n```js \n  const name = "Cihan Erenler";\n  console.log(name) // Cihan Erenler\n```\n###### Things to rememeber \n- Do some research beforehand\n- Keep reading\n- Then study more\n\nHere some fo  loop example as well\n\n```js \nconst array = ["Cihan, Sinan"]\nlet i\nfor(i = 0; i < array.length; i + 1) {\n  console.log(array[i])\n}\n// output ==> Cihan, Sinan\n````\nIf you keep doing this you will end...',
	isModalOpen: false,
	files: {
		id: 1,
		name: "Folders",
		isFolder: true,
		isOpen: false,
		items: [
			{
				id: 2,
				name: "do something",
				isFolder: false,
				isOpen: false,
				items: [],
			},
			{
				id: 3,
				name: "school",
				isFolder: true,
				isOpen: false,
				items: [
					{
						id: 4,
						name: "lets do this shit",
						isFolder: false,
						isOpen: false,
						items: [],
					},
					{ id: 5, name: "oh yeah", isFolder: false, isOpen: false, items: [] },
					{
						id: 6,
						name: "hadi bakalim",
						isFolder: true,
						isOpen: false,
						items: [
							{
								id: 7,
								name: "title1",
								isFolder: false,
								isOpen: false,
								items: [],
							},
							{
								id: 8,
								name: "title2",
								isFolder: false,
								isOpen: false,
								items: [],
							},
						],
					},
				],
			},
		],
	},
	currentFile: {},
	selectedFolder: "root",
	fullscreen: "",
	modalMode: "",
	newFolderName: "",
	parent: null,
	modalValue: "Untitled",
};

const EditorProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialStates);

	const updateCode = (value) => {
		dispatch({ type: UPDATE_CODE, payload: value });
	};

	const openModal = (id, mode, type) => {
		if (mode === "create") {
			dispatch({ type: UPDATE_PARENT, payload: id });
			dispatch({ type: OPEN_MODAL, payload: type });
		}
		if (mode === "edit") {
			dispatch({ type: FIND_ITEM, payload: id });
			dispatch({ type: OPEN_MODAL, payload: type });
		}
	};

	const closeModal = () => {
		dispatch({ type: CLOSE_MODAL });
	};

	const createFolder = () => {
		const tempFiles = state.files;
		// const newId = uuidv4();
		const newFolder = {
			id: Date.now(),
			name: state.modalValue,
			isFolder: true,
			isOpen: false,
			items: [],
		};
		console.log(newFolder);
		addFolder(tempFiles.items, state.parent, newFolder);
		console.log(tempFiles);
		dispatch({ type: CREATE_FOLDER, payload: tempFiles });
		dispatch({ type: CLOSE_MODAL });
	};

	const toggleFolderTree = (id) => {
		const tempFiles = state.files;
		toggleFolder(tempFiles.items, id);
		dispatch({ type: TOGGLE_FOLDER_TREE, payload: tempFiles });
	};

	const toggleFullscreen = (viewName) => {
		dispatch({ type: TOGGLE_FULLSCREEN, payload: viewName });
	};

	const updateModalValue = (e) => {
		dispatch({ type: UPDATE_MODAL, payload: e.target.value });
	};

	return (
		<EditorContext.Provider
			value={{
				...state,
				updateCode,
				openModal,
				closeModal,
				createFolder,
				toggleFolderTree,
				toggleFullscreen,
				updateModalValue,
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
