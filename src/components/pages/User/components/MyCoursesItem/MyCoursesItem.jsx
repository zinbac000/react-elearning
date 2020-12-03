import React, { Fragment } from 'react';

import { Button, Card, Rate } from 'antd';
import Meta from 'antd/lib/card/Meta';

import classes from './MyCoursesItem.module.scss';

const MyCoursesItem = ({ onScreen, course }) => {
  const { hinhAnh, tenKhoaHoc, nguoiTao, moTa } = course;

  return (
    <Card
      className={[classes.MyCoursesItem, onScreen].join(' ')}
      cover={<img src={hinhAnh} alt="course" />}
      //   hoverable={onDesktop}
      //   onClick={onDesktop ? setImgOverlayOn : undefined}
    >
      <Meta
        title={tenKhoaHoc}
        description={
          <Fragment>
            <div>
              <div className="onDesktop">{moTa}</div>
              <p className={classes.MyCoursesItem__Author}>
                {nguoiTao.hoTen || 'Anonymous'}
              </p>
              <Rate
                className={classes.MyCoursesItem__Rating}
                disabled
                allowHalf
                defaultValue={5}
              />
            </div>
            <Button type="danger">
              <b>Delete</b>
            </Button>
          </Fragment>
        }
      />
    </Card>
  );
};

export default MyCoursesItem;
