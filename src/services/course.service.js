import axios from './axios';
import { courseConstants } from 'config/constants/course.constants';

const getAll = () =>
  axios.get(
    `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${courseConstants.GROUP_ID}`,
  );
const getCategoriesList = () =>
  axios.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);

const getByCategory = (category) =>
  axios.get(
    `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=${courseConstants.GROUP_ID}`,
  );

export const courseService = {
  getAll,
  getCategoriesList,
  getByCategory,
};
