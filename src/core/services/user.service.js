import axios from './axios';
import { courseConstants } from 'core/config/constants/course.constants';
import { localStorageUtil } from 'core/utility/localStorage.utility';

const signin = async (username, password, remember) => {
  const requestData = {
    taiKhoan: username,
    matKhau: password,
  };

  const response = await axios.post(`/QuanLyNguoiDung/DangNhap`, requestData);

  const user = response.data;
  const token = response.data.accessToken;

  localStorageUtil.setProfile(user, remember);
  localStorageUtil.setToken(token, remember);

  return { user };
};

const signout = () => {
  localStorageUtil.removeProfile();
  localStorageUtil.removeToken();
};

const getInfo = async () => {
  const response = await axios.post(`/QuanLyNguoiDung/ThongTinNguoiDung`);
  const user = response.data;

  localStorage.setItem('user', JSON.stringify(user));

  return { user };
};

const getAll = () => {
  return axios.get(
    `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${courseConstants.GROUP_ID}`,
  );
};

const getByUsername = (username) => {
  return axios.get(
    `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${courseConstants.GROUP_ID}&tuKhoa=${username}`,
  );
};

const signup = (username, password, fullname, phone, email) => {
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

const update = (user) => {
  const requestOptions = {
    body: JSON.stringify(user),
  };

  return axios.put(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, requestOptions);
};

const _delete = (username) => {
  const requestOptions = {};

  return axios.delete(
    `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${username}`,
    requestOptions,
  );
};

export const userService = {
  signin,
  signout,
  getInfo,
  getAll,
  getByUsername,
  signup,
  update,
  _delete,
};
