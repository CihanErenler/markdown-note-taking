import React, { useContext, useReducer } from "react";
import reducer, {
  CLOSE_MODAL,
  CREATE_FOLDER,
  OPEN_MODAL,
} from "../Reducers/EditorReducer";
import { UPDATE_CODE } from "../Reducers/EditorReducer";

const EditorContext = React.createContext();

const initialStates = {
  code: `
# Learning progress

Now I will show you some example code

~~~js 
  function learnMore(value) {
    // do something here
    const newValue = Math.random() + value;
    return newValue;
  };
~~~

As you can see from above it looks awesome 🚀
`,
  isModalOpen: false,
  files: {
    name: "Folders",
    isFolder: true,
    isOpen: false,
    items: [
      { name: "do something", isFolder: false, items: [] },
      {
        name: "school",
        isFolder: true,
        isOpen: false,
        items: [
          { name: "lets do this shit", isFolder: false, items: [] },
          { name: "oh yeah", isFolder: false, items: [] },
          {
            name: "hadi bakalim",
            isFolder: true,
            items: [
              { name: "title1", isFolder: false, items: [] },
              { name: "title2", isFolder: false, items: [] },
            ],
          },
        ],
      },
    ],
  },
  currentFile: {},
  selectedFolder: "root",
};

const EditorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates);

  const updateCode = (value) => {
    dispatch({ type: UPDATE_CODE, payload: value });
  };

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const createFolder = (folderName) => {
    dispatch({ type: CREATE_FOLDER, payload: folderName });
  };

  return (
    <EditorContext.Provider
      value={{ ...state, updateCode, openModal, closeModal, createFolder }}
    >
      {children}
    </EditorContext.Provider>
  );
};

const useEditorContext = () => {
  return useContext(EditorContext);
};

export { EditorProvider, useEditorContext };
