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
  setProfile,
  getProfile,
  removeProfile,
};
