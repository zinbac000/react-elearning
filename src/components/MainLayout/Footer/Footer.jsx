import React, { Component } from 'react';
import { Form, Button, Checkbox, Input, Select } from 'antd';

import classes from './Footer.module.scss';
import { GlobalOutlined } from '@ant-design/icons';
import Logo from 'components/UI/Logo/Logo';
import logo from 'assets/img/logo.svg';

export default class Footer extends Component {
  render() {
    const onFinish = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const { Option } = Select;
    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };
    return (
      <div className={classes.Footer}>
        <div className={classes.Footer__Top}>
          <div className={classes.Footer__Language}>
            <GlobalOutlined />
            <Select
              className={classes.Footer__LanguageSelect}
              dropdownClassName={classes.Footer__LanguageDropdown}
              dropdownAlign={{
                offset: [0, 10],
              }}
              defaultValue="English"
              bordered={false}
              onChange={handleChange}
            >
              <Option value="English">English</Option>
              <Option value="Vietnamese">Vietnamese</Option>
            </Select>
          </div>
        </div>

        <div className={classes.Footer__Middle}>
          <p className={classes.Footer__Title}>Company</p>
          <div className={classes.Footer__List}>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">Futured course</a>
            <a href="#">Terms</a>
            <a href="#">Privacy policy and cookie policy</a>
          </div>
        </div>

        <div className={[classes.Footer__Form, 'onDesktop-md'].join(' ')}>
          <p className={classes.Footer__Title}>Subscribe to our newsletter</p>
          <Form
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
              <Checkbox>
                I have read and agree to the terms & conditions
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Subcribe
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className={classes.Footer__Bottom}>
          <Logo logo={logo} />
          <span>© 2020 Knowcode, Inc.</span>
        </div>
      </div>
    );
  }
}
