import { combineReducers } from "redux";
import { loadingBarReducer } from 'react-redux-loading-bar';
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";

export const reducers = combineReducers({
  authedUserId: authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
});

export default reducers;