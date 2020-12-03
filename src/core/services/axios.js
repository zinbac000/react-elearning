import axios from 'axios';
import { localStorageUtil } from 'core/utility/localStorage.utility';

const BASE_URL = 'https://elearning0706.cybersoft.edu.vn/api';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 30000,
});

instance.interceptors.request.use((options) => {
  const token = localStorageUtil.getProfile()?.accessToken;
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  return options;
});

export default instance;
