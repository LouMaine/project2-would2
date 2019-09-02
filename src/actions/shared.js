import { showLoading, hideLoading } from "react-redux-loading-bar";
import { _getUsers, _getQuestions } from "../_DATA";

//import { getInitialData } from "../utils/api";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";



export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
};
