import React, { useContext, useState } from "react";

const EditorContext = React.createContext();

const EditorProvider = ({ children }) => {
	const [code, setCode] = useState("# Title");
	return (
		<EditorContext.Provider value={{ code, setCode }}>
			{children}
		</EditorContext.Provider>
	);
};

const useEditorContext = () => {
	return useContext(EditorContext);
};

export { EditorProvider, useEditorContext };
