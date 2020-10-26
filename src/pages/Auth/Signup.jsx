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
import classes from './auth.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from 'redux/actions/user.actions';

const Signup = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(userActions.signup(values, history));
  };

  return (
    <div className={[classes.Auth, classes.Auth__Signup].join(' ')}>
      <div className={classes.Auth__Title}>
        <h1>Sign up</h1>
      </div>
      <Form name="signup" onFinish={onFinish} scrollToFirstError>
        <Form.Item
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
          initialValue="GP08"
          rules={[
            {
              required: true,
              message: 'Please input your Group ID!',
            },
          ]}
          hasFeedback
        >
          <Input disabled prefix={<IdcardOutlined />} placeholder="Group ID" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className={classes.Auth__SubmitBtn}>
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
      <div className={classes.Auth__Signup__ToSignin}>
        I already have an account. <Link to="/signin">SIGN IN</Link>
      </div>
    </div>
  );
};
export default Signup;
