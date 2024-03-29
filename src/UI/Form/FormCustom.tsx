import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

export const FormCustom: React.FC<{
  onFinish: (values: any) => void;
  onFinishFailed: (values: any) => void;
}> = ({ onFinish, onFinishFailed }) => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ minWidth: 400 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Email"
      name="email"
      rules={[{ required: true, message: "Please input your username!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
