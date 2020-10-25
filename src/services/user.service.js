import axios from './axios';
import { authHeader } from 'config/helper/auth-header';
import { courseConstants } from 'config/constants/course.constants';

const signin = (username, password, remember) => {
  const requestData = {
    taiKhoan: username,
    matKhau: password,
  };

  return axios
    .post(`/api/QuanLyNguoiDung/DangNhap`, requestData)
    .then((response) => {
      const user = response.data;

      remember
        ? localStorage.setItem('user', JSON.stringify(user))
        : localStorage.removeItem('user');

      return user;
    });
};

const signout = () => {
  localStorage.removeItem('user');
};

const getAll = () => {
  return axios.get(
    `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${courseConstants.GROUP_ID}`,
  );
};

const getByUsername = (username) => {
  return axios.get(
    `/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${courseConstants.GROUP_ID}&tuKhoa=${username}`,
  );
};

const signup = (user) => {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return axios.post(`/api/QuanLyNguoiDung/DangKy`, requestOptions);
};

const update = (user) => {
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

const _delete = (username) => {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };

  return axios.delete(
    `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${username}`,
    requestOptions,
  );
};

export const userService = {
  signin,
  signout,
  signup,
  getAll,
  getByUsername,
  update,
  delete: _delete,
};
