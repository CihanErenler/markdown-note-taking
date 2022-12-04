import React from "react";
import hero from "../Assets/images/hero.png";
import Button from "../Components/Button";
import styled from "styled-components";

const WelcomePage = () => {
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
					<Button width="200px">Start taking note</Button>
					<Button width="200px" variant="outlined">
						Register
					</Button>
				</div>
				<img src={hero} alt="hero-img" />
			</div>
		</StyledWelcomePage>
	);
};

const StyledWelcomePage = styled.div`
	height: 100%;
	background: linear-gradient(180deg, #ffffff 0%, #b0cbee 100%);

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

	img {
		width: 70%;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
		border-radius: 50px;
		opacity: 0.9;
	}
`;

export default WelcomePage;
