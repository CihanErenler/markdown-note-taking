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
  const { getUserFromLocalStorage } = useAuthContext();

  useEffect(() => {
    getUserFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (files && files.items.length > 0) {
      files.items.forEach((item) => {
        if (item.items.length > 0) {
          selectParent(item.id);
          updateSelectedFile(item.items[0].id);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  // useEffect(() => {
  //   if (parent && files) {
  // 		files.items.forEach(item => {
  // 			if (item.length > 0)
  //         updateSelectedFile(item[0].id);
  // 		})

  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [files]);

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
