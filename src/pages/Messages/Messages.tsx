import React, { FC } from "react";
import { Menu, Chat } from "./Components";
import { StyledWrapper } from "./Messages.styled";

export const Messages: FC = () => {
  return (
    <StyledWrapper>
      <Menu />
      <Chat />
    </StyledWrapper>
  );
};
