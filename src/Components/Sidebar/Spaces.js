import React from "react";
import styled from "styled-components";
import { MdAddCircleOutline } from "react-icons/md";
import IconButton from "../IconButton";

const Spaces = ({ title }) => {
  return (
    <StyledSpaces>
      <div className="space-title-wrapper">
        <h1 className="space-title">Folders</h1>
        <IconButton>
          <MdAddCircleOutline size={26} />
        </IconButton>
      </div>
    </StyledSpaces>
  );
};

const StyledSpaces = styled.section`
  color: ${(props) => props.theme.bg1};

  .space-title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;

    .space-title {
      text-transform: capitalize;
      font-size: 18px;
      margin-right: 10px;
    }
  }
`;

export default Spaces;
