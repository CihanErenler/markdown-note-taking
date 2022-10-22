import styled from "styled-components";
import Button from "./Button";

const ViewHeader = () => {
  return (
    <StyledViewHeader>
      {/* <Button>Save</Button> */}
      <div>
        <h2>Herkese selamlar</h2>
      </div>
    </StyledViewHeader>
  );
};

const StyledViewHeader = styled.nav`
  height: 55px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.inputBorder};

  h2 {
    font-weight: 400;
    font-size: 20px;
  }
`;

export default ViewHeader;
