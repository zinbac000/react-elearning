import { userConstants } from 'core/config/constants/user.constants';

export const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case userConstants.GETINFO_REQUEST:
      return {
        loading: true,
      };

    case userConstants.GETINFO_SUCCESS:
      return {
        user: payload.user,
      };

    case userConstants.GETINFO_FAILURE:
      return {};

    // case userConstants.DELETE_REQUEST:
    //   return {
    //     ...state,
    //     items: state.items.map((user) =>
    //       user.username === action.username
    //         ? { ...user, deleting: true }
    //         : user,
    //     ),
    //   };
    // case userConstants.DELETE_SUCCESS:
    //   return {
    //     items: state.items.filter((user) => user.username !== action.username),
    //   };
    // case userConstants.DELETE_FAILURE:
    //   return {
    //     ...state,
    //     items: state.items.map((user) => {
    //       if (user.username === action.username) {
    //         const { deleting, ...userCopy } = user;
    //         return { ...userCopy, deleteError: action.error };
    //       }

    //       return user;
    //     }),
    //   };

    case userConstants.SIGNOUT:
      return {};

    default:
      return state;
  }
};
