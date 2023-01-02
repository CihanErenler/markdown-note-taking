import React from "react";
import hero from "../Assets/images/hero.png";
import Button from "../Components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useAuthContext } from "../Context/AuthContext";
import heroBg from "../Assets/bg.svg";

const WelcomePage = () => {
  const { user } = useAuthContext();
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
      <img className="bg" src={heroBg} alt="" />
      <div className="container">
        <h1>Write down what you think</h1>
        <p>
          NoteDock is a markdown note-taking application that helps you take
          notes quickly. It renders markdown in real-time to give you a preview
          of what you write down.
        </p>

        <div className="button-container">
          {user ? (
            <Button width="200px" action={() => handleClick("notes")}>
              Start taking note
            </Button>
          ) : (
            <Button width="200px" action={() => handleClick("register")}>
              Register
            </Button>
          )}
        </div>

        <img className="hero" src={hero} alt="hero-img" />
      </div>
    </StyledWelcomePage>
  );
};

const StyledWelcomePage = styled.div`
  height: 100%;
  background-color: #0d1117;
  position: relative;
  overflow: hidden;

  .container {
    width: 100%;
    max-width: 1400px;

    padding-top: 40px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    color: #fff;

    h1 {
      font-size: 55px;
      font-weight: 700;
      padding-bottom: 10px;
      padding-top: 10px;

      @media (max-width: 1499px) {
        font-size: 46px;
      }

      span {
        color: dodgerblue;
      }
    }

    p {
      font-size: 18px;
      max-width: 600px;
      font-weight: 300;
      margin: auto;
      color: #99c1e8;
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
    position: relative;
    z-index: 99;
    width: 100%;
    box-shadow: rgba(41, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 20px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 1499px) {
      bottom: -350px;
    }
  }
`;

export default WelcomePage;
