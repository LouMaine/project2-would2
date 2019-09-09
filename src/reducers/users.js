
import { RECEIVE_USERS } from "../actions/users";
import {ANSWER_TO_USER} from "../actions/users";
import {QUESTION_TO_USER} from "../actions/users";





export const users = (state={}, action) => {
  switch (action.type) {

    case RECEIVE_USERS: 
    return {
    ...state,
    ...action.users,
  };

     case ANSWER_TO_USER: 
      const { authedUser, qid, answer } = action;
     console.log(state, authedUser);
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
               
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.option
            }
          }
        };
      

      case QUESTION_TO_USER:  
      const { id, author } = action;

      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat([action.id])
        }, 
       
      }

  default:
  return state
  }
};
export default users;
