import { Input } from "antd";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

export const StyledContainerMessages = styled.div`
    width: 100%;
    height: 90%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    overflow-y: scroll;
    padding: 15px 15px 0px 15px;

  &::-webkit-scrollbar {
   width: 12px;
   border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Цвет ползунка */
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #0D2338;
  }
`;

export const StyledWrapperForm = styled.div`
  display: flex;
  align-items: center;
  width: 70vw;
  box-sizing: border-box;
`;

export const StyledContainerWriter = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  margin-top: auto;
`;

export const StyledInputChat = styled(Input)`
  width: 300%;
  height: 60px;
`;

export const StyledWrapperMessage = styled.div<{$user: boolean}>`
  width: 100%;
  display: flex;
  justify-content: ${({ $user }) => ($user? "flex-end" : "flex-start")};
`;

export const StyledMessage = styled.div`
  width: auto;
  height: auto;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  animation: ${fadeIn} 0.5s ease-out;
  font-family: "Mooli", sans-serif;
  font-size: 14px;
`;