import { Navigate, createBrowserRouter } from "react-router-dom";
import { Messages, Auth } from "../pages";
import React, { FC } from "react";
import { getFromLocalStorage } from "../hooks/getFromLocalStorage";
import { APP_ROUTES } from "../utils/consts";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRouter: FC<PrivateRouteProps> = ({
  children,
}: PrivateRouteProps) => {
  const userToken = getFromLocalStorage("userToken");
  return userToken ? <>{children}</> : <Navigate to="/login" />;
};

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.LOGIN,
    element: <Auth />,
  },
  {
    path: APP_ROUTES.REGISTER,
    element: <Auth />,
  },
  {
    path: APP_ROUTES.MESSAGES,
    element: (
      <PrivateRouter>
        <Messages />
      </PrivateRouter>
    ),
  },
  {
    path: "*",
    element: <>Error not found!</>,
  },
  {
    path: "/",
    element: <Navigate to="/messages" />,
  },
]);
