import axios from './axios';
import { GROUP_ID } from 'config/setting';

export class CourseService {
  fetchAllCourse = () =>
    axios.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`);

  fetchCategoriesList = () => axios.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`);

  fetchCourseByCategories = (courseType) =>
    axios.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${courseType}&MaNhom=${GROUP_ID}`,
    );
}

export const courseService = new CourseService();
