
import { RECEIVE_USERS } from "../actions/users";
import {ANSWER_TO_USER} from "../actions/users";
import {QUESTION_TO_USER} from "../actions/users"





const users = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_USERS: 
    return {
    ...state,
    ...action.users,
  };
     case ANSWER_TO_USER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
      case QUESTION_TO_USER:
      const { id, author } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id)
        }
      };

  default:
  return state;
  }
}

export default users;