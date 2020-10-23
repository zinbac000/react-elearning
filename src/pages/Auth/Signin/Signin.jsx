import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Signin.module.scss';

const Signin = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <section className={classes.Signin}>
      <div className={classes.Signin__Title}>
        <h1>Welcome</h1>
      </div>
      <Form
        name="sigin"
        className={classes.Signin__Form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
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
          className={classes.Signin__Password}
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

        <Form.Item className={classes.Signin__FormControl}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link className="login-form-forgot">Forgot password ?</Link>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className={classes.Signin__SubmitBtn}>
            SIGN IN
          </Button>
        </Form.Item>
      </Form>
      <div className={classes.Signin__ToSignup}>
        Don't have an account? <Link to="/signup">SIGN UP</Link>
      </div>
    </section>
  );
};

export default Signin;
