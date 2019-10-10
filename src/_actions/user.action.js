import { UserService } from "../Services/UserService";
/** seting action types */
export const actionTypes = {
  LOGIN_USER_REQUEST: "LOGIN_USER_REQUEST",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_ERROR: "LOGIN_USER_ERROR",
  LOGIN_USER_RESET: "LOGIN_USER_RESET"
};

/*
 * Action creators for login
 */

export function loginUserRequest() {
  return {
    type: actionTypes.LOGIN_USER_REQUEST
  };
}

export function loginUserError(error) {
  return {
    type: actionTypes.LOGIN_USER_ERROR,
    error
  };
}

export function loginUserSuccess(user) {
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    user
  };
}

export function loginUser(user) {
  return dispatch => {
    console.log("dispatchingg");
    // dispatch(loginUserRequest());
    return UserService.login(user)
      .then(user => {
        return dispatch(loginUserSuccess({ user }));
      })
      .catch(error => {
        console.log("errr", error);
        // dispatch(loginUserError(error));
      });
  };
}
