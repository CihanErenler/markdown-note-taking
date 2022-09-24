import React, { useContext, useState } from "react";

const EditorContext = React.createContext();

const tempDedault = `
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
`;

const EditorProvider = ({ children }) => {
  const [code, setCode] = useState(tempDedault);
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
