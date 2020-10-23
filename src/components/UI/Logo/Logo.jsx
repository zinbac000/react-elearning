import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Logo.module.scss';

const Logo = ({ logo }) => {
  return (
    <div className={classes.Logo}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
