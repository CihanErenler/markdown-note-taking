import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
import { Root, NotFound, Welcome, User, About, Login, Register } from "./Pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<NotFound />}>
			<Route index element={<Welcome />} />
			<Route path="/notes" element={<User />} />
			<Route path="/about" element={<About />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Route>
	)
);

const CustomRouter = () => {
	return <RouterProvider router={router} />;
};

export default CustomRouter;
