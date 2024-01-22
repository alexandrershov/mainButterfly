import styled from "styled-components";
import iconMain from "../../../assets/icon/iconMain.jpeg";

export const StyledWrapper = styled.div`
  width: 620px;
  height: 500px;
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-family: "Mooli", sans-serif;
`;

export const StyledIcon = styled.div`
  background: url(${iconMain});
  width: 300px;
  height: 300px;
  background-size: 300px 300px;
  background-position: center center;
`;
