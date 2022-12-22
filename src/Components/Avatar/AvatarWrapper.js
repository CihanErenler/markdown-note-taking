import { useState, useRef } from "react";
import styled from "styled-components";
import AvatarDropdown from "./AvatarDropdown";
import { FiSettings } from "react-icons/fi";
import { useAuthContext } from "../../Context/AuthContext";
import { useEditorContext } from "../../Context/EditorContext";

const AvatarWrapper = () => {
	const { showAvatarDropdown, setShowAvatarDropdown } = useEditorContext();
	const { user } = useAuthContext();
	const wrapper = useRef(null);
	return (
		<StyledAvatarWrapper>
			<div
				className="name-wrapper"
				onClick={() => setShowAvatarDropdown(!showAvatarDropdown)}
				ref={wrapper}
			>
				<h3>{`${user.name} ${user.lastname}`}</h3>
				<FiSettings size={18} />
			</div>
			{showAvatarDropdown ? (
				<AvatarDropdown
					{...user}
					setShowAvatarDropdown={setShowAvatarDropdown}
					showAvatarDropdown={showAvatarDropdown}
					wrapper={wrapper}
				/>
			) : (
				""
			)}
		</StyledAvatarWrapper>
	);
};

const StyledAvatarWrapper = styled.section`
	display: flex;
	align-items: center;
	position: relative;

	.name-wrapper {
		display: flex;
		align-items: center;
		cursor: pointer;

		svg {
			margin-left: 4px;
			transition: color 0.3s ease;
			pointer-events: none;
		}

		h3 {
			font-size: 16px;
			font-weight: 500;
			text-transform: capitalize;
			color: ${(props) => props.theme.textColor};
			pointer-events: none;
		}

		h3:hover + svg {
			color: ${(props) => props.theme.primary};
		}
	}

	.name-and-avatar {
		display: flex;
		align-items: center;
		justify-content: center;

		.name {
			font-size: 14px;
			font-weight: 600;
			text-transform: capitalize;
		}

		.email {
			font-size: 12px;
			color: ${(props) => props.theme.textColorLight};
		}
	}
`;

export default AvatarWrapper;
