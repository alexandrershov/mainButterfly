import React, { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../Router/Router";
import { StyledWrapper } from "./App.styled";
import { Layout } from "../Layout/Layout";

export const App: FC = () => {
  return (
    <StyledWrapper>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </StyledWrapper>
  );
};
