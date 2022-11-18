import { useState } from "react";
import styled from "styled-components";
import Input from "../Input";

const Filter = () => {
  const [value, setValue] = useState("");

  return (
    <StyledFilterView>
      <div className="search-wrapper">
        <Input
          value={value}
          action={(e) => setValue(e.target.value)}
          placeholder="Search..."
          type="search"
        />
      </div>
    </StyledFilterView>
  );
};

const StyledFilterView = styled.section`
  width: 260px;

  .search-wrapper {
    padding: 10px;
    background-color: #f9f9f9;
    border-bottom: 1px solid ${(props) => props.theme.inputBorder};
    height: 50px;
  }
`;

export default Filter;
