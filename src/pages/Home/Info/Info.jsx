import { YoutubeOutlined } from '@ant-design/icons';
import React from 'react';

import classes from './Info.module.scss';

const Info = () => {
  return (
    <div className={classes.Info}>
      <p className={classes.Info__Title}>Why learn on Knowcode?</p>
      <div className={classes.Info__Item}>
        <div className={classes.Info__Icon}>
          <YoutubeOutlined />
        </div>
        <div className={classes.Info__Content}>
          <p>8,000+ Course</p>
          <span>Explore a wide range of skills.</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
