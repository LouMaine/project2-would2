
import { showLoading, hideLoading } from "react-redux-loading-bar";
//import  {loadQuestions } from "./questions";
import { _saveQuestionAnswer } from "../_DATA";

import { _getUsers } from "../_DATA";
import { receiveUsers } from "./users";
import { addUserAnswer} from "./users"; 
import { saveAnswer } from "./questions";

//import { addQuestion, handleLoadQuestions } from "./questions";
//import { handleReceiveUsers } from "./users";
 



/**export const handleSaveQuestionAnswer = (authedUserId, questionId, answer) => {
 
  return  async dispatch => {
    await saveQuestionAnswer(authedUserId, questionId, answer);
    dispatch(handleReceiveUsers());
    dispatch(handleLoadQuestions());
  };
};
**/

export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return Promise.all(_getUsers())
    .then((users) => {
      dispatch(receiveUsers(users));
      //dispatch(getQuestions(questions));
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
      dispatch(saveAnswer(authedUser, qid, answer));
      dispatch(addUserAnswer(authedUser, qid, answer));
    })
    .then(() => dispatch(hideLoading()));
};


/**
export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => {
      dispatch(receiveUsers(users));
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
};
**/
/**export  const { authedUser } = getState();

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




