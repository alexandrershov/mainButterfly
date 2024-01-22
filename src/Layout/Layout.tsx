import React, { FC } from "react";
import { StyledWrapperBg } from "./Layout.styled";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return <StyledWrapperBg>{children}</StyledWrapperBg>;
};
