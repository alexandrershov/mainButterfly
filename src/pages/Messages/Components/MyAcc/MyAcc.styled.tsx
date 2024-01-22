import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledWrapper = styled.div`
  min-width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const StyledWrapperUpLoad = styled.div`
  width: 120px;
  height: auto;
`;

export const StyledUserName = styled.div`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Heebo", sans-serif;
  font-size: 30px;
  color: white;

  &:last-child {
    font-size: 18px;
  }
`;

export const StyledAvatarUser = styled.div<{ $srcImg: string }>`
  width: 100px;
  height: 100px;
  background: url(${({ $srcImg }) => $srcImg || ""});
  border: 1px solid red;
  background-size: 100% 100%;
`;
