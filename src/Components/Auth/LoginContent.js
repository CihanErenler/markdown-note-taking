import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const LoginContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useAuthContext();

  const handleClick = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warn("Please fill all fields");
      return;
    }

    const credentials = { email, password };
    await loginUser(credentials);
  };

  return (
    <StyledLoginContent>
      <h1>Login</h1>
      <form>
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
        <Button variant="full" action={handleClick}>
          Login
        </Button>
      </form>
      <p>
        Don't you have an account? <Link to="/register">Join Notedock</Link>
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
    margin-top: 20px;
    font-size: 14px;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.primary};
    }
  }
`;

export default LoginContent;
