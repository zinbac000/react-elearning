import axios from './axios';
import { GROUP_ID } from 'config/setting';

export class CourseService {
  fetchCourse = (currentPage = 1, pageSize = 8) =>
    axios.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=${pageSize}&MaNhom=${GROUP_ID}`,
    );
}

export const courseService = new CourseService();
