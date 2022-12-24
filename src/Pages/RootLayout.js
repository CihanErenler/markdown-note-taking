import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../Components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useAuthContext } from "../Context/AuthContext";
import { useEditorContext } from "../Context/EditorContext";
import AuthSpinner from "../Components/Auth/AuthSpinner";
import { toast } from "react-toastify";

const RootLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, showRootSpinner, handleRootSpinner } = useAuthContext();
  const { setData, fetchData, clearState } = useEditorContext();

  useEffect(() => {
    if (user) {
      toast.success(`Welcome ${user.name}`);
      setTimeout(() => {
        navigate("/notes");
        handleRootSpinner();
      }, 1500);
    } else {
      setTimeout(() => {
        handleRootSpinner();
      }, 1600);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (!user) {
      clearState();
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchData(user);
    }
    // else if (data) {
    //   console.log("Set dataaaa");
    //   setData(data);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (showRootSpinner) {
    return <AuthSpinner />;
  }

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
