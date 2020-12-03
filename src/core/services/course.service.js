import axios from './axios';
import { courseConstants } from 'core/config/constants/course.constants';
import { apiConstants } from 'core/config/constants/api.constants';
import { localStorageUtil } from 'core/utility/localStorage.utility';
class CourseService {
  constructor() {
    this.account = localStorageUtil.getProfile()?.taiKhoan;
  }

  list = async (keyword) => {
    try {
      const _keyword = keyword ? `&tenKhoaHoc=${keyword}` : '';
      const response = await axios.get(
        `${apiConstants.course.common.list}?MaNhom=${courseConstants.GROUP_ID}${_keyword}`,
      );

      return response.data;
    } catch (error) {}
  };

  enrollableList = async () => {
    try {
      if (this.account) {
        const response = await axios.post(
          `${apiConstants.user.common.enrollableCourse}?TaiKhoan=${this.account}`,
        );
        return response.data;
      }

      return;
    } catch (error) {}
  };

  listCategories = async () => {
    try {
      const response = await axios.get(apiConstants.course.common.category);
      return response.data;
    } catch (error) {}
  };

  listWaitlistCourse = async () => {
    try {
      const data = { taiKhoan: this.account };

      if (this.account) {
        const response = await axios.post(
          apiConstants.user.common.waitlistCourse,
          data,
        );
        return response.data;
      }
      return;
    } catch (error) {}
  };
}

export const courseService = new CourseService();
