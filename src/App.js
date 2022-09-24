import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import themes from "./theme";
import PreviewContainer from "./Components/PreviewContainer";

function App() {
  const [currentTheme, setCurrentTheme] = useState(false);
  const [code, setCode] = useState("");

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={currentTheme ? themes.dark : themes.default}>
        <PreviewContainer code={code} />
      </ThemeProvider>
    </div>
  );
}

export default App;
