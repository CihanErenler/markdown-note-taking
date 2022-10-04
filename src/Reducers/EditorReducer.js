// Reducer types
export const UPDATE_CODE = "UPDATE_CODE";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const CREATE_FOLDER = "CREATE_FOLDER";

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

  if (action.type === CREATE_FOLDER) {
    console.log("girdi");
    const folderName = action.payload;
    const tempFiles = state.files;

    const folderObj = {
      name: folderName,
      parent: true,
      children: [],
      isOpen: false,
    };

    const checkName = (curName) => {
      const filtered = tempFiles.children.find(
        (item) => item.name === folderName
      );

      if(filtered) {
        const seperated = filtered.name.split("-")
        const num = isNaN(Number(seperated[seperated.length - 1]))

        if(num) {
          folderObj.name = `${curName}-1`
        } else {
          const number = Number(seperated[seperated.length - 1])
          seperated.pop()
          const newName = `${seperated.join("-")}-${number + 1}`
          checkName(newName)
          folderObj.name = newName
        }
      }
    }

    const addFolder = (files) => {
      if (state.selectedFolder === "root") {
        checkName()
        files.children.unshift(folderObj);
      } else {
        files.children.forEach((file) => {
          if (file.parent) {
            if (file.name === state.selectedFolder) {
              file.children.shift(folderObj);
              return;
            } else {
              addFolder(file.children);
            }
          }
        });
      }
    };

    addFolder(tempFiles);
    return { ...state, files: tempFiles };
  }

  return state;
};

export default editorReducer;
