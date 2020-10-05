import React from 'react';
import { Rate, Tooltip } from 'antd';
import {
  ClockCircleOutlined,
  HeartFilled,
  PlayCircleOutlined,
} from '@ant-design/icons';

import reactimg from '../../../../assets/img/react-logo.jpg';
import classes from './Course.module.scss';

const Course = ({ imgUrl }) => {
  const ratingTooltips = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];
  const favoriteTooltips = ['Add Favorite'];
  return (
    <div className={classes.Course}>
      <div className={classes.Course__Image}>
        <img src={reactimg} alt="course" />
      </div>
      <div className={classes.Course__Info}>
        <div className={classes.Course__Left}>
          <p className={classes.Course__Title}>Learn React</p>
          <p className={classes.Course__Author}>Someone</p>
          <div className={classes.Course__Rating}>
            <Rate
              tooltips={ratingTooltips}
              disabled
              allowHalf
              defaultValue={4}
            />
          </div>
        </div>

        <div className={classes.Course__Right}>
          <Tooltip title={favoriteTooltips}>
            <div className={classes.Course__Favorite}>
              <Rate character={<HeartFilled />} count={1} />
            </div>
          </Tooltip>
        </div>
      </div>
      <div className={classes.Course__Footer}>
        <p>
          <ClockCircleOutlined />6 hours
        </p>
        <p>
          <PlayCircleOutlined />
          12 lessions
        </p>
      </div>
    </div>
  );
};

export default Course;
