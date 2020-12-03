import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import classes from './NotAvailable.module.scss';

const NotAvailable = () => {
  return (
    <section className={classes.Container}>
      <div className={classes.Wrapper}>
        <b className={classes.Oops}>Oops!</b>
        <h1>404 - PAGE NOT FOUND</h1>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Button className={['kc-primary']} type="primary">
          <Link to="/">Go to Homepage</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotAvailable;
