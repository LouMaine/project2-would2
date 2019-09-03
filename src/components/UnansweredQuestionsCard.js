import React from "react";
import { connect } from "react-redux";
import UserQuestionsCard from "./UserQuestionsCard";

export const UnansweredQuestions = props => {
  const { users, unansweredQuestions } = props;
  return (
    <React.Fragment>
      {unansweredQuestions.map(question => {
        const {question, author.id, answer}=unansweredQuestion;
        const user = users.find(user => user.id === question.author);
        return (
          <React.Fragment key={question.id}>
            <UserQuestionsCard
              avatarUrl={user.avatarURL}
              name={user.name}
              questionId={question.id}
              optionsSummaryText={question.optionOne.text
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
  const unansweredQuestions = [];
  const answeredQuestions = Object.keys(authedUser.answers).map(key => 
   state.questions.find(question => question.id === key)
  
  
  );

  state.questions.forEach(question => {
    let found = false;
    answeredQuestions.forEach(answeredQuestion => {
      if (question.id === answeredQuestion.id) {
        found = true;
      }
    });
    if (!found) {
      if (
        unansweredQuestions.find(
          unansweredQuestion => unansweredQuestion.id === question.id
        ) === undefined
      ) {
        unansweredQuestions.push(question);
      }
    }
  });

  return {
    users: state.users,
    unansweredQuestions: unansweredQuestions.sort((a,b)=>{
      return b.timestamp-a.timestamp
    })
  };
};

export default connect(mapStateToProps)(UnansweredQuestions);
