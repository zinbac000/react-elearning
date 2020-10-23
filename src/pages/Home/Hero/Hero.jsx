import React from 'react';
import { Button } from 'antd';

import classes from './Hero.module.scss';
import { ON_MOBILE } from 'config/setting';

const Hero = () => {
  return (
    <section className={classes.Hero}>
      <div className={[classes.Hero__BgImage, ON_MOBILE].join(' ')}></div>
      <div className={classes.Hero__SloganWrapper}>
        <div className={classes.Hero__SloganMain}>
          <p>Developing & Growing</p>
          <span>Professional Developers’</span>
          <p>Technical Mastery</p>
        </div>
        <div className={classes.Hero__SloganSub}>
          <p>
            Build the labs and projects as you grow and refine your expertise.
          </p>
          <span>Build. Grow. Excel.</span>
        </div>
        <Button type="link" className={[classes.Hero__SloganButton]}>
          What Do You Want To Master?
        </Button>
      </div>
    </section>
  );
};

export default Hero;
