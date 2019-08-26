//import {getQuestions} from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { _saveQuestion } from "../_DATA";
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


/**export function handleSaveQuestion(optionOneText, optionTwoText, author) {
 return dispatch => {
    dispatch(showLoading());

     return saveQuestion({
    optionOneText,
    optionTwoText,
    author}).then(
    question => {
    dispatch(saveQuestion(question));
    dispatch(addQuestionToUser(question))
    .then(() => dispatch(hideLoading()));
}
);
};
}
****/
/***export const handleSaveQuestions = () => {
  return async dispatch => {
    const questions = await getQuestions();
   // console.log(savedQuestion);
    // could use handleLoadQuestions here in case other questions by other users added, but assuming not frequent enough for the roundtrip call
    //dispatch(saveQuestion(savedQuestion)); 
    
    // could use an UPDATE_USER_SCORE type action, but leaderboard may be out of date as other users may have answered or created questions 
    // in time it took to submit this new question so chose to retrieve all new scores
    dispatch(getQuestions(questions)); 
  };
};
***/
export const addAnswerToQuestion = ({ authedUser, qid, answer }) => ({
  type: ADD_ANSWER_TO_QUESTION,
  authedUser,
  qid,
  answer
});



export const handleSaveQuestion = (optionOneText, optionTwoText, author)=>

 (dispatch, getState) => {
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

