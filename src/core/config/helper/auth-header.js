export const authHeader = () => {
  let actk = JSON.parse(localStorage.getItem('user'))?.accessToken;

  if (actk) {
    return { Authorization: 'Bearer ' + actk };
  } else {
    return {};
  }
};
