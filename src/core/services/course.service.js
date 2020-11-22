import axios from './axios';
import { courseConstants } from 'core/config/constants/course.constants';
import { apiConstants } from 'core/config/constants/api.constants';
import { localStorageUtil } from 'core/utility/localStorage.utility';

const list = async () => {
  try {
    const res = await axios.get(
      `${apiConstants.course.common.list}?MaNhom=${courseConstants.GROUP_ID}`,
    );

    return res.data;
  } catch (error) {}
};

const enrollableList = async () => {
  try {
    const res = await axios.post(
      `${apiConstants.user.common.enrollableCourse}?TaiKhoan=${
        localStorageUtil.getProfile().taiKhoan
      }`,
    );

    return res.data;
  } catch (error) {}
};

const getCategoriesList = () => axios.get(`/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);

const getByCategory = (category) =>
  axios.get(
    `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=${courseConstants.GROUP_ID}`,
  );

export const courseService = {
  list,
  enrollableList,
  getCategoriesList,
  getByCategory,
};
