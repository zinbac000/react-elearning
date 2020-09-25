const initialState = {
  test: 'Test',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'test': {
      return { ...state };
    }
    default:
      return state;
  }
};
