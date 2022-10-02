import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import themes from "./theme";
import PreviewContainer from "./Components/PreviewContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import styled from "styled-components";
import Split from "react-split";
import "./Split.css";

function App() {
  const [currentTheme, setCurrentTheme] = useState(false);
  const [code, setCode] = useState("");

  return (
    <Main>
      <GlobalStyles />
      <ThemeProvider theme={currentTheme ? themes.dark : themes.default}>
        <StyledContainer>
          <Split
            sizes={[20, 80]}
            direction="horizontal"
            cursor="col-resize"
            className="split-flex"
          >
            <Sidebar />
            <PreviewContainer code={code} />
          </Split>
        </StyledContainer>
      </ThemeProvider>
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
`;

const StyledContainer = styled.section`
  display: flex;
  align-items: stretch;
`;

export default App;
