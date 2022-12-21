import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { useAuthContext } from "../../Context/AuthContext";

const AvatarWrapper = () => {
	const { user } = useAuthContext();
	const { name, lastname, email } = user;
	return (
		<StyledAvatarWrapper>
			<Avatar name={name} lastname={lastname} />
			<div>
				<div className="name">{`${name} ${lastname}`}</div>
				<div className="email">{email}</div>
			</div>
		</StyledAvatarWrapper>
	);
};

const StyledAvatarWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	.name {
		font-size: 14px;
		font-weight: 600;
	}

	.email {
		font-size: 12px;
		color: ${(props) => props.theme.textColorLight};
	}
`;

export default AvatarWrapper;
