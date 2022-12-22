import React from "react";
import Avatar from "./Avatar";

const NameAndAvatar = ({ name, lastname, email }) => {
	return (
		<div className="name-and-avatar">
			<Avatar name={name} lastname={lastname} />
			<div>
				<div className="name">{`${name} ${lastname}`}</div>
				<div className="email">{email}</div>
			</div>
		</div>
	);
};

export default NameAndAvatar;
