import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RegisterContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledRegisterContent>
      <h1>Register</h1>
      <Input
        placeholder="Name"
        value={name}
        action={(e) => setName(e.target.value)}
        type="text"
      />
      <Input
        placeholder="Email"
        value={email}
        action={(e) => setEmail(e.target.value)}
        type="text"
      />
      <Input
        placeholder="Password"
        value={password}
        action={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button variant="full">Register</Button>
      <p>
        Already have an account? <Link to="/auth">Login</Link>
      </p>
    </StyledRegisterContent>
  );
};

const StyledRegisterContent = styled.div`
  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.primary};
    }
  }
`;

export default RegisterContent;
