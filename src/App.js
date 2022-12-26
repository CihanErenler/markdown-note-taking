import { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import themes from "./theme";
import styled from "styled-components";
import { ToastContainer, Slide } from "react-toastify";
import { useEditorContext } from "./Context/EditorContext";
import { useAuthContext } from "./Context/AuthContext";
import CustomRouter from "./CustomRouter";
import AuthWrapper from "./Components/Auth/AuthWrapper.js";
import "react-toastify/dist/ReactToastify.css";
import "./Split.css";

function App() {
  const [currentTheme, setCurrentTheme] = useState(false);
  const { files, selectParent, parent, updateSelectedFile } =
    useEditorContext();
  const { getUserFromLocalStorage, user } = useAuthContext();

  useEffect(() => {
    getUserFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let selected = false;
    if (files && files.items.length > 0) {
      files.items.forEach((item) => {
        if (item.items.length > 0 && !selected) {
          selectParent(item.id);
          updateSelectedFile(item.items[0].id);
          selected = true;
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files, user]);

  return (
    <Main>
      <GlobalStyles />
      <ThemeProvider theme={currentTheme ? themes.dark : themes.default}>
        <AuthWrapper>
          <CustomRouter />
        </AuthWrapper>
      </ThemeProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        transition={Slide}
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
`;

export default App;
