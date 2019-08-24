import { GET_QUESTIONS, SAVE_QUESTION, ADD_ANSWER_TO_QUESTION } from "../actions/questions";

export const questions = (state = [], action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_ANSWER_TO_QUESTION:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;

  }
};

export default questions;
