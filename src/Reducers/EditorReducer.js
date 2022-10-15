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
    const newState = { ...state, fullscreen: tempVal };
    return newState;
  }

  if (action.type === UPDATE_PARENT) {
    const newState = { ...state, parent: action.payload };
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

  return state;
};

export default editorReducer;
