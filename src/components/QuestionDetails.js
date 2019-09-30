import React  from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, CardTitle, FormGroup, Label, Input, Form, Button } from "reactstrap";
import { FaCheck } from "react-icons/fa";
import {AnswerToQuestion} from "../actions/questions";
import { handleSaveQuestionAnswer } from "../actions/shared";
import Avatar from "./Avatar";
import ErrorPage from "./ErrorPage"

/*** Used FormGroup, Card, CardBody, Labels code from the 'reactstrap' website and 'Github notes'****/
//const {question, answer, answers} =qid;
class QuestionDetails extends React.Component {
  state = {
    selectedAnswer: '',
   // selectedAnswer: qid,
  }

  radioSelected = (e) => {
    this.setState({
      selectedAnswer: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AnswerToQuestion(this.state.selectedAnswer);
  }

  render() {
    
    const {authedUser, question, answer, option, User, userId, questionAuthor, isAnswered, isOptionOneAnswered } = this.props;
   // const {selectedAnswer}=this.state;
   // const answer = selectedAnswer[option];
    
   
   if (!question) {
     return <Redirect to = "/"/>
       
    if (authedUser===null)
      return <Redirect to="/Login"/>
    }

    const {selectedAnswer} =this.state

    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const percentageOptionOne = (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2);
    const percentageOptionTwo = (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2);

    const checkmark = <FaCheck size="15" color="gray" />;

    return (

       <Card>
                       
        <CardHeader>
       { /***  Information from reactstrap Github components Cards, Forms Buttons**/}
          <user Id={questionAuthor.id}/>
          
      </CardHeader>
         <CardBody>
          <CardTitle>Rather Do...?</CardTitle>
          {isAnswered
            ?   (
              <ul>
              <li>{question.optionOne.text} ({optionOneVotes} vote(s) at {percentageOptionOne}%){isOptionOneAnswered ? checkmark : null}</li>
              <li>{question.optionTwo.text} ({optionTwoVotes} vote(s) at {percentageOptionTwo}%){isOptionOneAnswered ? checkmark : null}</li>
              </ul>
            ) : (

          <Form onSubmit={this.handleSubmit}>
              <FormGroup tag="fieldset">
    
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" value="optionOne" onChange={this.radioSelected} />{' '}
                    {question.optionOne.text}
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                  <Input type="radio" name="radio1" value="optionTwo" onChange={this.radioSelected} />{' '}
                    {question.optionTwo.text}
                  </Label>
                </FormGroup>
              </FormGroup>

              <Button disabled={selectedAnswer === ''}>Submit</Button>
            </Form>          
    )}
        </CardBody>
      </Card>

    );
  }
}
 QuestionDetails.propTypes ={
  history: PropTypes.object.isRequired,  
  authedUser: PropTypes.object.isRequired,
  question_id: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  qid: PropTypes.object.isRequired,
  question: PropTypes.object,
  questionAnswer: PropTypes.object,
  questionAuthor: PropTypes.object,
  
  answer: PropTypes.string,
  isAnswered: PropTypes.bool.isRequired,
  AnswerToQuestion: PropTypes.func.isRequired,
  isOptionOneAnswered: PropTypes.bool.isRequired,

};


const mapStateToProps = ({ authedUser, users, UserId, userId, qid, questions,  answer, selectedAnswer, match}, props) => { 
 
 
const {id}=props.match.params;
const authedUserId=[authedUser];

const question= questions[id];


 const user=[users.id].questions;
  if (users.hasOwnProperty(question.id)) {
   users=users[id];
  }

 
 const questionAuthor = users[question.author];
 const answers=users[authedUser].answers;  
 if (answers.hasOwnProperty(question.id)) {
 answer =answers[question.id];
  }

  const isOptionOneAnswered = question.optionOne.votes.includes(authedUser);
  const isOptionTwoAnswered = question.optionTwo.votes.includes(authedUser);
  const isAnswered = isOptionOneAnswered || isOptionTwoAnswered;
  

  return { authedUser, users, userId, id, qid,  question, questionAuthor, answer, isAnswered, isOptionOneAnswered,
 }; 
};


const mapDispatchToProps =( dispatch, props) => {

  const { id } = props.match.params;
  
  return {
    
  AnswerToQuestion: (answer) => {
         
   dispatch( handleSaveQuestionAnswer( id, answer));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);

