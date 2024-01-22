import styled from "styled-components";
import freeIcon from "../../../../assets/icon/freeIcon.png";
import { Button } from "antd";

export const StyledWrapper = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border-right: 1px solid white;
  box-sizing: border-box;
  gap: 10px;
`;

export const StyledMenu = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  border-radius: 0 0 10px 0;
  display: flex;
`;

export const StyledMenuBtn = styled(Button)`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  &:last-child {
    border-radius: 0 0 10px 0;
  }

  &:hover {
  }
`;

export const StyledWrapperContact = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const StyledContact = styled(Button)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  height:60px;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #B3B3B3;
  cursor: pointer;

  &:hover{
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  }

  &:active{
    background-color: #3DA1FF;
    transition: 0s;
  }
`;

export const StyledContactIcon = styled.div<{ photo?: string }>`
  background: ${({ photo }) => (photo ? `url(${photo})` : `url(${freeIcon})`)};
  width: 24px;
  height: 24px;
`;
