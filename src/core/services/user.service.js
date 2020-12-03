import axios from './axios';
import { courseConstants } from 'core/config/constants/course.constants';
import { localStorageUtil } from 'core/utility/localStorage.utility';
import { apiConstants } from 'core/config/constants/api.constants';
class UserService {
  signin = async (username, password, remember) => {
    const requestData = {
      taiKhoan: username,
      matKhau: password,
    };

    return await axios
      .post(`/QuanLyNguoiDung/DangNhap`, requestData)
      .then(({ data }) => {
        localStorageUtil.setProfile(data, remember);
        return data;
      });
  };

  signout = () => {
    localStorageUtil.removeProfile();
  };

  signup = (username, password, fullname, phone, email) => {
    const requestData = {
      taiKhoan: username,
      matKhau: password,
      hoTen: fullname,
      soDT: phone,
      maNhom: courseConstants.GROUP_ID,
      email,
    };

    return axios.post(`/QuanLyNguoiDung/DangKy`, requestData);
  };

  update = (user) => {
    const requestOptions = {
      body: JSON.stringify(user),
    };

    return axios.put(
      `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      requestOptions,
    );
  };

  _delete = (username) => {
    const requestOptions = {};

    return axios.delete(
      `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${username}`,
      requestOptions,
    );
  };

  getInfo = async () => {
    try {
      const response = await axios.post(apiConstants.user.common.info);
      return response.data;
    } catch (error) {}
  };

  getAll = () => {
    return axios.get(
      `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${courseConstants.GROUP_ID}`,
    );
  };

  getByUsername = (username) => {
    return axios.get(
      `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${courseConstants.GROUP_ID}&tuKhoa=${username}`,
    );
  };
}

export const userService = new UserService();
