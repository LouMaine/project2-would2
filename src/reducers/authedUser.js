import { AUTHED_LOGIN_USER, AUTHED_LOGOUT_USER } from "../actions/authedUser";

export const authedUser = (state = "", action) => {
  switch (action.type) {
    case AUTHED_LOGIN_USER:
      return action.id;
    case AUTHED_LOGOUT_USER:
      return "";
          default:
      return state;
  }
};

export default authedUser;