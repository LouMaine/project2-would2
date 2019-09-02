import {RECEIVE_QUESTIONS} from "../actions/questions";
import {ANSWER_TO_QUESTION} from "../actions/questions";

import {ADD_QUESTION} from "../actions/questions";

export const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
      case ANSWER_TO_QUESTION:
      const { authedUser, qid, answer } = action;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser)
          }
        }
      };
      case ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question
      };

      default:
      return state
  }
}

export default questions;