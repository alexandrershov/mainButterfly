import React, { useEffect, useState } from "react";
import {
  StyledWrapper,
  StyledWrapperUpLoad,
  StyledUserName,
  StyledAvatarUser,
  StyledContainer,
} from "./MyAcc.styled";
import { Button, Checkbox, Form, Input, message } from "antd";
import { getAuth, updateProfile } from "firebase/auth";

type FieldType = {
  username?: string;
  url?: string;
};

export const MyAcc = () => {
  const [userData, setUserData] = useState<{
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
  } | null>(null);
  const [isEdit, setEdit] = useState<boolean>(false);

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user !== null) {
      setUserData({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  const onFinish = (values: any) => {
    if (auth.currentUser !== null)
      updateProfile(auth.currentUser, {
        displayName: values.username,
        photoURL: values.url,
      })
        .then(() => {
          message.success("Profile Updated");
        })
        .catch((error) => {
          message.error("Error updating");
        });
    setEdit(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledContainer>
      {!isEdit && (
        <StyledWrapper>
          <StyledWrapperUpLoad>
            <StyledAvatarUser
              $srcImg={userData?.photoURL ? userData?.photoURL : "string"}
            />
          </StyledWrapperUpLoad>
          <StyledUserName>
            {userData ? userData.displayName : <>Loading...</>}
          </StyledUserName>
          <Button onClick={() => setEdit(true)}>Редактировать профиль</Button>
        </StyledWrapper>
      )}
      {isEdit && (
        <StyledWrapper>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            color="white"
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="urlImg"
              name="url"
              rules={[
                { required: true, message: "Please input your url for img!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Button onClick={() => setEdit(false)}>
             Закрыть редактирование профиля
          </Button>
        </StyledWrapper>
      )}
    </StyledContainer>
  );
};
