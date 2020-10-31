import React from 'react';

import { Form, Input, Button } from 'antd';
import {
  FacebookOutlined,
  GoogleOutlined,
  LinkedinOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  ProfileOutlined,
  TwitterOutlined,
  UserOutlined,
} from '@ant-design/icons';
import classes from './Form.module.scss';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from 'redux/actions/user.actions';

const SignupForm = ({ mode, handleToSignin }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(userActions.signup(values, handleToSignin));
    form.resetFields();
  };
  return (
    <Form
      form={form}
      name="signup"
      className={[
        classes.Form,
        classes.Form__Signup,
        !mode ? classes.Form__Show : classes.Form__Hide,
      ].join(' ')}
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item className={classes.Form__Title}>
        <h1>Sign up</h1>
      </Form.Item>

      <Form.Item
        className={classes.Form__InputField}
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
        className={classes.Form__InputField}
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
        className={classes.Form__InputField}
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
        className={classes.Form__InputField}
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
        className={classes.Form__InputField}
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

      <Form.Item>
        <Button htmlType="submit" className={classes.Form__SubmitBtn}>
          Sign up
        </Button>
      </Form.Item>

      <Form.Item>
        <p class={classes.Form__SocialText}>Or Sign up with social platforms</p>
        <div class={classes.Form__SocialMedia}>
          <Link to="/404" className={classes.Form__SocialIcon}>
            <FacebookOutlined />
          </Link>
          <Link to="/404" className={classes.Form__SocialIcon}>
            <TwitterOutlined />
          </Link>
          <Link to="/404" className={classes.Form__SocialIcon}>
            <GoogleOutlined />
          </Link>
          <Link to="/404" className={classes.Form__SocialIcon}>
            <LinkedinOutlined />
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
