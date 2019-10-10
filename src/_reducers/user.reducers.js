import { actionTypes } from "../_actions/user.action";

const initialState = {
  meta: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
      const { user } = action;
      return {
        ...user,
        meta: {
          loading: false
        }
      };

    default:
      return state;
  }
};

export default user;
