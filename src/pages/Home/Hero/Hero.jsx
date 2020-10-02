import React from 'react';
import { Button } from 'antd';

import bgHero from 'assets/img/hero.png';
import classes from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={classes.Hero}>
      <img className={['onMobile']} src={bgHero} alt="hero" />
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
    </div>
  );
};

export default Hero;
