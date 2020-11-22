import React from 'react';

import classes from './DrawerToggler.module.scss';

const DrawerToggler = ({ clicked }) => {
  return (
    <div
      onClick={clicked}
      className={[classes.DrawerToggler, 'onMobile'].join(' ')}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggler;
