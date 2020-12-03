import React from 'react';

import SubcribeForm from './SubcribeForm/SubcribeForm';
import Logo from 'components/UI/Logo/Logo';

import logo from 'assets/img/logo.svg';

import { Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import classes from './Footer.module.scss';
import { Link } from 'react-router-dom';

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
          <Link to="/404">About us</Link>
          <Link to="/404">Contact us</Link>
          <Link to="/404">Futured course</Link>
          <Link to="/404">Terms</Link>
          <Link to="/404">Privacy policy and cookie policy</Link>
        </div>
      </div>

      <div className={[classes.Footer__Form, 'onDesktop-md'].join(' ')}>
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
