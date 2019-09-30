import { showLoading, hideLoading } from "react-redux-loading-bar";
import { _getUsers, _getQuestions, _saveQuestionAnswer } from "../_DATA";
import { receiveUsers, AnswerToUser } from "../actions/users";
import { receiveQuestions, AnswerToQuestion  } from "../actions/questions";



export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
};

export const handleSaveQuestionAnswer = (qid, answer) => (dispatch, getState) => {
  const { authedUser } = getState();

  dispatch(showLoading());
  return _saveQuestionAnswer({
    authedUser,
    qid,
    answer,
  })
    .then(() => {
      dispatch(AnswerToQuestion(authedUser, qid, answer));
      dispatch(AnswerToUser(authedUser, qid, answer));
    })
    .then(() => dispatch(hideLoading()));
};