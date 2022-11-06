import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledLoginContent>
      <h1>Login</h1>
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
      <Button variant="full">Login</Button>
      <p>
        Don't you have an account? <Link to="/auth/register">Register</Link>
      </p>
    </StyledLoginContent>
  );
};

const StyledLoginContent = styled.div`
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

export default LoginContent;
