import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import themes from "./theme";
import styled from "styled-components";
import UserPage from "./Pages/UserPage";
import AuthPage from "./Pages/AuthPage";
import AboutPage from "./Pages/AboutPage";
import NotFound from "./Pages/NotFound";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./Split.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

function App() {
  const [currentTheme, setCurrentTheme] = useState(false);

  return (
    <Main>
      <GlobalStyles />
      <ThemeProvider theme={currentTheme ? themes.dark : themes.default}>
        <RouterProvider router={router} />
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
