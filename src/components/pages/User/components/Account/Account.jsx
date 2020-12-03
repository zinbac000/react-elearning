import React from 'react';

import { Button, Col, Divider, Form, Input, Row } from 'antd';

import { CheckOutlined } from '@ant-design/icons';
import classes from './Account.module.scss';

const Account = () => {
  return (
    <Col xs={24} md={18} lg={19} className={classes.Account}>
      <div className={classes.Account__FormWrapper}>
        <p className={classes.Account__FormTitle}>Account</p>
        <p className={classes.Account__FormSubtitle}>
          Edit your account settings and change your password here.
        </p>
      </div>
      <Divider />
      <Col lg={{ span: 16, offset: 4 }}>
        <Form name="change_email" layout="vertical">
          <Form.Item
            name="email"
            label={
              <span>
                Email: <b>email@email.com</b> (current)
              </span>
            }
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ]}
          >
            <Input
              placeholder="Enter Your New Email"
              addonAfter={<CheckOutlined />}
            />
          </Form.Item>
        </Form>
      </Col>

      <Divider />

      <Col lg={{ span: 16, offset: 4 }}>
        <Form name="change_password" layout="vertical">
          <Form.Item name="old_password" label="Password:">
            <Input.Password placeholder="Enter Current Password" />
          </Form.Item>

          <Form.Item name="new_password">
            <Input.Password placeholder="Enter New Password" />
          </Form.Item>

          <Form.Item
            name="confirm_new_password"
            dependencies={['new_password']}
            rules={[
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (getFieldValue('new_password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    'The two passwords that you entered do not match!',
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Re-type New Password" />
          </Form.Item>

          <Form.Item>
            <Row justify="center">
              <Col>
                <Button
                  className={classes.Account__ChangePwdBtn}
                  type="primary"
                  htmlType="submit"
                >
                  Change Password
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Col>
    </Col>
  );
};

export default Account;
