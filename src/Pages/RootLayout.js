import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../Components/Header";
import styled from "styled-components";

const RootLayout = () => {
  const location = useLocation();
  return (
    <StyledRootElement>
      {location.pathname !== "/notes" ? <Header /> : ""}
      <main>
        <Outlet />
      </main>
    </StyledRootElement>
  );
};

const StyledRootElement = styled.section`
  main {
    height: calc(100vh - 60px);
  }
`;

export default RootLayout;
