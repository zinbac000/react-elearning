import React from 'react';

import SubcribeForm from './SubcribeForm/SubcribeForm';
import Logo from 'components/UI/Logo/Logo';

import logo from 'assets/img/logo.svg';

import { ON_DESKTOP_MD } from 'core/config/setting';

import { Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import classes from './Footer.module.scss';

const Footer = () => {
  const { Option } = Select;
  const handleChange = (value) => console.log(`selected ${value}`);

  return (
    <footer className={classes.Footer}>
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

      <div className={[classes.Footer__Form, ON_DESKTOP_MD].join(' ')}>
        <p className={classes.Footer__Title}>Subscribe to our newsletter</p>
        <SubcribeForm />
      </div>

      <div className={classes.Footer__Bottom}>
        <Logo logo={logo} />
        <span>© 2020 Knowcode, Inc.</span>
      </div>
    </footer>
  );
};

export default Footer;
