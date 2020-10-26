import axios from './axios';
import { authHeader } from 'config/helper/auth-header';
import { courseConstants } from 'config/constants/course.constants';

class UserService {
  signin = async (username, password, remember) => {
    const requestData = {
      taiKhoan: username,
      matKhau: password,
    };

    const response = await axios.post(
      `/api/QuanLyNguoiDung/DangNhap`,
      requestData,
    );
    const user = response.data;
    remember
      ? localStorage.setItem('user', JSON.stringify(user))
      : localStorage.removeItem('user');
    return user;
  };

  signout = () => {
    localStorage.removeItem('user');
  };

  getAll = () => {
    return axios.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${courseConstants.GROUP_ID}`,
    );
  };

  getByUsername = (username) => {
    return axios.get(
      `/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${courseConstants.GROUP_ID}&tuKhoa=${username}`,
    );
  };

  signup = (username, password, fullname, phone, groupid, email) => {
    const requestData = {
      taiKhoan: username,
      matKhau: password,
      hoTen: fullname,
      soDT: phone,
      maNhom: groupid,
      email,
    };

    return axios.post(`/api/QuanLyNguoiDung/DangKy`, requestData);
  };

  update = (user) => {
    const requestOptions = {
      method: 'PUT',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };

    return axios.put(
      `/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      requestOptions,
    );
  };

  _delete = (username) => {
    const requestOptions = {
      method: 'DELETE',
      headers: authHeader(),
    };

    return axios.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${username}`,
      requestOptions,
    );
  };
}

export const userService = new UserService();
