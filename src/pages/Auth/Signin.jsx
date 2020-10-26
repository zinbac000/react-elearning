import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import classes from './auth.module.scss';
import { userActions } from 'redux/actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';

const Signin = () => {
  const { loggingIn } = useSelector((state) => state.authenticationReducer);

  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(userActions.signin(values));
  };

  return (
    <section className={[classes.Auth, classes.Auth__Signin].join(' ')}>
      <div className={classes.Auth__Title}>
        <h1>Welcome</h1>
      </div>
      <Form
        name="sigin"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
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
          className={classes.Auth__Password}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
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

        <Form.Item className={classes.Auth__Signin__FormControl}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link className="login-form-forgot">Forgot password ?</Link>
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            className={classes.Auth__SubmitBtn}
            loading={loggingIn}
          >
            SIGN IN
          </Button>
        </Form.Item>
      </Form>
      <div className={classes.Auth__Signin__ToSignup}>
        Don't have an account? <Link to="/signup">SIGN UP</Link>
      </div>
    </section>
  );
};

export default Signin;
