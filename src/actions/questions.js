import {showLoading, hideLoading} from "react-redux-loading-bar";
import { _saveQuestion } from "../_DATA";
import { QuestionToUser } from "../actions/users";


export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_TO_QUESTION = "ANSWER_TO_QUESTION";


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

export const handleSaveQuestion=(optionOneText, optionTwoText, author)=> (dispatch, getState) => {
   const {authedUser} = getState();
   dispatch(showLoading());

    return _saveQuestion({
     optionOneText,
     optionTwoText,
     author: authedUser,
     })
     .then(formattedData =>	dispatch(addQuestion(formattedData)))
      	//dispatch(QuestionToUser(question));
      .then(()=>  dispatch(hideLoading())); 
      };
   
 
   