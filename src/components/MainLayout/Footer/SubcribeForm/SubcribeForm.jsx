import React from 'react';
import { Form, Button, Checkbox, Input } from 'antd';
import classes from './SubcribeForm.module.scss';

const SubcribeForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className={classes.SubcribeForm}
      wrapperCol={{ span: 24 }}
      layout="vertical"
      name="subcribe"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid e-mail!',
          },
          {
            required: true,
            message: 'Please input your e-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject('Please accept agreement'),
          },
        ]}
      >
        <Checkbox>I have read and agree to the terms & conditions</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Subcribe
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SubcribeForm;
