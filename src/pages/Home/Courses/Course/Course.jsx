import React, { Fragment } from 'react';
import { Button, Card, Popover, Rate } from 'antd';
import {
  CheckOutlined,
  ClockCircleOutlined,
  HeartFilled,
  PlayCircleOutlined,
  ProjectFilled,
} from '@ant-design/icons';

import useToggle from 'Hook/useToggle';
import IconWithText from './IconWithText/IconWithText';
import classes from './Course.module.scss';

const Course = ({ course }) => {
  const { tenKhoaHoc, hinhAnh, nguoiTao, moTa } = course;
  const [imgOverlay, setImgOverlayOn, setImgOverlayOff] = useToggle(false);

  const ratingTooltips = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

  const popoverTitle = () => (
    <Fragment>
      <img src={hinhAnh} alt="course" />
      <div className={classes.Course__Popover__TitleWrapper}>
        <p className={classes.Course__Popover__Title}>{tenKhoaHoc}</p>
        <p className={classes.Course__Popover__Author}>
          with <b>{nguoiTao.hoTen || 'Anonymous'}</b>
        </p>
      </div>
    </Fragment>
  );

  const popoverContent = () => (
    <Fragment>
      <p className={classes.Course__Popover__Description}>{moTa}</p>
      {popoverChecklist.map((item, index) => (
        <div key={index} className={classes.Course__Popover__Checklist}>
          <CheckOutlined />
          <span>{item}</span>
        </div>
      ))}
      <div className={classes.Course__Popover__Footer}>
        <div className={classes.Course__Popover__Footer__Left}>
          <IconWithText icon={<ClockCircleOutlined />} text="6 hours" />
          <IconWithText icon={<PlayCircleOutlined />} text="12 lessions" />
          <IconWithText icon={<ProjectFilled />} text="Beginner" />
        </div>
        <div className={classes.Course__Popover__Footer__Right}>
          <Button className={classes.Course__Popover__Footer__Button}>
            JOIN NOW
          </Button>
        </div>
      </div>
    </Fragment>
  );

  const popoverSetting = {
    title: () => popoverTitle(),
    content: () => popoverContent(),
    placement: 'right',
    trigger: 'click',
    onVisibleChange: (e) => (!e ? setImgOverlayOff() : null),
  };

  const popoverChecklist = [
    'Fundamentals of working with Angular',
    'Create complete Angular applications',
    'Working with the Angular CLI',
    'Understanding Dependency Injection',
    'Testing with Angular',
  ];

  const courseContent = (onScreen) => {
    const onDesktop = onScreen === 'onDesktop';
    return (
      <Card
        className={[classes.Course, onScreen].join(' ')}
        cover={
          <img
            className={imgOverlay ? classes.overlayOn : undefined}
            src={hinhAnh}
            alt="course"
          />
        }
        hoverable={onDesktop}
        onClick={onDesktop ? setImgOverlayOn : undefined}
      >
        <div className={classes.Course__Info}>
          <div className={classes.Course__Wrapper}>
            <p className={classes.Course__Title}>{tenKhoaHoc}</p>
            <p className={classes.Course__Author}>
              {nguoiTao.hoTen || 'Anonymous'}
            </p>
            <Rate
              className={classes.Course__Rating}
              tooltips={ratingTooltips}
              disabled
              allowHalf
              defaultValue={4}
            />
          </div>

          <Rate
            className={classes.Course__Favorite}
            character={<HeartFilled />}
            count={1}
          />
        </div>
        <div className={classes.Course__Footer}>
          <IconWithText icon={<ClockCircleOutlined />} text="6 hours" />
          <IconWithText icon={<PlayCircleOutlined />} text="12 lessions" />
        </div>
      </Card>
    );
  };
  return (
    <Fragment>
      <Popover {...popoverSetting} overlayClassName={classes.Course__Popover}>
        {courseContent('onDesktop')}
      </Popover>
      {courseContent('onMobile')}
    </Fragment>
  );
};

export default Course;
