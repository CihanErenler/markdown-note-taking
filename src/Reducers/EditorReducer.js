// Reducer types
export const UPDATE_CODE = "UPDATE_CODE";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TOGGLE_FOLDER_TREE = "TOGGLE_FOLDER_TREE";

const editorReducer = (state, action) => {
  if (action.type === UPDATE_CODE) {
    const tempState = { ...state, code: action.payload };
    return tempState;
  }

  if (action.type === OPEN_MODAL) {
    const tempState = { ...state, isModalOpen: true };
    return tempState;
  }

  if (action.type === CLOSE_MODAL) {
    const tempState = { ...state, isModalOpen: false };
    return tempState;
  }

  if (action.type === TOGGLE_FOLDER_TREE) {
    const tempFiles = state.files;
    const tempId = action.payload;

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

    toggleFolder(tempFiles.items, tempId);
    const tempState = { ...state, files: tempFiles };

    return tempState;
  }

  return state;
};

export default editorReducer;
