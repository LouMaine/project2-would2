import { saveQuestionAnswer } from '../utils/api';
import { addAnswerToQuestion } from '../actions/questions';

export { getUsers } from "../utils/api";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER"


export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
  });



export const addUserAnswer = (authedUser, answer, qid) => ({
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer
  });


export const handleReceiveUsers = () => {
  return async dispatch => {
    const users = await getUsers();
    dispatch(receiveUsers(users));
  };
};

export const handleSaveQuestionAnswer = (authedUserId, questionId, answer) => {
  return async dispatch => {
    dispatch(addUserAnswer(authUser, qid, answer));
    dispatch(addAnswerToQuestion(authUser, qid, answer));

  return  async dispatch => {
    await _saveQuestionAnswer(authedUserId, questionId, answer).catch(e=> {
    console.warn('Error in handleSaveQuestionAnswer:', e);
    });
  };
}

export const addQuestionToUser=({ id, author })=> {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author
  };
}

    
