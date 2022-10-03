import { useEffect, useRef } from "react";
import styled from "styled-components";

const Input = ({ value, action, placeholder, disabled, focused }) => {
  const input = useRef(null);

  useEffect(() => {
    if (focused) {
      input.current.select();
    }
  }, []);

  return (
    <StyledInput
      ref={input}
      value={value}
      onChange={action}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme.textColorLighter};
  height: 45px;
  width: 100%;
  border-radius: 6px;
  padding: 0 20px;
  font-size: 18px;
  transition: all 0.3s ease;

  ::-moz-selection {
    color: ${(props) => props.theme.bg1};
    background: ${(props) => props.theme.sidebarBg};
  }

  ::selection {
    color: ${(props) => props.theme.bg1};
    background: ${(props) => props.theme.sidebarBg};
  }

  :focus {
    outline: none;
    border-color: ${(props) => props.theme.buttonHover};
    box-shadow: 0px 0px 0px 5px ${(props) => props.theme.buttonFocus};
    background-color: ${(props) => props.theme.inputBg};
  }
`;

export default Input;
