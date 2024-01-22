import React, { FC } from "react";
import { StyledWrapper, StyledTitle } from "./Login.styled";
import { FormCustom } from "../../../UI/index";
import { isValidEmail } from "../../hooks/isValidEmail";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";
import { message } from "antd";

export const Login: FC = () => {
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    if (!isValidEmail(values.email)) return alert("Please enter a valid email");

    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(({ user }) => {
        dispatch(setUser(user));
      })
      .catch((error) => {
        message.error("Проверьте правильность введенных данных");
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    //TODO: post data to backend
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledWrapper>
      <StyledTitle>Login</StyledTitle>
      <FormCustom onFinish={onFinish} onFinishFailed={onFinishFailed} />
      <p>
        or <Link to="/register"> register </Link>
      </p>
    </StyledWrapper>
  );
};
