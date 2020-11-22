const setToken = (token, remember = false) => {
  if (remember) {
    localStorage.setItem('token', token);
  } else {
    sessionStorage.setItem('token', token);
  }
};

const getToken = () => {
  return localStorage.getItem('token') || sessionStorage.getItem('token');
};

const removeToken = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
};

const setProfile = (profile, remember = false) => {
  if (remember) {
    localStorage.setItem('profile', JSON.stringify(profile));
  } else {
    sessionStorage.setItem('profile', JSON.stringify(profile));
  }
};

const getProfile = () => {
  const profile =
    localStorage.getItem('profile') || sessionStorage.getItem('profile');
  return JSON.parse(profile);
};

const removeProfile = () => {
  localStorage.removeItem('profile');
  sessionStorage.removeItem('profile');
};

export const localStorageUtil = {
  setToken,
  getToken,
  removeToken,
  setProfile,
  getProfile,
  removeProfile,
};
