import React from 'react';
import {
  HistoryOutlined,
  SafetyOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

import classes from './Intro.module.scss';
import IntroItem from './IntroItem/IntroItem';
import { ON_MOBILE_MD } from 'config/setting';

const Intro = () => {
  const itemContentList = [
    {
      icon: <YoutubeOutlined />,
      title: '8,000+ Course',
      pretitle: 'Explore a wide range of skills.',
    },

    {
      icon: <SafetyOutlined />,
      title: 'By Industry Experts',
      pretitle: 'Professional development from the best people.',
    },

    {
      icon: <HistoryOutlined />,
      title: 'Unlimited Access',
      pretitle: 'Unlock Library and learn any topic with one subscription.',
    },
  ];

  const renderIntroItem = () =>
    itemContentList.map(({ icon, title, pretitle }, index) => (
      <IntroItem key={index} icon={icon} title={title} pretitle={pretitle} />
    ));

  return (
    <section className={classes.Intro}>
      <p className={[classes.Intro__Title, ON_MOBILE_MD].join(' ')}>
        Why learn on Knowcode?
      </p>
      {renderIntroItem()}
    </section>
  );
};

export default Intro;
