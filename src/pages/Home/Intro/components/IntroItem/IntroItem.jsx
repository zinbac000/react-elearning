import React from 'react';
import classes from './IntroItem.module.scss';

const IntroItem = ({ icon, title, pretitle }) => {
  return (
    <div className={classes.IntroItem}>
      <div className={classes.IntroItem__Icon}>{icon}</div>
      <div className={classes.IntroItem__Content}>
        <p>{title}</p>
        <span>{pretitle}</span>
      </div>
    </div>
  );
};

export default IntroItem;
