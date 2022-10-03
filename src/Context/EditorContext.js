import React, { useContext, useReducer } from "react";
import reducer, { CLOSE_MODAL, OPEN_MODAL } from "../Reducers/EditorReducer";
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
  files: {},
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

  return (
    <EditorContext.Provider
      value={{ ...state, updateCode, openModal, closeModal }}
    >
      {children}
    </EditorContext.Provider>
  );
};

const useEditorContext = () => {
  return useContext(EditorContext);
};

export { EditorProvider, useEditorContext };
