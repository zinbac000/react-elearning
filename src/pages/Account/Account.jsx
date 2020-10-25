import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Account.module.scss';

const Account = () => {
  return (
    <section className={classes.Account}>
      <div className={classes.Account__Nav}>
        <div className={classes.Account__UserShort}>
          <div className={classes.Account__UserAvatar}>
            <span>K</span>
          </div>
          <div className={classes.Account__Username}>
            <h2>Knowcode</h2>
          </div>
        </div>
        <ul className={classes.Account__NavList}>
          <li>
            <Link>Account</Link>
          </li>
          <li>
            <Link>My Course</Link>
          </li>
        </ul>
      </div>
      <div className={classes.Account__Form}></div>
    </section>
  );
};

export default Account;
