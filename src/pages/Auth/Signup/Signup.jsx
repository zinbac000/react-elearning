import React from 'react';
import { Form, Input, Button } from 'antd';
import {
  IdcardOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import classes from './Signup.module.scss';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className={classes.Signup}>
      <div className={classes.Signup__Title}>
        <h1>Sign up</h1>
      </div>
      <Form form={form} name="signup" onFinish={onFinish} scrollToFirstError>
        <Form.Item
          className={classes.Signin__Username}
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
          hasFeedback
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your Password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  'The two passwords that you entered do not match!',
                );
              },
            }),
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>

        <Form.Item
          name="fullname"
          rules={[
            {
              required: true,
              message: 'Please input your Fullname!',
            },
          ]}
          hasFeedback
        >
          <Input prefix={<ProfileOutlined />} placeholder="Full Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
          hasFeedback
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your Phone number!',
            },
          ]}
          hasFeedback
        >
          <Input prefix={<PhoneOutlined />} placeholder="Phone number" />
        </Form.Item>

        <Form.Item
          name="groupid"
          rules={[
            {
              required: true,
              message: 'Please input your Group ID!',
            },
          ]}
          hasFeedback
        >
          <Input prefix={<IdcardOutlined />} placeholder="Group ID" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className={classes.Signup__SubmitBtn}>
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
      <div className={classes.Signup__ToSignin}>
        I already have an account. <Link to="/signin">SIGN IN</Link>
      </div>
    </div>
  );
};
export default Signup;
