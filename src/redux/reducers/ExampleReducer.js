const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'a': {
      return { ...state };
    }
    default:
      return state;
  }
};
