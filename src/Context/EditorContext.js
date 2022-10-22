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
  UNSELECT_ALL,
  ASSIGN_CODE,
  UPDATE_CURRENT_FILE,
} from "../Reducers/EditorReducer";
import { UPDATE_CODE } from "../Reducers/EditorReducer";
import { v4 as uuidv4 } from "uuid";
import {
  toggleFolder,
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
    items: [
      {
        id: 2,
        name: "Working folder",
        isFolder: true,
        isOpen: true,
        items: [
          {
            id: 3,
            name: "First note",
            isFolder: false,
            isOpen: false,
            content: "### Title",
            isSelected: true,
            items: [],
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
  currentlyOpenFile: 3,
  documents: [{ id: 3, content: "### Title" }],
  tags: [
    { name: "Blue", color: "blue" },
    { name: "Green", color: "green" },
    { name: "Grey", color: "grey" },
    { name: "Important", color: "red" },
    { name: "Orange", color: "orange" },
    { name: "Purple", color: "purple" },
    { name: "Work", color: "yellow" },
    { name: "Development", color: "dodgerblue" },
  ],
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
        isFolder: false,
        isOpen: false,
        content: "### Title",
        isSelected: true,
        items: [],
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
        handleSelectFile,
        assignCode,
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
