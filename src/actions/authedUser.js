export const AUTHED_LOGIN_USER = "AUTHED_LOGIN_USER";
export const AUTHED_LOGOUT_USER = "AUTHED_LOGOUT_USER";

export const AuthedloginUser = id => ({
     type: AUTHED_LOGIN_USER,
    id,
  });


export const AuthedlogoutUser = () => ({
     type: AUTHED_LOGOUT_USER,
  });
