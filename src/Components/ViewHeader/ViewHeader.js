import styled from "styled-components";
import Tags from "./Tags";

const ViewHeader = () => {
  return (
    <StyledViewHeader>
      <div>
        <h2>Herkese selamlar</h2>
      </div>
      <Tags />
    </StyledViewHeader>
  );
};

const StyledViewHeader = styled.nav`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.inputBorder};
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1.2;

  h2 {
    font-weight: 500;
    font-size: 16px;
  }
`;

export default ViewHeader;
