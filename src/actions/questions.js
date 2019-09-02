import {showLoading, hideLoading} from "react-redux-loading-bar";
import { _saveQuestion } from "../_DATA";
import { QuestionToUser } from "../actions/users";
//import { AnsweRToQuestion} from "../actions/questions";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_TO_QUESTION = "ANSWER_TO_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export const receiveQuestions =questions=> {
  return {
  type: RECEIVE_QUESTIONS,
  questions
};
}

export function AnswerToQuestion(authedUser, qid, answer) {
  return {
    type: ANSWER_TO_QUESTION,
    authedUser,
    qid,
    answer
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export const handleSaveQuestion=(optionOneText, optionTwoText)=> (dispatch, getState) => {
   const {authedUser} = getState();
   dispatch(showLoading());

    return _saveQuestion({
     optionOneText,
     optionTwoText,
     author: authedUser
     })
     .then(
      question => {
      	dispatch(addQuestion(question));
      	dispatch(QuestionToUser(question));
        dispatch(hideLoading());  
      }
   );
 };
   