import { ON_MOBILE } from 'config/setting';
import React from 'react';

import classes from './DrawerToggler.module.scss';

const DrawerToggler = ({ clicked }) => {
  return (
    <div
      onClick={clicked}
      className={[classes.DrawerToggler, ON_MOBILE].join(' ')}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggler;
