import axios from './axios';
import { courseConstants } from 'config/constants/course.constants';

class CourseService {
  getAll = () =>
    axios.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${courseConstants.GROUP_ID}`,
    );

  getCategoriesList = () => axios.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);

  getByCategory = (category) =>
    axios.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=${courseConstants.GROUP_ID}`,
    );
}

export const courseService = new CourseService();
