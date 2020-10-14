import axios from './axios';
import { GROUP_ID } from 'config/setting';

export class CourseService {
  fetchAllCourse = () =>
    axios.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`);
}

export const courseService = new CourseService();
