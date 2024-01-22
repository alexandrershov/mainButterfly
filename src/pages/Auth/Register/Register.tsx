import React from "react";
import { FormCustom } from "../../../UI";
import { isValidEmail } from "../../hooks/isValidEmail";
import { StyledWrapper, StyledTitle } from "./Register.styled";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";
import { getDatabase, ref, push, set } from "firebase/database";

export const Register = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const db = getDatabase();

  const onFinish = (values: any) => {
    console.log(values);
    if (!isValidEmail(values.email)) return alert("Please enter a valid email");
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(({ user }) => {
        dispatch(setUser(user));
        const postListUser = ref(db, 'users');
        const newUserRef = push(postListUser);
        set(newUserRef, {
            email: values.email,
            id: auth.currentUser?.uid
        });
      })
      .catch(console.error);
  };

  const onFinishFailed = (errorInfo: any) => {
    //TODO: post data to backend
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledWrapper>
      <StyledTitle>Register</StyledTitle>
      <FormCustom onFinish={onFinish} onFinishFailed={onFinishFailed} />
      <p>
        or <Link to="/login"> login </Link>
      </p>
    </StyledWrapper>
  );
};
