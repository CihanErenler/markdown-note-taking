import React, { useContext, useReducer } from "react";
import reducer, {
  CLOSE_MODAL,
  FIND_ITEM,
  OPEN_MODAL,
  TOGGLE_FOLDER_TREE,
  TOGGLE_FULLSCREEN,
  UPDATE_MODAL,
  UPDATE_PARENT,
  APPEND_CHILD,
  CURRENTY_OPEN_FILE,
  UPDATE_TOBEDELETED,
} from "../Reducers/EditorReducer";
import { UPDATE_CODE } from "../Reducers/EditorReducer";
import { v4 as uuidv4 } from "uuid";
import { toggleFolder, addToParent, renameItem, deleteItem } from "../helpers";
import { toast } from "react-toastify";

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
  toBeDeleted: null,
  selectedFolder: "root",
  fullscreen: "",
  modalMode: "",
  newFolderName: "",
  parent: null,
  modalValue: "",
  currentlyOpenFile: "",
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

      if (state.parent === 1) {
        tempFiles.items.unshift(newFolder);
        dispatch({ type: CLOSE_MODAL });
      } else {
        addToParent(tempFiles.items, state.parent, newFolder);
        dispatch({ type: APPEND_CHILD, payload: tempFiles });
        dispatch({ type: CLOSE_MODAL });
      }
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
        body: "",
        isFolder: false,
        isOpen: false,
        items: [],
      };

      addToParent(tempFiles.items, state.parent, newFile);
      dispatch({ type: APPEND_CHILD, payload: tempFiles });
      dispatch({ type: CLOSE_MODAL });
      dispatch({ type: CURRENTY_OPEN_FILE, payload: newId });
      toast.success(`File "${newValue}" was created`);
    } else {
      toast.warn("Please enter a file name");
    }
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

  return (
    <EditorContext.Provider
      value={{
        ...state,
        updateCode,
        openModal,
        closeModal,
        createFolder,
        createFile,
        toggleFolderTree,
        toggleFullscreen,
        updateModalValue,
        rename,
        handleDelete,
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
