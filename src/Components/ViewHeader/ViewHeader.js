import styled from "styled-components";
import Tags from "./Tags";
import AvatarWrapper from "../Avatar/AvatarWrapper";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../Context/AuthContext";
import Button from "../Button";

const ViewHeader = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <StyledViewHeader>
      <div className="doc-info">
        <div>
          <h2>Herkese selamlar</h2>
        </div>
        <Tags />
      </div>
      {user ? (
        <>
          <Button>Save</Button>
          <AvatarWrapper />
        </>
      ) : (
        <Button variant="small" action={handleClick}>
          Login
        </Button>
      )}
    </StyledViewHeader>
  );
};

const StyledViewHeader = styled.nav`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderLight};
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.2;
  background-color: #f9f9f9;

  .doc-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h2 {
      font-weight: 500;
      font-size: 18px;
      padding-bottom: 6px;
    }
  }
`;

export default ViewHeader;
