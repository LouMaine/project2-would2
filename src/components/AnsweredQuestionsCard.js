import React from "react";
import { connect } from "react-redux";
import UserQuestionsCard from "./UserQuestionsCard";
import QuestionDetails from "./QuestionDetails";

export const AnsweredQuestions = props => {
  const { answeredQuestions } = props;
  return (
    <React.Fragment>
      {answeredQuestions.map(answeredQuestion => {
        const { question, author, answer } = answeredQuestion;
        return (
          <React.Fragment key={question.id}>
            <UserQuestionsCard
              avatarUrl={author.avatarURL}
              name={author.name}
              questionId={question.id}
              optionsSummaryText={question[answer].text    
                .substring(0, 20)
                .concat("...")}
            />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const authedUser = state.users.find(user => user.id === state.authedUserId);
  const answeredQuestions = Object.keys(authedUser.answers).map(key => {
    const question = state.questions.find(question => question.id === key);
    return {
      question,
      author: state.users.find(user => user.id === question.author),
      answer: authedUser.answers[key]
    };
  });
  return {
    answeredQuestions: answeredQuestions.sort((a, b) => {
      return b.question.timestamp - a.question.timestamp;
    })
  };
};

export default connect(mapStateToProps)(AnsweredQuestions);
