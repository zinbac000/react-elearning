import React from 'react';
import classes from './IconWithText.module.scss';

const IconWithText = ({ className, icon, text }) => {
  return (
    <div className={[classes.IconWithText, className || ''].join(' ')}>
      {icon}
      {text}
    </div>
  );
};

export default IconWithText;
