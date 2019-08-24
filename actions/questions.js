import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { _saveQuestion } from "../utils/_DATA";
import {addQuestionToUser} from '../actions/users';

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";



export const getQuestions = questions => {
  return ({
  type: GET_QUESTIONS,
  questions,
})
};



export const saveQuestion = question => ({
  type: SAVE_QUESTION,
  question,
});


export const handleSaveQuestion = (optionOneText, optionTwoText) => (dispatch, getState) => {
  const { authedUser } = getState();

  dispatch(showLoading());

  return _saveQuestion({
    optionOneText,
    optionTwoText,
    author: authedUser,
  })
    .then(formattedData => dispatch(saveQuestion(formattedData)))
    .then(() => dispatch(hideLoading()));
};


export const addAnswerToQuestion = ({ authedUser, qid, answer }) => ({
  type: ADD_ANSWER_TO_QUESTION,
  authedUser,
  qid,
  answer
};
}
function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  };
}

