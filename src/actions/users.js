export const RECEIVE_USERS = "RECEIVE_USERS";
export const ANSWER_TO_USER = "ANSWER_TO_USER";
export const QUESTION_TO_USER= "QUESTION_TO_USER";


export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export function AnswerToUser(authedUser, qid, answer) {
  return {
    type: ANSWER_TO_USER,
    authedUser,
    qid,
    answer
  };
}

export function QuestionToUser( id, author ) {
  return {
    type: QUESTION_TO_USER,
    id,
    author
  };
}