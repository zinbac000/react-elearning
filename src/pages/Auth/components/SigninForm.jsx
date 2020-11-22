import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {
  FacebookOutlined,
  GoogleOutlined,
  LinkedinOutlined,
  LockOutlined,
  TwitterOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'core/redux/actions/user.actions';

import classes from './Form.module.scss';

const SigninForm = ({ mode }) => {
  const { loggingIn } = useSelector((state) => state.authenticationReducer);

  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(userActions.signin(values));
  };

  return (
    <Form
      className={[
        classes.Form,
        classes.Form__Signin,
        mode ? classes.Form__Show : classes.Form__Hide,
      ].join(' ')}
      name="signin"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item className={classes.Form__Title}>
        <h1>Sign in</h1>
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
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        className={classes.Form__InputField}
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item className={classes.Form__Signin__FormControl}>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot">Forgot password ?</Link>
      </Form.Item>

      <Form.Item>
        <Button
          htmlType="submit"
          className={classes.Form__SubmitBtn}
          loading={loggingIn}
        >
          SIGN IN
        </Button>
      </Form.Item>

      <Form.Item>
        <p class={classes.Form__SocialText}>Or Sign in with social platforms</p>
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

export default SigninForm;
