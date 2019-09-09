import React from "react";
import { connect } from "react-redux";
import UserQuestionsCard from "./UserQuestionsCard";
//import QuestionDetails from "./QuestionDetails";
//import {handleSaveQuestion} from "./actions/questions"
//import {QuestionToUser} from "./actions/users";
//import {AnswerToUser} from "./actions/users"

export const UnansweredQuestions = props => {
  const { answer, unansweredQuestions } = props;
  const {users} = this.props;
    const {userId} =this.state;
    
  return (
    <React.Fragment>

      {unansweredQuestions.map(unansweredQuestion => {
       const {  userId, answer, question, author, qid,  }=unansweredQuestion;
        //const authedUser= state.users.find(user => user.id === question.author);
       console.log(.name);
        return (
          <React.Fragment key={question.id}>
            <UserQuestionsCard
              avatarUrl={users.avatarURL}
              name={users.name}
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
  const unansweredQuestions = Object.keys(authedUser.answers).map(key => {
   const question = state.questions.find(question => question.id === key);
  
  
                    
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
      return b.question.timestamp-a.question.timestamp;
    })
  };
};

export default connect(mapStateToProps)(UnansweredQuestions);
