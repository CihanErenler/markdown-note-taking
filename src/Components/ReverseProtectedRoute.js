import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const ReverseProtectedRoute = ({ children }) => {
	const { user } = useAuthContext();
	if (user) {
		return <Navigate to="/notes" />;
	}

	return children;
};

export default ReverseProtectedRoute;
