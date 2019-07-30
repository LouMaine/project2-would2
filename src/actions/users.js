import { getUsers } from "../utils/api";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
//export const ADD_USER_ANSWER= "ADD_USER_ANSWER";



export const receiveUsers = users => {
    return {
    type: RECEIVE_USERS,
    users
  };
};


export const addUserAnswer = (authedUser, answer, qid) => ({

    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer,
    
  });


export const handleReceiveUsers = () => {
  return async dispatch => {
    const users = await getUsers();
    dispatch(receiveUsers(users));
  };
};

/**
export const addUserAnswer = (authedUser, qid, answer) => ({
  type: ADD_USER_ANSWER,
  authedUser,
  qid,
  answer,
});
**/