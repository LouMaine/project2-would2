
import { showLoading, hideLoading } from "react-redux-loading-bar";
//import {getInitialData} from "../utils/api";
//import { _getUsers, _getQuestions, _saveQuestionAnswer } from "../_DATA";
import { _getUsers, _getQuestions, _saveQuestionAnswer } from "../_DATA";
import { receiveUsers } from "./users";
import { getQuestions} from "./questions";
import { addUserAnswer} from "./users";
import {addAnswerToQuestion } from "./questions"
import {handleReceiveUsers} from "./users";



//import { saveAnswer } from "./questions";
//import {_getQuestions} from "../utils/api";

/**export const handleSaveQuestionAnswer = (authedUserId, questionId, answer) => {
 
  return  async dispatch => {
    await _saveQuestionAnswer(authedUserId, questionId, answer);
    dispatch(handleReceiveUsers());
    dispatch(handleSaveQuestion());
  };
};**/


export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => {
      dispatch(receiveUsers(users));
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
};

export const handleSaveAnswer = (qid, answer) => (dispatch, getState) => {
  const { authedUser } = getState();

  dispatch(showLoading());
  return _saveQuestionAnswer({
    authedUser,
    qid,
    answer,
  })
    .then(() => {
      dispatch(addAnswerToQuestion(authedUser, qid, answer));
      dispatch(addUserAnswer(authedUser, qid, answer));
    })
    .then(() => dispatch(hideLoading()));
};





/***export  const { authedUser } = getState();

  dispatch(showLoading());
  return _saveQuestionAnswer({
    authedUser,
    qid,
    answer,
  })
    .then(() => {
      dispatch(saveAnswer(authedUser, qid, answer));
      dispatch(addUserAnswer(authedUser, qid, answer));
    })
    .then(() => dispatch(hideLoading()));
};
**/


/**export const handleSaveQuestion = question => {
  return async dispatch => {
    const savedQuestion = await saveQuestion(question);
    console.log(savedQuestion);
    dispatch(addQuestion(savedQuestion)); 
    
    dispatch(handleReceiveUsers());
 };
};
**/




