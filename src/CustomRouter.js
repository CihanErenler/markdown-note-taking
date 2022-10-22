import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import {
  Root,
  NotFound,
  Welcome,
  User,
  About,
  AuthLayout,
  Login,
  Register,
} from "./Pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route index element={<Welcome />} />
      <Route path="/notes" element={<User />} />
      <Route path="/about" element={<About />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Route>
  )
);

const CustomRouter = () => {
  return <RouterProvider router={router} />;
};

export default CustomRouter;
