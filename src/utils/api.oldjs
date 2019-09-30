import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
  } from "../_DATA.js";


let DATA = {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer}

export const getUsers = async () => {
  const userData = await DATA._getUsers();
  const users = Object.keys(userData).map(key => userData[key]);
  return users;
};

  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    })
    );
  }


export const getQuestions = async () => {
  const questionData = await DATA._getQuestions();
  const questions = Object.keys(questionData).map(key => questionData[key]);

  return questions;
};

 export const saveQuestion = async question => {
  try {
    const savedQuestion = DATA._saveQuestion(question);
    return savedQuestion;
  } catch (error) {
    console.log("Error occurred, question not saved");
    return error;
  }
};
 
 

/**export const saveQuestion = async question => {
  try {
    const savedQuestion = DATA._saveQuestion(question);
    return savedQuestion;
  } catch (error) {
    console.log("Error occurred, question not saved");
    return error;
  }
};
**/
export const saveQuestionAnswer = async (authedUser, qid, answer) => {
  try {
    DATA._saveQuestionAnswer({authedUser:authedUser, qid, answer});
  } catch (error) {
    console.log("Error occurred, answer not saved", error);
  }
};
