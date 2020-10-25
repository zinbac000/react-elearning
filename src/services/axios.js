import axios from 'axios';
import { authHeader } from 'config/helper/auth-header';
import { BASE_URL } from 'config/setting';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', ...authHeader() },
});

export default instance;
