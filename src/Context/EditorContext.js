import React, { useContext, useReducer } from "react";
import reducer, {
	CLOSE_MODAL,
	OPEN_MODAL,
	TOGGLE_FOLDER_TREE,
	TOGGLE_FULLSCREEN,
} from "../Reducers/EditorReducer";
import { UPDATE_CODE } from "../Reducers/EditorReducer";

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
};

const EditorProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialStates);

	const updateCode = (value) => {
		dispatch({ type: UPDATE_CODE, payload: value });
	};

	const openModal = (id) => {
		console.log(id);
		dispatch({ type: OPEN_MODAL });
	};

	const closeModal = () => {
		dispatch({ type: CLOSE_MODAL });
	};

	const createFolder = (folderName) => {
		// dispatch({ type: CREATE_FOLDER, payload: folderName });
	};

	const toggleFolderTree = (id) => {
		const tempFiles = state.files;
		toggleFolder(tempFiles.items, id);
		dispatch({ type: TOGGLE_FOLDER_TREE, payload: tempFiles });
	};

	const toggleFullscreen = (viewName) => {
		dispatch({ type: TOGGLE_FULLSCREEN, payload: viewName });
	};

	const toggleFolder = (array, id) => {
		array.forEach((item) => {
			if (item.isFolder) {
				if (item.id === id) {
					item.isOpen = !item.isOpen;
				} else {
					toggleFolder(item.items, id);
				}
			}
		});
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
