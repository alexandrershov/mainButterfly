import React, { FC } from "react";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthorizedUser } from "./hooks/useAuthorizedUser";

export const Auth: FC = () => {
  const { pathname } = useLocation();
  const { isLogin } = useAuthorizedUser();

  if (isLogin) return <Navigate to="/messages" />;

  return <div>{pathname === "/login" ? <Login /> : <Register />}</div>;
};
