import styled from "styled-components";
import Parent from "./Folders";
import FilterView from "./FilterView";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Parent />
      <FilterView />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.section`
  display: flex;
  width: 500px;
  border-right: 1px solid ${(props) => props.theme.inputBorder};
`;

export default Sidebar;
