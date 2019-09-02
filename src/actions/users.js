import { saveQuestionAnswer } from "../utils/api";
import { AnswerToQuestion } from "../actions/questions";
//import { AnswerToQuestion} from "../actions/questions"


export const RECEIVE_USERS = "RECEIVE_USERS";
export const ANSWER_TO_USER = "ANSWER_TO_USER";
export const QUESTION_TO_USER= "QUESTION_TO_USER";


export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
  });

function AnswerToUser(authedUser, qid, answer) {
  return {
    type: ANSWER_TO_USER,
    authedUser,
    qid,
    answer
  };
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return dispatch => {
    dispatch(AnswerToUser(authedUser, qid, answer));
    dispatch(AnswerToQuestion(authedUser, qid, answer));

    return saveQuestionAnswer(authedUser, qid, answer).catch(e => {
      console.warn('Error in handleSaveQuestionAnswer:', e);
    });
  };
}

export function QuestionToUser({ id, author }) {
  return {
    type: QUESTION_TO_USER,
    id,
    author
  };
}