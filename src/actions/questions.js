import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { _saveQuestion} from "../_DATA";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION="SAVE_QUESTION";
export const SAVE_QUESTION_ANSWER ="SAVE_QUESTION_ANSWER";


// loading  questions
/**return {
type: GET_QUESTIONS,
questions
};
};
**/

export const getQuestions = questions => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

export const saveQuestion = question => {
     return {
     type: SAVE_QUESTION,
     question,
   };
 };

/**
export const handleLoadQuestions = () => {
return async dispatch => {
    const questions = await getQuestions();
    dispatch(loadQuestions(questions));
  };
}; 
**/

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


/**return dispatch => {
    return _getQuestions().then(response => {
      // convert questions to array
      const qIndices = Object.keys(response);
      const questions = qIndices.map(index => response[index]);
      dispatch(getQuestions(questions));
    });
    **/

export const saveAnswer = ({ authedUser, qid, answer}) => ({
  type: SAVE_QUESTION_ANSWER,
  authedUser,
  qid,
  answer
});

