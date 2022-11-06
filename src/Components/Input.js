import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BiShow, BiHide } from "react-icons/bi";

const Input = ({ value, action, placeholder, disabled, focused, type }) => {
  const [showPass, setShowPass] = useState(false);
  const input = useRef(null);

  useEffect(() => {
    if (focused) {
      input.current.select();
    }
  }, []);

  return (
    <StyledInput>
      <div className="input-wrapper">
        <input
          ref={input}
          value={value}
          onChange={action}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
        />
        {type === "password" ? (
          <span onClick={() => setShowPass(!showPass)}>
            {showPass ? (
              <BiHide size={26} color="gray" />
            ) : (
              <BiShow size={26} color="gray" />
            )}
          </span>
        ) : (
          ""
        )}
      </div>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  .input-wrapper {
    position: relative;
    margin-bottom: 20px;

    span {
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: 14px;
      transform: translateY(-50%);
      display: grid;
      align-items: center;
    }

    input {
      border: 1px solid ${(props) => props.theme.inputBorder};
      height: 45px;
      width: 100%;
      border-radius: 6px;
      padding: 0 20px;
      font-size: 18px;
      transition: all 0.3s ease;
      background-color: ${(props) => props.theme.inputBg};

      ::-moz-selection {
        color: ${(props) => props.theme.bg1};
        background: ${(props) => props.theme.primary};
      }

      ::selection {
        color: ${(props) => props.theme.bg1};
        background: ${(props) => props.theme.primary};
      }

      :focus {
        outline: none;
        border-color: ${(props) => props.theme.primary};
        box-shadow: 0px 0px 0px 3px ${(props) => props.theme.inputBorderFocus};
        background-color: ${(props) => props.theme.inputBg};
      }
    }
  }
`;

export default Input;
