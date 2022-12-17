import React from "react";
import hero from "../Assets/images/hero.png";
import Button from "../Components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    if (type === "notes") {
      navigate("/notes");
      return;
    }
    navigate("/register");
  };

  return (
    <StyledWelcomePage>
      <div className="container">
        <h1>
          Write <span>down </span> what you think
        </h1>
        <p>
          NoteDock is a markdown note-taking application that helps you take
          notes quickly. It renders markdown real-time to give you preview of
          what you write down.
        </p>
        <div className="button-container">
          <Button width="200px" action={() => handleClick("notes")}>
            Start taking note
          </Button>
          <Button
            width="200px"
            variant="outlined"
            action={() => handleClick("register")}
          >
            Register
          </Button>
        </div>
        <img className="hero" src={hero} alt="hero-img" />
      </div>
    </StyledWelcomePage>
  );
};

const StyledWelcomePage = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #83aade 100%);
  position: relative;
  overflow: hidden;

  .container {
    width: 100%;
    max-width: 1400px;
    margin: auto;
    padding-top: 40px;
    text-align: center;

    h1 {
      font-size: 55px;

      span {
        color: dodgerblue;
      }
    }

    p {
      font-size: 20px;
      max-width: 600px;
      margin: auto;
    }

    .button-container {
      display: flex;
      gap: 20px;
      padding: 20px 0;
      align-items: center;
      justify-content: center;
    }
  }

  .hero {
    width: 80%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 50px;
    opacity: 0.9;
    position: absolute;
    bottom: -200px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default WelcomePage;
